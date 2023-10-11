import { Command } from "ckeditor5/src/core";
import { findAttributeRange } from "ckeditor5/src/typing";
import getRangeText from "./utils";
import { toMap } from "ckeditor5/src/utils";

export default class InsertTooltipCommand extends Command {
  refresh() {
    const model = this.editor.model;
    const selection = model.document.selection;
    const firstRange = selection.getFirstRange();

    if ( firstRange.isCollapsed ) {
      if ( selection.hasAttribute( 'tooltip' ) ) {
        const attributeValue = selection.getAttribute( 'tooltip' );

        const tooltipRange = findAttributeRange( selection.getFirstPosition(), 'tooltip', attributeValue, model );

        this.value = {
          text: getRangeText( tooltipRange ),
          tooltipId: attributeValue,
          range: tooltipRange
        };
      }
      else {
        this.value = null;
      }
    } else {
      if ( selection.hasAttribute( 'tooltip' ) ) {
        const attributeValue = selection.getAttribute( 'tooltip' );

        const tooltipRange = findAttributeRange( selection.getFirstPosition(), 'tooltip', attributeValue, model );

        if ( tooltipRange.containsRange( firstRange, true ) ) {
          this.value = {
            text: getRangeText( firstRange ),
            tooltipId: attributeValue,
            range: firstRange
          };
        } else {
          this.value = null;
        }
      } else {
        this.value = null;
      }
    }

    this.isEnabled = model.schema.checkAttributeInSelection( selection, 'tooltip' );
  }
  execute( { title, tooltipId } ) {
    const model = this.editor.model;
    const document = model.document;
    const selection = document.selection;

    model.change( writer => {
      if ( selection.isCollapsed ) {
        if ( this.value ) {
          const { end: positionAfter } = model.insertContent(
            writer.createText( title, { tooltip: tooltipId, class: ['ds-c-tooltip__trigger-link', 'ds-u-display--inline'] } ),
            this.value.range
          );

          writer.setSelection( positionAfter );
        }
        else if ( title !== '' ) {
          const firstPosition = selection.getFirstPosition();
          const attributes = toMap( selection.getAttributes() );

          attributes.set( 'tooltip', tooltipId );

          const { end: positionAfter } = model.insertContent(
            writer.createText( title, attributes ),
            firstPosition
          );

          writer.setSelection( positionAfter );
        }

        writer.removeSelectionAttribute( 'tooltip' );
      } else {
        const ranges = model.schema.getValidRanges( selection.getRanges(), 'tooltip' );

        for ( const range of ranges ) {
          writer.setAttribute( 'tooltip', tooltipId, range );
        }
      }
    } );
  }
}
