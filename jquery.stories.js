(function($) {
  $(document).ready(function() {
    if (($('.block-views-block-stories-front-block .views-row').length > 1) || ($('.block-views-block-stories-feature-block .views-row').length > 1)) {
      $('body').addClass('dynamic-content');
      $('body.standard-screen .block-views-block-stories-front-block, body.medium-screen .block-views-block-stories-front-block, body.standard-screen .block-views-block-stories-feature-block, body.medium-screen .block-views-block-stories-feature-block').addClass('stories-dynamic');
      var event_nav = '<ul class="skip-nav">';
      $('.stories-dynamic .views-row').each(function(index){
        var count = index + 1;
        event_nav = event_nav + '<li><a href="#" class="event-index">' + count + '</span></li>';
      });
      event_nav = event_nav + '</ul>';
      $('.stories-dynamic').append(event_nav);
      var current_event = 0;
      $('.stories-dynamic .skip-nav li:eq(' + current_event + ')').addClass('active');
      $('.stories-dynamic .view-stories').attr({
        'data-cycle-slides': '.views-row',
        'data-cycle-speed': '500',
        'data-cycle-timeout': '7000'
      }).cycle();
      $('.stories-dynamic .view-stories').on('cycle-after', function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
        $('.stories-dynamic .skip-nav li').removeClass('active');
        current_event = $('.stories-dynamic .view-stories').data('cycle.opts').currSlide;
        $('.stories-dynamic .skip-nav li:eq(' + current_event + ')').addClass('active');
      });
      $('.stories-dynamic .skip-nav a').on('click', function(event) {
        if (!$(this).parents('li').hasClass('active')) {
          var index = $(this).parents('li').index();
          $('.stories-dynamic .view-stories').cycle(index);
          event.preventDefault();
        }
      });
    }
  });
}(jQuery));
