import { Plugin } from "ckeditor5/src/core";
import {
  ButtonView,
  clickOutsideHandler,
  ContextualBalloon
} from "ckeditor5/src/ui";
import TooltipFormView from "./tooltipformview";
import icon from "../../../../icons/tooltip.svg";
import initializeAutocomplete from "./autocomplete";

export default class TooltipUI extends Plugin {
  static get requires() {
    return [ ContextualBalloon ];
  }

  init() {
    const editor = this.editor;
    const t = editor.t;

    this._balloon = editor.plugins.get( ContextualBalloon );
    this.formView = this._createFormView();
    this._enableBalloonActivators();

    editor.ui.componentFactory.add( 'tooltip', ( locale ) => {
      const buttonView = new ButtonView( locale );

      buttonView.set( {
        label: t( 'Tooltip' ),
        icon,
        tooltip: true,
      } );

      this.listenTo( buttonView, 'execute', () => {
        this._showUI();
      } );

      return buttonView;
    } );
  }

  _createFormView() {
    const editor = this.editor;
    const formView = new TooltipFormView( editor.locale );

    // When submitted execute the insertTooltip command with form values.
    this.listenTo( formView, 'submit', () => {
      const value  = {
        title: formView.titleInputView.fieldView.element.value,
        tooltipId: formView.tooltipInputView.fieldView.element.value
      };
      editor.execute( 'insertTooltip', value );

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

  // Show the tooltip form view
  _showUI() {
    const editor = this.editor;
    const selection = editor.model.document.selection;

    this._enableTooltipAutocomplete();

    const commandValue = this.editor.commands.get( 'insertTooltip' ).value;

    this._balloon.add( {
      view: this.formView,
      position: this._getBalloonPositionData()
    } );

    this.formView.tooltipInputView.isEnabled = selection.getFirstRange().isCollapsed;

    if ( commandValue ) {
      this.formView.titleInputView.fieldView.value = commandValue.text;
      this.formView.tooltipInputView.fieldView.value = commandValue.tooltipId;
    } else {
      this.formView.titleInputView.fieldView.value = '';
      this.formView.tooltipInputView.fieldView.value = '';
    }

    this.formView.focus();
  }

  // Hide the tooltip form view
  _hideUI() {
    this.formView.titleInputView.fieldView.value = '';
    this.formView.tooltipInputView.fieldView.value = '';
    this.formView.element.reset();

    this._balloon.remove( this.formView );

    this.editor.editing.view.focus();
  }

  _getBalloonPositionData() {
    const view = this.editor.editing.view;
    const viewDocument = view.document;

    let target = () => view.domConverter.viewRangeToDom(
      viewDocument.selection.getFirstRange()
    );
    return {
      target
    };
  }

  // Show the balloon when a tooltip is clicked
  _enableBalloonActivators() {
    const editor = this.editor;
    const document = editor.editing.view.document;

    this.listenTo( document, 'click', () => {
      const parentTooltip = this._getSelectedTooltipElement();
      if ( parentTooltip ) {
        this._showUI();
      }
    } );
  }

  _getSelectedTooltipElement() {
    const view = this.editor.editing.view;
    const selection = view.document.selection;
    const selectedElement = selection.getSelectedElement();

    if ( selection.isCollapsed || selectedElement && this._isTooltip( selectedElement ) ) {
      return this._findTooltipElementAncestor( selection.getFirstPosition() );
    } else {
      const range = selection.getFirstRange().getTrimmed();
      const startTooltip = this._findTooltipElementAncestor( range.start );
      const endTooltip = this._findTooltipElementAncestor( range.end );

      if ( !startTooltip || startTooltip !== endTooltip ) {
        return null;
      }
      if ( view.createRangeIn( startTooltip ).getTrimmed().isEqual( range ) ) {
        return startTooltip;
      } else {
        return null;
      }
    }
  }

  _findTooltipElementAncestor( position ) {
    if ( !position ) {
      return null;
    }

    let parent = position.parent;
    while ( parent ) {
      if ( parent.is( 'element' ) && this._isTooltip( parent ) ) {
        return parent;
      }

      parent = parent.parent;
    }

    return null;
  }

  _isTooltip( viewElement ) {
    return !!viewElement.hasAttribute( 'data-tooltip-id' );
  }

  _enableTooltipAutocomplete() {
    const editor = this.editor;
    const tooltipFormView = this.formView;
    let wasAutocompleteAdded = false;

    editor.plugins.get('ContextualBalloon')._rotatorView.content.on('add', ( evt, view ) => {
      if (view !== tooltipFormView || wasAutocompleteAdded ) {
        return;
      }

      let selected;

      initializeAutocomplete(
        tooltipFormView.titleInputView.fieldView.element,
        {
          autocompleteUrl: Drupal.url('admin/cke5_tooltip_plugin/tooltip/autocomplete'),
          selectHandler: (event, { item }) => {
            if (item.label || item.value) {
              if (!item.label || !item.value) {
                throw 'Missing path param.' + JSON.stringify(item);
              }

              this.set('tooltipId', item.id);
              this.set('title', item.label);
            } else {
              this.set('tooltipId', null);
              this.set('title', null);
            }

            tooltipFormView.titleInputView.fieldView.value = item.label;
            tooltipFormView.tooltipInputView.fieldView.value = item.id;
            selected = true;
            return false;
          },
          openHandler: () => {
            selected = false;
          },
          closeHandler: () => {
            if (!selected) {
              this.set('tooltipId', null);
              this.set('title', null);
            }
            selected = false;
          }
        }
      );

      wasAutocompleteAdded = true;
      tooltipFormView.titleInputView.fieldView.template.attributes.class.push('form-tooltip-autocomplete');
    });
  }
}
