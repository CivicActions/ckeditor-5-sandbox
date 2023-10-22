import { Plugin, icons } from 'ckeditor5/src/core';
import { Collection } from 'ckeditor5/src/utils';

import {
  addListToDropdown,
  createDropdown,
  Model,
  SwitchButtonView,
} from 'ckeditor5/src/ui';

export default class EnhancedTableUI extends Plugin {
  /**
   * @inheritdoc
   */
  static get pluginName() {
    return 'EnhancedTableUI';
  }

  /**
   * @inheritDoc
   */
  init() {
    const editor = this.editor;
    const t = this.editor.t;

    editor.ui.componentFactory.add('setEnhancedTable', locale => {
      const options = [
        {
          type: 'switchbutton',
          model: {
            commandName: 'setStickyTableClass',
            label: t('Sticky table'),
            bindIsOn: true,
            //isEnabled: true
          }
        },
        { type: 'separator' },
        {
          type: 'switchbutton',
          model: {
            commandName: 'setResponsiveTableClass',
            label: t('Responsive table'),
            bindIsOn: true,
            //isEnabled: true
          }
        },
      ];

      return this._prepareDropdown(t('Set Sticky and/or Responsive table'), icons.plus, options, locale);
    });
  }

  /**
   * Creates a dropdown view from a set of options.
   *
   * @param label The dropdown button label.
   * @param icon An icon for the dropdown button.
   * @param options The list of options for the dropdown.
   */
  _prepareDropdown(label, icon, options, locale) {
    const editor = this.editor;
    const dropdownView = createDropdown(locale);
    const commands = this._fillDropdownWithListOptions(dropdownView, options);

    // Decorate dropdown's button.
    dropdownView.buttonView.set({
      label,
      icon,
      tooltip: true
    });
    // Make dropdown button disabled when all options are disabled.
    dropdownView.bind('isEnabled').toMany(commands, 'isEnabled', (...areEnabled) => {
      return areEnabled.some(isEnabled => isEnabled);
    });

    this.listenTo(dropdownView, 'execute', evt => {
      editor.execute(evt.source.commandName);
      // Toggling a switch button view should not move the focus to the editable.
      if (!(evt.source instanceof SwitchButtonView)) {
        editor.editing.view.focus();
      }
    });
    return dropdownView;
  }

  /**
   * Injects a {@link module:ui/list/listview~ListView} into the passed dropdown with buttons
   * which execute editor commands as configured in passed options.
   *
   * @param options The list of options for the dropdown.
   * @returns Commands the list options are interacting with.
   */
  _fillDropdownWithListOptions(dropdownView, options) {
    const editor = this.editor;
    const commands = [];
    const itemDefinitions = new Collection();
    for (const option of options) {
      addListOption(option, editor, commands, itemDefinitions);
    }
    addListToDropdown(dropdownView, itemDefinitions);

    return commands;
  }
}

/**
 * Adds an option to a list view.
 *
 * @param option A configuration option.
 * @param commands The list of commands to update.
 * @param itemDefinitions A collection of dropdown items to update with the given option.
 */
function addListOption(option, editor, commands, itemDefinitions) {
  if (option.type === 'button' || option.type === 'switchbutton') {
    const model = option.model = new Model(option.model);
    const { commandName, bindIsOn } = option.model;
    const command = editor.commands.get(commandName);
    commands.push(command);
    model.set({ commandName });
    model.bind('isEnabled').to(command);
    if (bindIsOn) {
      model.bind('isOn').to(command, 'value');
    }
    model.set({
      withText: true
    });
  }
  itemDefinitions.add(option);
}
