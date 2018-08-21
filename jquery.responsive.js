(function ($) {
  $(document).ready(function() {
    // rearrange for mobile
    var window_width = $(window).width();
    if (window_width < 960) {
      $('body.page-node-type-story #sidebar').prependTo('body.page-node-type-story .content-container > div');
      $('body.page-node-type-event #sidebar').prependTo('body.page-node-type-event .content-container > div');
      $('#block-searchform').insertAfter('#branding');
    }
    if (window_width < 640) {
      $('#block-secondarynavigation ul li').addClass('secondary-nav-item');
      var mainNavFirstUL = $('#block-mainnavigation ul').first();
      $('#block-secondarynavigation ul').first().contents().appendTo(mainNavFirstUL);
    }
    
    // build mobile navigation
    $('#block-mainnavigation > h2').removeClass('visually-hidden').addClass('small-and-medium-screen-only').addClass('small-screen-nav-trigger');
    var submenu_trigger = $('<div>', {'class': 'small-screen-nav-submenu-trigger small-and medium-screen-only', 'text': '+'});
    $('#block-mainnavigation li.menu-item--expanded').addClass('menu-item--has-submenu');
    $('#block-mainnavigation li.menu-item--has-submenu').append(submenu_trigger.clone());
    // add a class so that context handling in pi_base can adjust menu visibility when a
    // breakpoint is crossed
    $('#block-mainnavigation ul').addClass('pi-dynamic-nav');
    // open menus in the active trail
    $('body.medium-screen #block-mainnavigation .menu-item--has-submenu.menu-item--active-trail, body.small-screen #block-mainnavigation .menu-item--has-submenu.menu-item--active-trail').each(function(){
      $(this).find('.submenu').show();
      $(this).find('ul:not(.menu-item--not-active-trail ul)').show();
      $(this).children('.small-screen-nav-submenu-trigger').text('-');
      $(this).parents('ul:not(#block-mainnavigation > ul)').show();
      $(this).parents('ul').siblings('.small-screen-nav-submenu-trigger').text('-');
    });
    $('#block-mainnavigation .small-screen-nav-trigger').click(function() {
      if ($(this).siblings('ul').is(':visible')) {
        $(this).siblings('ul').slideUp();
        $(this).text('Menu');
      }
      else {
        $(this).siblings('ul').slideDown();
        $(this).text('Hide');
        $('html, body').animate({
          scrollTop: $(this).offset().top
        });
      }
    });
    $('#block-mainnavigation .small-screen-nav-submenu-trigger').click(function() {
      if ($(this).siblings('.menu-item-content').find('.submenu').is(':visible')) {
        $(this).siblings('.menu-item-content').find('.submenu').first().slideUp();
        $(this).siblings('.menu-item-content').find('ul.menu').first().slideUp();
        $(this).text('+');
      }
      else {
        $(this).siblings('.menu-item-content').find('.submenu').first().show();
        $(this).siblings('.menu-item-content').find('ul.menu').first().slideDown();
        $(this).text('-');
      }
    });
    
    
    /*
    // wrap videos in body fields
    $('#content .node .field--name-body iframe[src*="youtube"]').wrap('<div class="kingstongrand-video-container"></div>');
    // reflow tables
    var content_width = $('#content').width();
    var table_width = 0;
    $('#content table, #subcontent table').each(function(i){
      // Mobile Safari respects the table max-width, even if it means the table cells
      // extend beyond the table, so instead of the width of the table get the total
      // width of the table headers
      table_width = 0;
      $(this).children('thead').children('tr').children('th').each(function(){
        table_width = table_width + $(this).outerWidth();
      });
      if ($(table_width > content_width)) $(this).addClass('table-to-reflow');
      $('body').addClass('dynamic-content');
    });
    $('.table-to-reflow').each(function(){
      $(this).after('<div class="table-reflowed"/>');
      var output = '';
      var headers = [];
      var index = 0;
      var header = '';
      var text = '';
      var table_class = $(this).attr('class');
      table_class = $.trim(table_class.replace('table-to-reflow', ''));
      table_class = $.trim(table_class.replace('views-section', ''));
      $(this).find('th').each(function(){
        headers.push($(this).text());
      });
      $(this).find('tr').each(function(){
        if ($(this).find('td').length > 0) {
          output = output + '<table class="' + table_class + '">';
          $(this).find('td').each(function(){
            text = $(this).html();
            text = text.trim();
            if ((text != '') && (text != '&nbsp;')) {
              index = $(this).index();
              header = '';
              if (headers[index] != undefined) header = headers[index];
              output = output + '<tr><th>' + header + '</th><td>' + $(this).html() + '</td></tr>';
            }
          });
          output = output + '</table>';
        }
      });
      if (output != '') $(this).siblings('.table-reflowed').append(output);
      $(this).addClass('standard-screen-only');
    });
    // try to deal with long links
    $('a').filter(function () {
      return $(this).width() > 300;
    }).addClass('kingstongrand-long-link');
    */
  });
}(jQuery));
