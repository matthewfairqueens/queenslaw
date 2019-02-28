(function($) {
  $(document).ready(function() {
    var subitem_count = 0;
    $('body.queenslaw-main-site.standard-screen #block-mainnavigation > ul > li.menu-item--expanded > .menu-item-content').each(function(){
      $(this).children('a').addClass('submenu-trigger');
      $(this).children('.submenu').addClass('submenu-top').append('<a href="#submenu-close" class="submenu-close"><span>Close</span></a>');
    });
    setSubmenPosition();
    $(window).resize(function() {
      setSubmenPosition();
    });

    // $('body.queenslaw-main-site.standard-screen #block-mainnavigation a.submenu-trigger').click(function(event){
      
    //   $('#block-mainnavigation li div div.submenu-top').hide({effect:'blind'});
    //   if ($(this).parents('li').hasClass('submenu-active')) {
    //     $('#subheader').css('top', '0');
    //     $('#block-mainnavigation li').removeClass('submenu-active');
    //     $('body').removeClass('submenu-visible');
        
    //   }
    //   else {
    //     $('#block-mainnavigation li').removeClass('submenu-active');
    //     $(this).parents('li').addClass('submenu-active');
    //     $('body').addClass('submenu-visible');
    //   }
    //   thisMenu = $(this);
    //   $('#block-mainnavigation li.submenu-active div div.submenu-top').show({effect:'blind',complete:function(){
    //     submenu_offset = thisMenu.siblings('.submenu-top').offset();
    //     submenu_height = thisMenu.siblings('.submenu-top').outerHeight();
    //     $('#subheader').css('top', submenu_offset.top + submenu_height + 'px');
    //   }});
    //   event.preventDefault();
    // });
    $('body.queenslaw-main-site.standard-screen #block-mainnavigation a.submenu-trigger').click(function(event){
      if ($(this).parents('li').hasClass('submenu-active')) {
        $('#block-mainnavigation li').removeClass('submenu-active');
        $('body').removeClass('submenu-visible');
        $('#subheader').css('top', '0');
        event.preventDefault();
      }
      else {
        $('#block-mainnavigation li').removeClass('submenu-active');
        $(this).parents('li').addClass('submenu-active');
        $('body').addClass('submenu-visible');
        var submenu_offset = $(this).siblings('.submenu-top').offset();
        var submenu_height = $(this).siblings('.submenu-top').outerHeight();
        $('#subheader').css('top', submenu_offset.top + submenu_height + 'px');
        event.preventDefault();
      }
    });

     // $('body.queenslaw-main-site.standard-screen #block-mainnavigation .submenu-close').click(function(event){
    //   //$('#block-mainnavigation li.submenu-active div div.submenu-top').hide('blind');
    //   $('#block-mainnavigation li').removeClass('submenu-active');
    //   $('body').removeClass('submenu-visible');
    //   $('#subheader').css('top', '0');
    //   event.preventDefault();
    // });
    $('body.queenslaw-main-site.standard-screen #block-mainnavigation .submenu-close').click(function(event){
      $('#block-mainnavigation li').removeClass('submenu-active');
      $('body').removeClass('submenu-visible');
      $('#subheader').css('top', '0');
      event.preventDefault();
    });


    $('#block-subsubsection-navigation, #block-secondary-subnavigation, #block-calendar-subnavigation').addClass('queenslaw-quick-nav');
    $('body.queenslaw-main-site.standard-screen .queenslaw-quick-nav > h2').prepend('<a href="#quick-nav-toggle" class="quick-nav-toggle">Open</a>');
    $('body.queenslaw-main-site.standard-screen .queenslaw-quick-nav .quick-nav-toggle').click(function(event){
      if ($(this).parents('.queenslaw-quick-nav').hasClass('quick-nav-active')) {
        $(this).parents('.queenslaw-quick-nav').removeClass('quick-nav-active');
        $(this).text('Open');
        $('#subheader').css('padding-left', '20px');
      }
      else {
        $(this).parents('.queenslaw-quick-nav').addClass('quick-nav-active');
        $(this).text('Close');
        var quick_nav_width = $(this).parents('.queenslaw-quick-nav').outerWidth();
        $('#subheader').css('padding-left', quick_nav_width + 'px');
      }
      event.preventDefault();
    });
  });
  function setSubmenPosition() {
    var top_level_height = $('header').outerHeight();
    var header_width = $('header').innerWidth();
    $('body.queenslaw-main-site.standard-screen #block-mainnavigation .submenu-top').css({
      'top': top_level_height + 'px',
      'width': header_width + 'px'
    });
  }
})(jQuery);
