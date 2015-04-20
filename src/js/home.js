$('.home-hero > .home-slideshow').cycle({
	speed: 450,
    fx: 'scrollHorz',
    slides: '> div.home-slides',
    prev: '.pager-prev',
    next: '.pager-next',
    timeout: 0
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
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