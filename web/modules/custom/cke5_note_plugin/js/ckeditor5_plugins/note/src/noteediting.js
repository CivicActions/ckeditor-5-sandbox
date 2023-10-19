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
 * <section class="note">
 *   <h2 class="note-title"></h1>
 *   <div class="note-description"></div>
 * </section>
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
    //
    // If <section class="note"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <note> model.
    conversion.for('upcast').elementToElement({
      model: 'note',
      view: {
        name: 'section',
        classes: 'note',
      },
    });

    // If <h2 class="note-title"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <noteTitle> model, provided it is a child element of <note>,
    // as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'noteTitle',
      view: {
        name: 'h2',
        classes: 'note-title',
      },
    });

    // If <h2 class="note-description"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <noteDescription> model, provided it is a child element of
    // <note>, as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'noteDescription',
      view: {
        name: 'div',
        classes: 'note-description',
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <note> are saved as
    // <section class="note">{{inner content}}</section>.
    conversion.for('dataDowncast').elementToElement({
      model: 'note',
      view: {
        name: 'section',
        classes: 'note',
      },
    });

    // Instances of <noteTitle> are saved as
    // <h2 class="note-title">{{inner content}}</h2>.
    conversion.for('dataDowncast').elementToElement({
      model: 'noteTitle',
      view: {
        name: 'h2',
        classes: 'note-title',
      },
    });

    // Instances of <noteDescription> are saved as
    // <div class="note-description">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'noteDescription',
      view: {
        name: 'div',
        classes: 'note-description',
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <note> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'note',
      view: (modelElement, { writer: viewWriter }) => {
        const section = viewWriter.createContainerElement('section', {
          class: 'note',
        });

        return toWidget(section, viewWriter, { label: 'note widget' });
      },
    });

    // Convert the <noteTitle> model into an editable <h2> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'noteTitle',
      view: (modelElement, { writer: viewWriter }) => {
        const h2 = viewWriter.createEditableElement('h2', {
          class: 'note-title',
        });
        return toWidgetEditable(h2, viewWriter);
      },
    });

    // Convert the <noteDescription> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'noteDescription',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'note-description',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });
  }
}
