/**
 * @file defines InsertNoteCommand, which is executed when the note
 * toolbar button is pressed.
 */
// cSpell:ignore noteediting

import { Command } from 'ckeditor5/src/core';

export default class InsertNoteCommand extends Command {
  execute( { type } ) {
    const { model } = this.editor;

    model.change( ( writer ) => {
      // Insert <note>*</note> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent( createNote( writer, type ) );
    } );
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // note is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'note',
    );

    // If the cursor is not in a location where a note can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
  }
}

function createNote( writer, type ) {
  // Create instances of the three elements registered with the editor in
  // noteediting.js.
  const note = writer.createElement( 'note' );
  writer.setAttribute( 'class', 'ds-c-alert ' + type, note );
  const noteTitle = writer.createElement( 'noteTitle' );
  const noteDescription = writer.createElement( 'noteDescription' );

  // Append the title and description elements to the note, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append( noteTitle, note );
  writer.append( noteDescription, note );

  // The noteDescription text content will automatically be wrapped in a
  // `<p>`.
  writer.appendElement( 'paragraph', noteDescription );

  // Return the element to be added to the editor.
  return note;
}
