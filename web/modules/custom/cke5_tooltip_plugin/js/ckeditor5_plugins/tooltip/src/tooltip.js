import { Plugin } from "ckeditor5/src/core";
import TooltipEditing from "./tooltipediting";
import TooltipUI from "./tooltipui";

export default class Tooltip extends Plugin {
  static get requires() {
    return [ TooltipEditing, TooltipUI ];
  }
}
