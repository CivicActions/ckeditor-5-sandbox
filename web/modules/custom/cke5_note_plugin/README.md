# CKEditor 5 Note (Alert Component) Plugin

## Overview

This plugin allows editors to add preformatted markup for the Alert component
from the [CMS Design System](https://design.cms.gov).

The plugin provides the option to apply three variants of the Alert component:
Informational, Warning, and Success (all without an icon.)

The component has two fields where basic text elements can be inserted:
- The Alert heading (ideally an appropriate heading level is used)
- The Alert body text (typically paragraph text)

## Setup

This plugin is developed from the working example from the [CKEditor 5 Dev Tools module](https://www.drupal.org/project/ckeditor5_dev), which is based on the [CKEditor 5 block plugin tutorial](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/tutorials/implementing-a-block-widget.html).

In the module directory, run `yarn install` to set up the necessary packages.

After installing dependencies, the plugin can be built with `yarn build` or `yarn
watch`. It will be built to `js/build/notePlugin.js`.
