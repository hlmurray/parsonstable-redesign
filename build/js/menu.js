$(document).ready(function() {
	var menuHeight = $('.menu-right'),
		starterHeight = $('.menu-right > div.starters').outerHeight();

	menuHeight.css({
		'height': starterHeight
	});

	$('.menu-nav a').click(function() {
		if ($(this).hasClass('active')){
			return false
		}

		var menuType = $(this).attr('class'),
			activeMenu = $('.menu-right > div.'+menuType),
			starterHeight = activeMenu.outerHeight();

		// CHANGE HEIGHT BASED ON MENU
		menuHeight.css({
			'height': starterHeight
		});
		
		// TOGGLE MENU CHANGE
		$(this).addClass('active');
		$('.menu-nav').find('a.active').not(this).removeClass('active');
		
		activeMenu.addClass('active');
		$('.menu-right').find('div.active').not(activeMenu).removeClass('active');
	});
});