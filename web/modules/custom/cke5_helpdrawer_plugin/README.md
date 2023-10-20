# CKEditor 5 Help Drawer Plugin

- [About](#about)
- [Overview](#overview)
- [CKEditor Plugins](#ckeditor-plugins)
- [The Field Preprocessor](#the-field-preprocessor)
- [React Components](#react-components)
- [Developer References](#developer-references)

## About

The CKE5 Help Drawer Plugin Module provides a custom CKEditor 5 plugin
allowing content creators the ability to create help drawer references to
taxonomy terms.

Using the ![Help Drawer button](./icons/noun_slide_out.png) button from the
CKEditor 5 toolbar, a content creator can create a reference to the desired
taxonomy term and specify a title that, when clicked in presentation,
will trigger the opening of a Help Drawer where term's long description is
displayed.

## Overview

The Help Drawer Custom Plugin module creates an easy editor experience for
making Help Drawers, which use React components from the
[CMS Design System](https://design.cms.gov/) on the
frontend. These features are powerful, but complicated, involving several steps
of markup translation between the CKEditor and the frontend.

1.  Editors use a custom toolbar button based off of the link plugin to create
    `<a>` tags, which include a `data-drawer-id` attribute the has term ID of
    the taxonomy term they referenced.
2.  This creates basic markup that is saved in the text field. The basic markup
    is a link with a CSS class for CKEditor styling and a 'data-drawer-id'
    attribute that contains the term id of the taxonomy term referenced. The
    term name is the default text of the link.
3.  When displayed on the frontend, the `hook_preprocess_field` finds the basic
    CKEditor markup, looks up the term using the ID included in the
    `data-drawer-id` attribute, and replaces the markup with a `<span>` tag
    containing the term's long description as the value of a `data-content`
    attribute (HTML is escaped).
4.  When looking up the taxonomy term, we render the output with Twig templates,
    with a CSS class identifying the component.
5.  On the frontend, we search for a CSS class, and React creates the
    interactive components from the design system.

## CKEditor Plugins

The `CKE5_helpdrawer_plugin` module creates the CKEditor plugin and
supporting functionality that does following:

1.  Create a route and controller for handling the autocomplete lookups of
    Help Drawer nodes.
2.  Implements `hook_preprocess_field` to take the markup stored on the page,
    look up Help Drawer node details, render the content, and replace
    it in the final output.

### CKEditor Buttons

The scripts that define the CKEditor 5 plugin are located in
js/ckeditor_plugins/helpdrawerPlugin/src.

These files:

- Configure the button used in the CKEditor toolbar.
- Specify the routes used for autocomplete functionality.
- Provide the context menu that appears when you right-click on a Help Drawer
  in the editor.
- Generate the markup inserted into the CKEditor when an option is selected
  in the dialog box.

Clicking the Help Drawer button will open a dialogue box allowing for the
selection of a Help Drawer node using autocomplete. After the Help Drawer link
is created in the editor, clicking on the text will re-open the dialogue box.

If text is selected before clicking the Help Drawer button, the existing text
will be used as the link text instead of the title of the Help Drawer node.

### Bundle the CKEditor 5 Plugin

To bundle the plugin js:

- Install webpack (if needed): `ddev yarn add webpack`
- From the module directory, run: `ddev yarn webpack`.

## The Field Preprocessor

In `CKE5_helpdrawer_plugin.module` we use
`CKE5_helpdrawer_plugin_preprocess_field` to find the simple markup
saved in the text field, and fully populate it with the data needed for
the React components. They need the full content of the Help Drawer
rendered on the page, before they can be turned into React components.

The preprocessor uses regular expressions to search the text for the markup
inserted by the CKEditor plugins. These have the Help Drawer node ID in a
`data-drawer-id` attribute. After querying for the node data, we render the
content in the `drawer` view mode before replacing it, to embed any references
in the content (images, links, etc.) We also need to escape any markup.

The Twig templates for rendering the component are:

- Help drawer trigger pattern template: `docroot/themes/custom/CKE5_evo/source/patterns/molecules/help-drawer/help-drawer-trigger.twig`
- Help drawer content pattern template: `docroot/themes/custom/CKE5_evo/source/patterns/molecules/
help-drawer/help-drawer-content.twig`
- Drupal template: `docroot/themes/custom/CKE5_evo/templates/content/
node--help-drawers--drawer.html.twig`

Once the fully-formed markup is rendered on the frontend, we use JavaScript to
create the React components.

## React Components

The React code that is used to make Help Drawers interactive for the end user
is stored in `CKE5_evo/source/ds-components`. It is compiled using
Parcel to keep the final JavaScript as small as possible, even with multiple
components on a page. See the README file in `ds-components` directory for
more details.

## Developer References

### CKEditor 5 Dev Tools

The [ckeditor5_dev](https://www.drupal.org/project/ckeditor5_dev) module
provides an inspector tool and a plugin template to assist with the
development of custom CKEditor 5 plugins.

### CKEditor Ecosystem Documentation

The CKEditor [Ecosystem Documentation](https://ckeditor.com/docs/ckeditor5/latest/framework/plugins/creating-simple-plugin-timestamp.html) site provides an
overview of the CKEditor 5 framework and resources for developing CKEditor 5
custom plugins.

## And We're Done

And that is how the design system components go from the CKEditor to the
frontend!
