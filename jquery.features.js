(function($) {
  $(document).ready(function() {
    if ($('.view-features .views-row').length > 1) {
      $('body').addClass('dynamic-content');
      $('body.standard-screen .block-views-block-features-block').addClass('features-dynamic');
      var feature_nav = '<ul class="skip-nav">';
      $('.features-dynamic .views-row').each(function(index){
        var count = index + 1;
        feature_nav = feature_nav + '<li><a href="#" class="feature-index">' + count + '</span></li>';
      });
      feature_nav = feature_nav + '</ul>';
      $('.features-dynamic').append(feature_nav);
      var current_feature = 0;
      $('.features-dynamic .skip-nav li:eq(' + current_feature + ')').addClass('active');
      $('.features-dynamic .view-features').attr({
        'data-cycle-slides': '.views-row',
        'data-cycle-speed': '500',
        'data-cycle-timeout': '7000'
      }).cycle();
      $('.features-dynamic .view-features').on('cycle-after', function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
        $('.features-dynamic .skip-nav li').removeClass('active');
        current_feature = $('.features-dynamic .view-features').data('cycle.opts').currSlide;
        $('.features-dynamic .skip-nav li:eq(' + current_feature + ')').addClass('active');
      });
      $('.features-dynamic .skip-nav a').on('click', function(event) {
        if (!$(this).parents('li').hasClass('active')) {
          var index = $(this).parents('li').index();
          $('.features-dynamic .view-features').cycle(index);
          event.preventDefault();
        }
      });
    }
  });
}(jQuery));
