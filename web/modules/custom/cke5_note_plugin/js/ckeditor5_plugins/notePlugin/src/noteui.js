/**
 * @file registers the note toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import { ButtonView, ContextualBalloon, clickOutsideHandler } from 'ckeditor5/src/ui';
import NoteView from "./noteview";
import icon from '../../../../icons/note.svg';

export default class NoteUI extends Plugin {
  static get requires() {
    return [ ContextualBalloon ];
  }
  init() {
    const editor = this.editor;

    this._balloon = editor.plugins.get( ContextualBalloon );
    this.formView = this._createFormView();

    // This will register the note toolbar button.
    editor.ui.componentFactory.add('note', (locale) => {
      const buttonView = new ButtonView( locale );

      // Create the toolbar button.
      buttonView.set( {
        label: editor.t( 'Note' ),
        icon,
        tooltip: true,
      } );

      // Execute the command when the button is clicked (executed).
      this.listenTo( buttonView, 'execute', () => {
          this._showUI();
      } );

      return buttonView;
    } );
  }

  _createFormView() {
    const editor = this.editor;
    const formView = new NoteView( editor.locale );

    this.listenTo( formView.noteColorSelectorView, 'execute', ( eventInfo ) => {
      const { id } = eventInfo.source;
      const value = {
        color: id
      };
      editor.execute( 'insertNote', value );

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
    this._balloon.add( {
      view: this.formView,
      position: this._getBalloonPositionData()
    } );

    this.formView.focus();
  }

  _hideUI() {
    this.formView.element.reset();
    this._balloon.remove( this.formView );
    this.editor.editing.view.focus();
  }

  _getBalloonPositionData() {
    const view = this.editor.editing.view;
    const viewDocument = view.document;
    let target;

    target = () => view.domConverter.viewRangeToDom(
      viewDocument.selection.getFirstRange()
    );

    return {
      target
    };
  }
}
