import { Plugin } from "ckeditor5/src/core";
import InsertTooltipCommand from "./inserttooltipcommand";

export default class TooltipEditing extends Plugin {
  static get pluginName() {
    return 'TooltipEditing';
  }

  init() {
    this._defineSchema();
    this._defineConverters();

    this.editor.commands.add(
      'insertTooltip',
      new InsertTooltipCommand( this.editor )
    );
  }

  /**
   * This registers the structure that will be seen by CKEditor 5 as
   * <tooltip data-tooltip-id></tooltip>
   */
  _defineSchema() {
    const schema = this.editor.model.schema;
    schema.extend( '$text', { allowAttributes: 'tooltip' } );
  }

  /**
   * Determines how to convert the tooltip model from the markup and vice-versa.
   */
  _defineConverters() {
    const conversion = this.editor.conversion;

    conversion.for('downcast').attributeToElement( {
      model: 'tooltip',
      view: ( value, { writer } ) => {
        return writer.createAttributeElement('a', {
          'data-tooltip-id': value,
          'class': 'ds-c-tooltip__trigger-link'
        }, {priority: 5});
      }
    } );

    conversion.for('upcast').elementToAttribute( {
      view: {
        name: 'a',
        attributes: [ 'data-tooltip-id' ]
      },
      model: {
        key: 'tooltip',
        value: viewElement => viewElement.getAttribute( 'data-tooltip-id' ),
      }
    } );
  }
}
