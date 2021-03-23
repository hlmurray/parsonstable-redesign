$('.home-carousel').slick({
  accessibility: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
  centerMode: true,
  infinite: true,
  speed: 500,
  variableWidth: true
});

const toggleMenu = (e) => {
  $('.nav-menu-icon').toggleClass('active');
  $('.nav-menu').toggleClass('active');
  $('.mobile-overlay').toggleClass('active');
  $('body').toggleClass('mobile-menu-active');
};