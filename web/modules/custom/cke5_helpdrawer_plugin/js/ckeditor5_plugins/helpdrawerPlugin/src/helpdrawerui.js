import { Plugin } from 'ckeditor5/src/core';
import {
  ButtonView,
  clickOutsideHandler,
  ContextualBalloon
} from 'ckeditor5/src/ui';
import HelpDrawerView from './helpdrawerview';
import icon from '../../../../icons/noun_slide_out.svg';
import initializeAutocomplete from './autocomplete';

export default class HelpDrawerUI extends Plugin {
  static get requires() {
    return [ ContextualBalloon ];
  }

  init() {
    const editor = this.editor;
    const t = this.editor.t;

    this._balloon = editor.plugins.get( ContextualBalloon );
    this.formView = this._createFormView();
    this._enableBalloonActivators();

    editor.ui.componentFactory.add('helpDrawer', (locale) => {
      const buttonView = new ButtonView(locale);

      buttonView.set({
        label: t('Help Drawer'),
        icon,
        tooltip: true,
      });

      this.listenTo( buttonView, 'execute', () => {
        this._showUI();
      });

      return buttonView;
    });
  }

  _createFormView() {
    const editor = this.editor;
    const formView = new HelpDrawerView( editor.locale );

    this.listenTo( formView, 'submit', () => {
      const value  = {
        title: formView.titleInputView.fieldView.element.value,
        drawerId: formView.drawerInputView.fieldView.element.value
      };
      editor.execute( 'insertHelpDrawer', value );

      this._hideUI();
    } );

    this.listenTo( formView, 'cancel', () => {
      this._hideUI();
    } );

    clickOutsideHandler( {
      emitter: formView,
      activator: () => this._balloon.visibleView === formView,
      contextElements: [ this._balloon.view.element ],
      callback: () => this._hideUI()
    } );

    return formView;
  }

  _showUI() {
    const editor = this.editor;
    const selection = editor.model.document.selection;

    this._enableDrawerAutocomplete();

    const commandValue = this.editor.commands.get( 'insertHelpDrawer' ).value;

    this._balloon.add( {
      view: this.formView,
      position: this._getBalloonPositionData()
    } );

    this.formView.drawerInputView.isEnabled = selection.getFirstRange().isCollapsed;

    if ( commandValue ) {
      this.formView.titleInputView.fieldView.value = commandValue.text;
      this.formView.drawerInputView.fieldView.value = commandValue.drawerId;
    } else {
      this.formView.titleInputView.fieldView.value = '';
      this.formView.drawerInputView.fieldView.value = '';
    }

    this.formView.focus();
  }

  _hideUI() {
    this.formView.titleInputView.fieldView.value = '';
    this.formView.drawerInputView.fieldView.value = '';
    this.formView.element.reset();

    this._balloon.remove( this.formView );

    this.editor.editing.view.focus();
  }

  _getBalloonPositionData() {
    const view = this.editor.editing.view;
    const viewDocument = view.document;
    let target = null;

    target = () => view.domConverter.viewRangeToDom(
      viewDocument.selection.getFirstRange()
    );

    return {
      target
    };
  }

  _enableBalloonActivators() {
    const editor = this.editor;
    const document = editor.editing.view.document;

    this.listenTo( document, 'click', () => {
      const parentDrawer = this._getSelectedHelpDrawerElement();
      if ( parentDrawer ) {
        this._showUI();
      }
    } );
  }

  _getSelectedHelpDrawerElement() {
    const view = this.editor.editing.view;
    const selection = view.document.selection;
    const selectedElement = selection.getSelectedElement();

    if ( selection.isCollapsed || selectedElement && this._isHelpDrawer( selectedElement ) ) {
      return this._findHelpDrawerElementAncestor( selection.getFirstPosition() );
    } else {
      const range = selection.getFirstRange().getTrimmed();
      const startDrawer = this._findHelpDrawerElementAncestor( range.start );
      const endDrawer = this._findHelpDrawerElementAncestor( range.end );

      if ( !startDrawer || startDrawer !== endDrawer ) {
        return null;
      }
      if ( view.createRangeIn( startDrawer ).getTrimmed().isEqual( range ) ) {
        return startDrawer;
      } else {
        return null;
      }
    }
  }

  _findHelpDrawerElementAncestor( position ) {
    if ( !position ) {
      return null;
    }

    let parent = position.parent;
    while ( parent ) {
      if ( parent.is( 'element' ) && this._isHelpDrawer( parent ) ) {

        return parent;
      }

      parent = parent.parent;
    }

    return null;
  }

  _isHelpDrawer( viewElement ) {
    return !!viewElement.hasAttribute( 'data-drawer-id' );
  }

  _enableDrawerAutocomplete() {
    const editor = this.editor;
    const drawerFormView = this.formView;
    let wasAutocompleteAdded = false;

    editor.plugins.get('ContextualBalloon')._rotatorView.content.on('add', ( evt, view ) => {
      if (view !== drawerFormView || wasAutocompleteAdded ) {
        return;
      }

      let selected;

      initializeAutocomplete(
        drawerFormView.titleInputView.fieldView.element,
        {
          autocompleteUrl: Drupal.url('admin/cke5_helpdrawer_plugin/helpdrawer/autocomplete'),
          selectHandler: (event, { item }) => {
            if (item.label || item.value) {
              if (!item.label || !item.value) {
                throw 'Missing path param.' + JSON.stringify(item);
              }

              this.set('drawerId', item.id);
              this.set('title', item.label);
            } else {
              this.set('drawerId', null);
              this.set('title', null);
            }

            drawerFormView.titleInputView.fieldView.value = item.label;
            drawerFormView.drawerInputView.fieldView.value = item.id;
            selected = true;
            return false;
          },
          openHandler: (event) => {
            selected = false;
          },
          closeHandler: (event) => {
            if (!selected) {
              this.set('drawerId', null);
              this.set('title', null);
            }
            selected = false;
          }
        }
      );

      wasAutocompleteAdded = true;
      drawerFormView.titleInputView.fieldView.template.attributes.class.push('form-helpdrawer-autocomplete');
    });
  }
}
