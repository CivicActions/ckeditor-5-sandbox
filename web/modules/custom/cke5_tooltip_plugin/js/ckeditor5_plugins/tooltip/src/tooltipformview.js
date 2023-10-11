import {
  ButtonView,
  createLabeledInputText,
  FocusCycler,
  FormHeaderView,
  LabeledFieldView,
  submitHandler,
  View
} from "ckeditor5/src/ui";
import { icons } from "ckeditor5/src/core";
import {
  FocusTracker,
  KeystrokeHandler
} from "ckeditor5/src/utils";

export default class TooltipFormView extends View {
  constructor( locale ) {
    super( locale );
    const t = locale.t;

    this.focusTracker = new FocusTracker();
    this.keystrokes = new KeystrokeHandler();

    this.formHeader = new FormHeaderView( locale, {'label': t('Add tooltip')});

    this.titleInputView = this._createInput('Tooltip Title' );
    this.titleInputView.infoText = t('Start typing the title of the tooltip you want to link to, then select it from the select list.');
    this.tooltipInputView = this._createInput( 'Tooltip Id' );

    this.saveButtonView = this._createButton( t( 'Save' ), icons.check, 'ck-button-save' );
    this.saveButtonView.type = 'submit';
    this.cancelButtonView = this._createButton( t( 'Cancel' ), icons.cancel, 'ck-button-cancel');
    this.cancelButtonView.delegate( 'execute' ).to( this, 'cancel' );

    this.childViews = this.createCollection( [
      this.formHeader,
      this.titleInputView,
      this.tooltipInputView,
      this.saveButtonView,
      this.cancelButtonView
    ] );

    this._focusCycler = new FocusCycler( {
      focusables: this.childViews,
      focusTracker: this.focusTracker,
      keystrokeHandler: this.keystrokes,
      actions: {
        focusPrevious: 'shift + tab',
        focusNext: 'tab'
      }
    })

    this.setTemplate( {
      tag: 'form',
      attributes: {
        class: [ 'ck', 'ck-tooltip-form', 'ck-responsive-form' ],
        tabindex: '-1',
      },
      children: this.childViews,
    } );
  }

  render() {
    super.render();

    submitHandler( {
      view: this
    } );

    this.childViews._items.forEach( view => {
      this.focusTracker.add( view.element )
    } );

    this.keystrokes.listenTo( this.element );
  }

  destroy() {
    super.destroy();

    this.focusTracker.destroy();
    this.keystrokes.destroy();
  }

  focus() {
    this.childViews.get(1).focus();
  }

  _createInput( label ) {
    const t = this.locale.t;
    const labeledInput = new LabeledFieldView( this.locale, createLabeledInputText);

    labeledInput.label = t( label );

    return labeledInput;
  }

  _createButton( label, icon, className ) {
    const button = new ButtonView();

    button.set( {
      label,
      icon,
      tooltip: true,
      class: className,
    } );

    return button;
  }
}
