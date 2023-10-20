# CKEditor 5 Help Drawer Plugin

- [About](#about)
- [Process](#process)
## About

The CKE5 Help Drawer Plugin Module provides a custom CKEditor 5 plugin allowing content editors the ability to apply interactive help drawers from the [CMS Design system](https://design.cms.gov/v/8.0.2/components/drawer/?theme=core) to content, which reference taxonomy terms.

This module provides the CKE5 plugin, plus preprocessing functions that transform text where help drawers are applied into a format that allows React scripts to render the interactive component.

The React scripts are included within the Olivero Subtheme (see: `olivero_subtheme/react-components/README.md`).

## Process

1. Editors use a toolbar button to apply a taxonomy term reference to text, which results in the text being wrapped in an `<a>` tag that includes a `data-drawer-id` attribute. The `data-drawer-id` attribute's value is the ID of the referenced taxonomy term.
1. Via a field preprocess hook, the value of the `data-drawer-id` attribute is used to query a taxonomy term.
1. The help drawer `<a>` is transformed to a `<span>`, with additional data attributes added. These include:
`data-content`: the taxonomy term rendered in the help drawer view mode, and HTML escaped.
`data-title`: the actual taxonomy term
1. When the page is rendered, React scripts transform the help drawer `<span>` tags into the interactive component.
