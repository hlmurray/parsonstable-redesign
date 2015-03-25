$('.menu-nav a').click(function() {
	var menuType = $(this).attr('class');
	$(this).addClass('active');
	$('.menu-nav').find('a.active').not(this).removeClass('active');
	var activeMenu = $('.menu-right > div.'+menuType);
	activeMenu.addClass('active');
	$('.menu-right').find('div.active').not(activeMenu).removeClass('active');
});