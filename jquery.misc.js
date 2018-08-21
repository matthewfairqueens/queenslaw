(function ($){
  $(document).ready(function(){
/*    var window_width = $(window).width();
    var new_window_width = window_width;
    // add / remove the body class if the size crosses the max width breakpoint
    var context = '';
    $('body').removeClass('max-width');
    if (window_width >= 1440) $('body').addClass('max-width');
    $(window).resize(function() {
      new_window_width = $(window).width();
      if (new_window_width != window_width) {
        window_width = $(window).width();
        if (window_width >= 1440) $('body').addClass('max-width');
        else $('body').removeClass('max-width');
      }
    });*/
    // wrap videos in body fields
    $('#content .node .field--name-body iframe[src*="youtube"]').wrap('<div class="queenslaw-video-container"></div>');
    // add parallax effect to the "Sir John A. Macdonald Hall" block
    $('.block-sirjohnamacdonaldhall').each(function(){
      var background_image = $(this).css('background-image');
      background_image = /^url\((['"]?)(.*)\1\)$/.exec(background_image);
      background_image = background_image ? background_image[2] : '';
      $(this).addClass('parallax');
      $(this).parallax({
        imageSrc: background_image
      });
    });
  });
}(jQuery));
