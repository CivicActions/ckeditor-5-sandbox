import { Plugin } from 'ckeditor5/src/core';
import HelpDrawerEditing from './helpdrawerediting';
import HelpDrawerUI from './helpdrawerui';

export default class HelpDrawer extends Plugin {
  static get requires() {
    return [HelpDrawerEditing, HelpDrawerUI];
  }
}
