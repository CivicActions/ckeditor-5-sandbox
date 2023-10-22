(function ($) {

  // Responsive table magic.
  var makeResponsiveTable = function (context) {
    if ($(window).width() < 993) {
      var table = $('table.cke5-responsive-table', context);

      table.each(function () {
        var thisTable = $(this);
        var tBody = thisTable.find('tbody');
        var tBodyTr = tBody.find('tr');

        tBodyTr.each(function () {
          var thisTr = $(this);
          var thisTbodyTh = thisTr.find('th');
          var thisTd = thisTr.find('td');
          var tHeadTh = thisTr.closest('table.cke5-responsive-table').find('thead > tr > th');

          // Table set in CKEditor table widget to first column.
          if (tHeadTh.text().trim().length < 1) {
            thisTable.addClass('first-col-mode');
            var tBodyTrFirstChildTd = thisTable.find('tbody > tr:first-child > th, tbody > tr:first-child > td');

            tBodyTrFirstChildTd.each(function (index) {
              var thisTbodyTrFirstChildTd = $(this);
              var thisTbodyTrFirstChildTdText = thisTbodyTrFirstChildTd.text().trim();

              if (thisTbodyTrFirstChildTdText.length) {
                thisTbodyTrFirstChildTd.attr('data-item', (index + 1));
                var tBodyTrFirstChildTdText = $(this).text().trim();

                thisTbodyTrFirstChildTd.closest('tbody').find('tr:not(:first-child)').each(function () {
                  var thisTr = $(this);

                  thisTr.find('th, td').each(function (index) {
                    $(this).attr('data-item', (index + 1));

                    if ($(this).data('item') === thisTbodyTrFirstChildTd.data('item')) {
                      $(this).attr('data-header', tBodyTrFirstChildTdText);
                    }
                  });
                });
              }
            });
          }
          // Table set in CKEditor table widget to both or first row.
          tHeadTh.each(function (index) {
            var thisTh = $(this);

            if (thisTh.text().trim().length) {
              thisTh.attr('data-item', index);

              thisTd.each(function (index) {
                var td = $(this);
                var firstItemHeader = td.closest('table.cke5-responsive-table').find('thead > tr > th[data-item="0"]');

                if (thisTbodyTh.length) {
                  td.attr('data-item', (index + 1));
                  td.siblings('th').attr('data-item', '0');
                }
                else {
                  td.attr('data-item', (index));
                }

                if (td.data('item') === thisTh.data('item')) {
                  td.attr('data-header', thisTh.text());
                  td.siblings('th[data-item="0"]').attr('data-header', firstItemHeader.text());
                }
              });
            }
          });
        });
      });
    }
  }
  // Apply on window resize.
  $(window).resize(function () {
    makeResponsiveTable();
  });
  // Apply on page load.
  makeResponsiveTable();

})(jQuery);
