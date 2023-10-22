(function ($, once) {

  // Find direct descendent tables within the rich text wrapper
  // and add a new wrapper for the overflow: scroll class.
  $(once('tableMatch', '.text-content')).find('table.cke5-sticky-enabled').each(function () {
    // The table wrapper is now added via the cke5_enhanced_table_plugin module.
    $(this).parent('.table-wrapper').css('overflow-x', 'unset');
  });

})(jQuery, once);

