


if (
  'querySelector' in document &&
  'localStorage' in window &&
  'addEventListener' in window
) {
    $("#mustard-display").html("Cuts the mustard!");
    
    $('.js-transclude').each(function() {
        var elm = $(this);
        $.ajax(elm.attr('href'), {
            success: function(response) {
                elm.html(response);
            }
        });
    });
}else{
    $("#mustard-display").html("Doesnt cut the mustard!");
}

