# CMS Design System Components

This directory is for development and bundling of React-based components from
the [CMS Design System](https://design.cms.gov/) for use in
Drupal via CKEditor custom plugins.

Components include:

- [Tooltip](https://design.cms.gov/components/tooltip/)
- [Help Drawer](https://design.cms.gov/components/drawer/)

## Setup

[Parcel](https://parceljs.org/) is used as the bundler for generating production
scripts that can be used within Drupal. See the `targets` key in the
`package.json` file for where the entry targets are for the bundling.

The individual `.html` files for each React component serves as mock markup of
what is output by preprocessors in Drupal. The related React javascript targets
this markup to render the React component.

The bundled Rect scripts are included in Drupal libraries, and applied to the
relevant markup output by Drupal.

## Workflow

Navigate to the Olivero Subtheme (`cd web/themes/custom/olivero_subtheme`),
then run npm commands directly:
1. `npm install` (install packages)
1. `npm run dev` (to run Parcel development server)
1. `npm run bundle` (to bundle production files).

1. The production bundles can be found in `react-components/build` directory.
   You will need to manually rename the resulting `.js`/`.css` files to
   `NAME.bundle.js`/`NAME.bundle.css`. _The `* bundle.js/.css` naming convention
   is required, otherwise the `.js`/`.css` files will be git-ignored. All
   `NAME.bundle.js`/`NAME.bundle.css` files should be committed_.
1. Note the resulting `.html` files in the `build/[COMPONENT_NAME]` directory,
   and their calls to `.js` files. Shared packages for the components will be
   bundled into a separate file, which will be called in _every_ built version
   of the component `.html` files, and included within the directory of one of
   the components (the shared package file is also usually the largest bundled
   js file.) It's important to identify which file this is, move it to the
   `react-compnents/build/shared` directory, and name it `shared.bundle.js`.
1. Also note the corresponding Drupal libraries for each component in the
   `olivero_subtheme.libraries.yml` file (`react-components.shared`,
   `react-components.help-drawer`, `react-components.tooltip`). These libraries
   are called within the relevant Drupal twig templates.

## Styling
Baseline styling has been brought over directly from the CMS Design system.
Some component styling has been modified for demonstration purposes (i.e.,
some small adjustments were added so that things display nicer along with the
styling provided by the Olivero core theme.)

## Troubleshooting

If you have issues getting the development server running, or bundling
the components into production-ready js, try deleting the
`react-components/.parcel-cache` file, then running the `npm run dev` or
`npm run bundle` commands again.
