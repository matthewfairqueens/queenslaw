(function($) {
  $(document).ready(function() {
    if ($('.view-hero-images .views-field-field-hero-image li').length > 1) {
      $('body').addClass('dynamic-content');
      $('body.standard-screen .view-hero-images, body.medium-screen .view-hero-images').addClass('hero-images-dynamic');
      $('.hero-images-dynamic .view-body ul').addClass('hero-images');
      $('.hero-images-dynamic .view-body li').addClass('hero-image');
      if ($('.hero-images-dynamic .caption').length) $('.hero-images-dynamic').addClass('hero-images-dynamic-with-caption');
    }
    var hero_nav = '<ul class="step-nav"><li class="previous"><a href="#previous">Previous</a></li><li class="next"><a href="#next">Next</a></li></ul>';
    $('.hero-images-dynamic').append(hero_nav);
    $('.hero-images-dynamic .hero-images').attr({
      'data-cycle-slides': '.hero-image',
      'data-cycle-speed': '1000',
      'data-cycle-timeout': '7000',
      'data-cycle-prev': '.hero-images-dynamic .step-nav .previous',
      'data-cycle-next': '.hero-images-dynamic .step-nav .next'
    }).cycle();
  });
}(jQuery));
