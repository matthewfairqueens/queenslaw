(function($) {
  $(document).ready(function() {
    if ($('.block-views-block-events-front-block .views-row').length > 1) {
      $('body').addClass('dynamic-content');
      $('body.standard-screen .block-views-block-events-front-block, body.medium-screen .block-views-block-events-front-block').addClass('events-dynamic');
      var event_nav = '<ul class="skip-nav">';
      $('.events-dynamic .views-row').each(function(index){
        var count = index + 1;
        event_nav = event_nav + '<li><a href="#" class="event-index">' + count + '</span></li>';
      });
      event_nav = event_nav + '</ul>';
      $('.events-dynamic').append(event_nav);
      var current_event = 0;
      $('.events-dynamic .skip-nav li:eq(' + current_event + ')').addClass('active');
      $('.events-dynamic .view-events').attr({
        'data-cycle-slides': '.views-row',
        'data-cycle-speed': '500',
        'data-cycle-timeout': '7000'
      }).cycle();
      $('.events-dynamic .view-events').on('cycle-after', function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
        $('.events-dynamic .skip-nav li').removeClass('active');
        current_event = $('.events-dynamic .view-events').data('cycle.opts').currSlide;
        $('.events-dynamic .skip-nav li:eq(' + current_event + ')').addClass('active');
      });
      $('.events-dynamic .skip-nav a').on('click', function(event) {
        if (!$(this).parents('li').hasClass('active')) {
          var index = $(this).parents('li').index();
          $('.events-dynamic .view-events').cycle(index);
          event.preventDefault();
        }
      });
    }
    if ($('.block-views-block-speaker-events-front-block .views-row').length > 1) {
      $('body').addClass('dynamic-content');
      $('body.standard-screen .block-views-block-speaker-events-front-block, body.medium-screen .block-views-block-speaker-events-front-block').addClass('speaker-events-dynamic');
      var speaker_event_nav = '<ul class="skip-nav">';
      $('.speaker-events-dynamic .views-row').each(function(index){
        var count = index + 1;
        speaker_event_nav = speaker_event_nav + '<li><a href="#" class="speaker-event-index">' + count + '</span></li>';
      });
      speaker_event_nav = speaker_event_nav + '</ul>';
      $('.speaker-events-dynamic').append(speaker_event_nav);
      var current_speaker_event  = 0;
      $('.speaker-events-dynamic .skip-nav li:eq(' + current_speaker_event  + ')').addClass('active');
      $('.speaker-events-dynamic .view-speaker-events').attr({
        'data-cycle-slides': '.views-row',
        'data-cycle-speed': '500',
        'data-cycle-timeout': '7000'
      }).cycle();
      $('.speaker-events-dynamic .view-speaker-events').on('cycle-after', function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag){
        $('.speaker-events-dynamic .skip-nav li').removeClass('active');
        current_speaker_event  = $('.speaker-events-dynamic .view-speaker-events').data('cycle.opts').currSlide;
        $('.speaker-events-dynamic .skip-nav li:eq(' + current_speaker_event  + ')').addClass('active');
      });
      $('.speaker-events-dynamic .skip-nav a').on('click', function(event) {
        if (!$(this).parents('li').hasClass('active')) {
          var index = $(this).parents('li').index();
          $('.speaker-events-dynamic .view-speaker-events').cycle(index);
          event.preventDefault();
        }
      });
    }
  });
}(jQuery));
