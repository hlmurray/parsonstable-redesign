$(document).ready(function() {
	var menuHeight = $('.menu-right'),
		starterHeight = $('.menu-right > div.starters').outerHeight();

	menuHeight.css({
		'height': starterHeight
	});

	$('.menu-nav > span').on('click', 'span', function() {
        if ($(this).hasClass('active')){
            return false
        }
 
        var menuType = $(this).parent().attr('class'),
            activeMenu = $('.menu-right > div.'+menuType),
            starterHeight = activeMenu.outerHeight();
 
        // CHANGE HEIGHT BASED ON MENU
        menuHeight.css({
            'height': starterHeight
        });
        
        // TOGGLE MENU CHANGE
        $(this).addClass('active');
        if(menuType == 'wine') {
        	$('span.'+menuType+' ul').addClass('active');
        } else {
        	$('span.wine ul').removeClass('active');
        }
        $('.menu-nav').find('span.active').not(this).removeClass('active');
        
        activeMenu.addClass('active');
        $('.menu-right').find('div.active').not(activeMenu).removeClass('active');
    });

    $('.subwine').on('click', function() {
        var wineHeight = $('.menu-right > div.wine').outerHeight();
        $('.menu-nav').find('span.active').removeClass('active');
        $('.menu-right').find('div.active').removeClass('active');
        $('span.wine > span').addClass('active');
        menuHeight.css({
            'height': wineHeight
        });
        $('.menu-right > div.wine').addClass('active');
    });
 
    $('.menu-nav span > ul ').on('click', 'a', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
});