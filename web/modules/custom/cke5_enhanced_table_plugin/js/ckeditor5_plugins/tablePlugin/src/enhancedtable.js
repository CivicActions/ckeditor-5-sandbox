import { Plugin } from 'ckeditor5/src/core';
import EnhancedTableEditing from './enhancedtableediting';
import EnhancedTableUI from './ui/enhancedtableui';

export default class EnhancedTable extends Plugin {
  static get requires() {
    return [ EnhancedTableEditing, EnhancedTableUI ];
  }
}
