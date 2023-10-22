# CKEditor 5 Enhanced Table Plugin

* [About](#about)
* [Overview](#overview)
* [CKEditor 5 Plugin](#ckeditor-5-plugin)
* [Developer References](#developer-references)

## About

The Enhanced Table Plugin module extends the CKEditor 5 table
functionality by providing for sticky header rows and responsive table
capabilities.

After inserting a table into the editor from the CKEditor 5 toolbar, a
content creator can specify if the header row is sticky and/or if the
table will behave responsively.  When clicking on the table, a contextual
menu will appear with a toggle to make the header sticky and a toggle for
making the table responsive.

## Overview

The Enhanced Table Plugin module contains two important pieces:

 1. A custom CKEditor 5 plugin.
 2. Front-end display support.

## CKEditor 5 Plugin

The `cke5_enhanced_table_plugin` module creates the CKEditor 5 plugin
that provides the following:

 1. Toggle switches on the table contextual menu for designating the first row
    as sticky (or not) and for designating the table as responsive (or not).
 2. Adds classes to the table markup that can then be used on the front-end
    to make the table behave appropriately according to the sticky and
    responsive selection.  The `cke5-sticky-enabled` class is added to the
    table if the first row is meant to be sticky.  The `cke5-responsive-table`
    class is added to the table if it is meant to be responsive.

Only the top row of the table can be designated as 'sticky' and the sticky
functionality is only applicable on desktop sites, not on mobile.  With a
sticky header, the header will remain visible on the page as the user scrolls
down until the user has scrolled past the entire table.

The source for the CKEditor 5 plugin is located in the
`js/ckeditor5_plugins/tablePlugin/src` directory.

The source is bundled together using Webpack and the bundle is included in
the 'js/build' directory.

### Front-End Display Support

The `cke5_enhanced_table_plugin` provides js and css for creating
the sticky and responsive behavior on the front-end.

The js will look for the specific classes attached to the table element by
the plugin (`cke5-sticky-enabled` and `cke5-responsive-table`).  The
supplemental css for these features is located in the module's 'css'
directory.

The 'enhancedtable' library is defined in the .libraries.yml file of the
module.  The library includes the css, the front-end js, and the bundled
plugin js file located in `js/build`.

The library is referenced for use in the module's .ckeditor5.yml plugin
definition file.

### Bundle the CKEditor 5 Plugin
To bundle the plugin js:

- Install webpack (if needed): `ddev yarn add webpack`
- From the module directory, run: `ddev yarn webpack`.

## Developer References

### CKEditor 5 Dev Tools

The [ckeditor5_dev](https://www.drupal.org/project/ckeditor5_dev) module
provides an inspector tool and a plugin template to assist with the
development of custom CKEditor 5 plugins.

### CKEditor Ecosystem Documentation

The CKEditor [Ecosystem Documentation](https://ckeditor.com/docs/ckeditor5/latest/framework/plugins/creating-simple-plugin-timestamp.html) site provides an
overview of the CKEditor 5 framework and resources for developing CKEditor 5
custom plugins.
