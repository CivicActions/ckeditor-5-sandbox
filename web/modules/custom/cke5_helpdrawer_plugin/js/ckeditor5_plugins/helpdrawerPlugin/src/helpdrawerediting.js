import { Plugin } from 'ckeditor5/src/core'
import InsertHelpDrawerCommand from './inserthelpdrawercommand'

export default class HelpDrawerEditing extends Plugin {
  static get pluginName() {
    return 'HelpDrawerEditing';
  }

  init() {
    this._defineSchema();
    this._defineConverters();

    this.editor.commands.add(
      'insertHelpDrawer',
      new InsertHelpDrawerCommand( this.editor )
    );

  }

  _defineSchema() {
    const schema = this.editor.model.schema;

    schema.extend( '$text', {
      allowAttributes: [ 'helpDrawer' ]
    } );
  }

  _defineConverters() {
    const conversion = this.editor.conversion;

    conversion.for('downcast').attributeToElement( {
      model: 'helpDrawer',
      view: ( value, { writer } ) => {
        return writer.createAttributeElement('a', {
          'data-drawer-id': value,
          'class': 'ds-c-help-drawer__toggle ds-u-display--inline'
        } );
      }
    } );

    conversion.for('upcast').elementToAttribute( {
      view: {
        name: 'a',
        attributes: [ 'data-drawer-id' ]
      },
      model: {
        key: 'helpDrawer',
        value: viewElement => {
          return viewElement.getAttribute( 'data-drawer-id' )
        }
      }
    } );
  }
}
