/**
 * @module tablePlugin/enhancedtable/enhancedtableediting
 */

import { Plugin } from 'ckeditor5/src/core';
import SetTableClass from './commands/setTableClass';

/**
 * The table caption editing plugin.
 */
export default class EnhancedTableEditing extends Plugin {
  /**
   * @inheritDoc
   */
  static get pluginName() {
    return 'EnhancedTableEditing';
  }

  /**
   * @inheritDoc
   */
  afterInit() {
    const editor = this.editor;
    const model = editor.model;

    const table_classes = [
      { id: 'sticky', classes: 'cke5-sticky-enabled' },
      { id: 'responsive', classes: 'cke5-responsive-table' }
    ];

    // Extends the table model to allow extra attributes.
    model.schema.extend('table', {
      allowAttributes: ['sticky', 'responsive', 'class']
    });

    // Define all the commands.
    editor.commands.add('setStickyTableClass', new SetTableClass(editor, 'sticky'));
    editor.commands.add('setResponsiveTableClass', new SetTableClass(editor, 'responsive'));

    table_classes.forEach((tableClass) => {
      editor.model.schema.extend('table', { allowAttributes: tableClass.id });

      editor.conversion.for('upcast').attributeToAttribute({
        model: {
          name: 'table',
          key: tableClass.id,
          value: true
        },
        view: {
          key: 'class',
          value: tableClass.classes
        }
      });

      const val = 'attribute:' + tableClass.id + ':table';

      // Apply attribute to table element no matter if it's needed or not.
      editor.conversion.for('downcast').add(dispatcher => {
        dispatcher.on(val, (evt, data, conversionApi) => {
          const viewElement = conversionApi.mapper.toViewElement(data.item);
          conversionApi.writer.addClass(tableClass.classes, viewElement);
        });
      });

      let tableWrapperClass = 'table-wrapper';

      this._dispatchTableCases(tableClass, tableWrapperClass);
    });
  }

  /**
   * Helps to process the dispatcher.
   *
   * @param tableClass Provides the "sticky" and "responsive" attributes.
   * @param classes The sticky and responsive table classes.
   * @param tableWrapperClass The wrapper div class.
   *
   */
  _dispatchTableCases(tableClass, tableWrapperClass) {
    const editor = this.editor;
    const val = 'attribute:' + tableClass.id + ':table';
    editor.conversion.for('downcast').add(dispatcher => {
      dispatcher.on(val, (evt, data, conversionApi) => {
        if (data.item.name === 'table') {
          const viewElement = conversionApi.mapper.toViewElement(data.item);
          const { writer, mapper } = conversionApi;
          const viewElementParent = viewElement.parent;

          // Translate the position in the model to a position in the view.
          const viewPosition = mapper.toViewPosition(data.range.start);

          // Check if a <div> wrapper already exists and if yes add case classes.
          if (viewElementParent.name === 'div') {
            viewElementParent._addClass(tableWrapperClass);
          }

          // If not, then create a <div> element that will be inserted into
          // the view at the `viewPosition`.
          if (viewElementParent.name !== 'div') {
            const div = writer.createContainerElement('div', { class: tableWrapperClass });

            // Insert the <figure> element that wrap the <table> element.
            writer.insert(writer.createPositionAt(div, 0), viewElement);

            // Add the newly created view element to the view.
            writer.insert(viewPosition, div);
          }

          // Remember to stop the event propagation.
          evt.stop();
        }
      });
    });
  }
}
