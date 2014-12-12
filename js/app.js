


if (
  'querySelector' in document &&
  'localStorage' in window &&
  'addEventListener' in window
) {
    $('.js-transclude').each(function(this) {
        var elm = this;
        $.ajax(elm.attr('href'), {
            success: function(response) {
            elm.html(response);
            }
        });
    });
}

