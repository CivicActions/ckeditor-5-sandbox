# Drupal 10 + CKEditor 5 Sandbox

This sample Drupal 10 site is setup with [DDEV](https://ddev.com/). You will need to download and install DDEV if you don't already have it installed locally. 

## Setup

Run the following commands in order:
- Clone the repository: `git clone git@github.com:CivicActions/ckeditor-5-sandbox.git`
- Navigate to the project's root directory (`cd ckeditor-5-sandbox`) and start ddev: `ddev start`
- Once DDEV is running, install the site: `ddev setup`
- Once site installation is complete run: `ddev launch`
- To log in to the site as the admin user run: `ddev drush uli`

## CKEditor 5 Custom Plugin Examples
- See the `/web/modules/custom/` directory for all sample plugins.
- Each module includes its own `README.md` with details on its setup and functionality.