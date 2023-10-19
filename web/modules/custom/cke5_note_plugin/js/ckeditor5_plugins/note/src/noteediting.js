import { Plugin } from 'ckeditor5/src/core';
import { toWidget, toWidgetEditable } from 'ckeditor5/src/widget';
import { Widget } from 'ckeditor5/src/widget';
import InsertNoteCommand from './insertnotecommand';

// cSpell:ignore note insertnotecommand

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with note as this model:
 * <note>
 *    <noteTitle></noteTitle>
 *    <noteDescription></noteDescription>
 * </note>
 *
 * Which is converted for the browser/user as this markup
 * <div class="ds-c-alert">
 *   <div class="ds-c-alert__body">
 *     <div class="ds-c-alert__heading"></div>
 *     <div class="ds-c-alert__text"></div>
 *   </div>
 * </div>
 *
 * This file has the logic for defining the note model, and for how it is
 * converted to standard DOM markup.
 */
export default class NoteEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    this._defineSchema();
    this._defineConverters();
    this.editor.commands.add(
      'insertNote',
      new InsertNoteCommand(this.editor),
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <note>
   *    <noteTitle></noteTitle>
   *    <noteDescription></noteDescription>
   * </note>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('note', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
    });

    schema.register('noteTitle', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      isLimit: true,
      // This is only to be used within note.
      allowIn: 'note',
      // Allow content that is allowed in blocks (e.g. text with attributes).
      allowContentOf: '$block',
    });

    schema.register('noteDescription', {
      isLimit: true,
      allowIn: 'note',
      allowContentOf: '$root',
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow note inside noteDescription.
      if (
        context.endsWith('noteDescription') &&
        childDefinition.name === 'note'
      ) {
        return false;
      }
    });
  }

  /**
   * Converters determine how CKEditor 5 models are converted into markup and
   * vice-versa.
   */
  _defineConverters() {
    // Converters are registered via the central editor object.
    const { conversion } = this.editor;

    // Upcast Converters: determine how existing HTML is interpreted by the
    // editor. These trigger when an editor instance loads.
    conversion.for('upcast').add( dispatcher => {
      // Look for every view div element.
      dispatcher.on( 'element:div', ( evt, data, conversionApi ) => {
        // Get all the necessary items from the conversion API object.
        const {
          consumable,
          writer,
          safeInsert,
          convertChildren,
          updateConversionResult
        } = conversionApi;

        // Get view item from data object.
        const { viewItem } = data;

        // Define elements consumables.
        const wrapper = { name: true, classes: 'ds-c-alert' };
        const innerWrapper = { name: true, classes: 'ds-c-alert__body'};

        // Tests if the view element can be consumed.
        if ( !consumable.test( viewItem, wrapper ) ) {
          return;
        }

        // Check if there is only one child.
        if ( viewItem.childCount !== 1 ) {
          return;
        }

        // Get the first child element.
        const firstChildItem = viewItem.getChild( 0 );

        // Check if the first element is a div.
        if ( !firstChildItem.is( 'element', 'div' ) ) {
          return;
        }

        // Tests if the first child element can be consumeed.
        if ( !consumable.test( firstChildItem, innerWrapper ) ) {
          return;
        }

        // Create model element.
        const modelElement = writer.createElement( 'note' );

        // Insert element on a current cursor location.
        if ( !safeInsert( modelElement, data.modelCursor ) ) {
          return;
        }

        // Consume the main outer wrapper element.
        consumable.consume( viewItem, wrapper );
        // Consume the inner wrapper element.
        consumable.consume( firstChildItem, wrapper );

        // Handle children conversion inside the inner wrapper element.
        convertChildren( firstChildItem, modelElement );

        // Necessary function call to help setting model range and cursor
        // for some specific cases when element being split.
        updateConversionResult( modelElement, data );
      } );
    });

    // If <div class="ds-c-alert__heading"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    conversion.for('upcast').elementToElement({
      model: 'noteTitle',
      view: {
        name: 'div',
        classes: 'ds-c-alert__heading',
      },
    });

    // If <div class="ds-c-alert__text"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    conversion.for('upcast').elementToElement({
      model: 'noteDescription',
      view: {
        name: 'div',
        classes: 'ds-c-alert__text',
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    conversion.for('dataDowncast').elementToStructure({
      model: 'note',
      view: ( modelElement, { writer } ) => {
        return writer.createContainerElement( 'div', { class: 'ds-c-alert' }, [
          writer.createContainerElement( 'div', { class: 'ds-c-alert__body' }, [
            writer.createSlot()
          ] )
        ] );
      }
    });

    // Instances of <noteTitle> are saved as
    // <div class="ds-c-alert__heading">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'noteTitle',
      view: {
        name: 'div',
        classes: 'ds-c-alert__heading',
      },
    });

    // Instances of <noteDescription> are saved as
    // <div class="ds-c-alert__text">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'noteDescription',
      view: {
        name: 'div',
        classes: 'ds-c-alert__text',
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <note> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToStructure({
      model: 'note',
      view: ( modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createContainerElement('div', { class: 'ds-c-alert' }, [
          viewWriter.createContainerElement( 'div', { class: 'ds-c-alert__body' }, [
            viewWriter.createSlot()
          ] )
        ] );

        return toWidget( div, viewWriter, { label: 'note widget' });
      },
    });

    // Convert the <noteTitle> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'noteTitle',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'ds-c-alert__heading',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });

    // Convert the <noteDescription> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'noteDescription',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'ds-c-alert__text',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });
  }
}
