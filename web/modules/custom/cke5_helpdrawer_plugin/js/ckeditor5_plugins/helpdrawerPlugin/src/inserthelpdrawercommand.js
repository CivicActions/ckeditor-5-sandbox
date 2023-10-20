import { Command } from 'ckeditor5/src/core';
import { findAttributeRange } from 'ckeditor5/src/typing';
import getRangeText from './utils'
import { toMap } from 'ckeditor5/src/utils';

export default class InsertHelpDrawerCommand extends Command {
  refresh() {
    const model = this.editor.model;
    const selection = model.document.selection;
    const firstRange = selection.getFirstRange();

    if ( firstRange.isCollapsed ) {
      if (selection.hasAttribute('helpDrawer')) {
        const attributeValue = selection.getAttribute('helpDrawer');

        const drawerRange = findAttributeRange(selection.getFirstPosition(), 'helpDrawer', attributeValue, model);

        this.value = {
          text: getRangeText(drawerRange),
          drawerId: attributeValue,
          range: drawerRange
        };
      }
      else {
        this.value = null;
      }
    } else {
      if ( selection.hasAttribute( 'helpDrawer' ) ) {
        const attributeValue = selection.getAttribute( 'helpDrawer' );

        const drawerRange = findAttributeRange( selection.getFirstPosition(), 'helpDrawer', attributeValue, model );

        if ( drawerRange.containsRange( firstRange, true ) ) {
          this.value = {
            text: getRangeText( firstRange ),
            drawerId: attributeValue,
            range: firstRange
          };
        } else {
          this.value = null;
        }
      } else {
        this.value = null;
      }
    }

    this.isEnabled = model.schema.checkAttributeInSelection( selection, 'helpDrawer' );
  }
  execute( { title, drawerId } ) {
    const model = this.editor.model;
    const document = model.document;
    const selection = document.selection;

    model.change( writer => {
      if ( selection.isCollapsed ) {
        if ( this.value ) {
          const { end: positionAfter } = model.insertContent(
            writer.createText( title, { helpDrawer: drawerId, class: ['ds-c-help-drawer__toggle', 'ds-u-display--inline'] } ),
            this.value.range
          );

          writer.setSelection( positionAfter );
        }
        else if ( title !== '' ) {
          const firstPosition = selection.getFirstPosition();
          const attributes = toMap( selection.getAttributes() );

          attributes.set( 'helpDrawer', drawerId );

          const { end: positionAfter } = model.insertContent(
            writer.createText( title, attributes ),
            firstPosition
          );

          writer.setSelection( positionAfter );
        }

        writer.removeSelectionAttribute( 'helpDrawer' );
      } else {
        const ranges = model.schema.getValidRanges( selection.getRanges(), 'helpDrawer' );

        for ( const range of ranges ) {
          writer.setAttribute( 'helpDrawer', drawerId, range );
        }
      }
    } );
  }
}
