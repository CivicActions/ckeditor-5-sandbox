import {
  ButtonView,
  FocusCycler,
  View,
  FormHeaderView,
  Model,
  submitHandler,
  createDropdown,
  addListToDropdown
} from 'ckeditor5/src/ui';
import { icons } from 'ckeditor5/src/core';
import {
  FocusTracker,
  KeystrokeHandler,
  Collection
} from 'ckeditor5/src/utils';

export default class NoteView extends View {
  constructor( locale ) {
    super( locale );
    const t = locale.t;

    this.focusTracker = new FocusTracker();
    this.keystrokes = new KeystrokeHandler();

    this.formHeader = new FormHeaderView( locale, { 'label': t( 'Add Note' ) } );

    this.noteTypeSelectorView = this._createDropdown( locale, t( 'Select a type:' ) );

    this.saveButtonView = this._createButton( t( 'Save' ), icons.check, 'ck-button-save' );
    this.saveButtonView.type = 'submit';

    this.childViews = this.createCollection( [
      this.formHeader,
      this.noteTypeSelectorView,
      this.saveButtonView
    ] );

    this._focusCycler = new FocusCycler( {
      focusables: this.childViews,
      focusTracker: this.focusTracker,
      keystrokeHandler: this.keystrokes,
      actions: {
        focusPrevious: 'shift + tab',
        focusNext: 'tab'
      }
    } );

    this.setTemplate( {
      tag: 'form',
      attributes: {
        class: [ 'ck', 'ck-note-form', 'ck-responsive-form' ],
        tabIndex: '-1',
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

  _createDropdown( locale, label ) {
    const t = locale.t;

    const dropdown = createDropdown( locale );
    dropdown.buttonView.set( {
      isOn: false,
      withText: true,
      label: label,
      tooltip: true
    } );
    dropdown.extendTemplate( {
      attributes: {
        class: [
          'ck-note-dropdown'
        ]
      }
    } );

    const type = new Collection();

    type.add( {
      type: 'button',
      model: new Model( {
        id: '',
        withText: true,
        label: t( 'Informational' )
      } )
    } );
    type.add( {
      type: 'button',
      model: new Model( {
        id: 'ds-c-alert--warn',
        withText: true,
        label: t( 'Warning' )
      } )
    } );
    type.add( {
      type: 'button',
      model: new Model( {
        id: 'ds-c-alert--success',
        withText: true,
        label: t( 'Success' )
      } )
    } );
    addListToDropdown( dropdown, type );

    return dropdown;
  }

  _createButton( label, icon, className ) {
    const button = new ButtonView();

    button.set( {
      label,
      icon,
      tooltip: true,
      class: className
    } );

    return button;
  }
}
