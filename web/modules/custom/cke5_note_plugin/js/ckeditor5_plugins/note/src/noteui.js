/**
 * @file registers the note toolbar button and binds functionality to it.
 */

import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/note.svg';

export default class NoteUI extends Plugin {
  init() {
    const editor = this.editor;

    // This will register the note toolbar button.
    editor.ui.componentFactory.add('note', (locale) => {
      const command = editor.commands.get('insertNote');
      const buttonView = new ButtonView(locale);

      // Create the toolbar button.
      buttonView.set({
        label: editor.t('Note'),
        icon,
        tooltip: true,
      });

      // Bind the state of the button to the command.
      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute the command when the button is clicked (executed).
      this.listenTo(buttonView, 'execute', () =>
        editor.execute('insertNote'),
      );

      return buttonView;
    });
  }
}
