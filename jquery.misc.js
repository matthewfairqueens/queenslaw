(function ($){
  $(document).ready(function(){
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
    // add an arrow to home page features and stories
    $('body.queenslaw-main-site.front.standard-screen article.feature .fields > div > div, body.queenslaw-main-site.front.standard-screen article.story .fields > div > div').append('<div class="queenslaw-arrow"/>');
    // If any of these elements on the main site home page contain only a single link,
    // link the whole element.
    $('body.queenslaw-main-site.front.standard-screen article.feature, body.queenslaw-main-site.front.standard-screen article.story .fields, body.queenslaw-main-site.front.standard-screen article.event .fields, body.queenslaw-main-site.front.standard-screen article.speaker_event .fields, body.queenslaw-main-site.front.standard-screen .view-ctas .views-row').addClass('queenslaw-main-site-front-element');
    var href;
    $('.queenslaw-main-site-front-element a:not(h3 > a)').addClass('queenslaw-main-site-front-element-link');
    $('.queenslaw-main-site-front-element').each(function(){
      if ($(this).find('a.queenslaw-main-site-front-element-link').length == 1) {
        $(this).click(function(){
          href = $(this).find('a.queenslaw-main-site-front-element-link').attr('href');
          $(location).attr('href', href);
        });
        $(this).addClass('queenslaw-main-site-front-element-linked');
      }
    });
    // adjust wrap of some menu items
    var items = new Array();
    items['graduate-diploma-in-legal-services-management'] = 'Legal Services Management';
    for (var i in items) {
      if ($('#block-mainnavigation .menu-item--' + i).length) {
        var item_text = $('#block-mainnavigation .menu-item--' + i + ' a').text();
        item_text = item_text.replace(items[i], '<span class="phrase">' + items[i] + '</span>');
        $('#block-mainnavigation .menu-item--' + i + ' a').html(item_text);
      }
    }
  });
}(jQuery));
