const $ = jQuery;

export default function initializeAutocomplete(element, settings) {
  const { autocompleteUrl, selectHandler, closeHandler, openHandler } = settings;
  const autocomplete = {
    cache: {},
    ajax: {
      dataType: 'json',
      jsonp: false,
    },
  };

  function sourceData(request, response) {
    const { cache } = autocomplete;

    function sourceCallbackHandler(data) {
      cache[term] = data;
      response(data);
    }

    var term = request.term;

    if (cache.hasOwnProperty(term)) {
      response(cache[term]);
    } else {
      $.ajax(autocompleteUrl, {
        success: sourceCallbackHandler,
        data: {q: term},
        ...autocomplete.ajax,
      });
    }
  }

  const options = {
    appendTo: element.closest('.ck-labeled-field-view'),
    source: sourceData,
    select: selectHandler,
    focus: () => false,
    search: () => !options.isComposing,
    close: closeHandler,
    open: openHandler,
    minLength: 1,
    isComposing: false,
  }

  const $auto = $(element).autocomplete(options);

  $auto.autocomplete('widget').addClass('tooltip-ui-autocomplete');

  $auto.on('click', function () {
    $auto.autocomplete('search', $auto.val());
  });

  $auto.on('compositionstart.autocomplete', function () {
    options.isComposing = true;
  });
  $auto.on('compositionend.autocomplete', function () {
    options.isComposing = false;
  });

  return $auto;
}
