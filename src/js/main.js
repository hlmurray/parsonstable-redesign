// Mobile menu
const openMobileMenu = () => {
  $('.nav-menu').addClass('active');
  $('.mobile-overlay').addClass('active');
  $('body').addClass('mobile-menu-active');
};

const closeMobileMenu = () => {
  $('.nav-menu-icon').removeClass('active');
  $('.nav-menu').removeClass('active');
  $('.mobile-overlay').removeClass('active');
  $('body').removeClass('mobile-menu-active');
};

// Home Page carousel
const $homeCarousel = $('.home-carousel');

if ($homeCarousel) {
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
}

// Masonry grid
const $container = $('#container');

// initialize
if ($container) {
  $container.imagesLoaded(() => {
    $container.masonry({
      itemSelector: '.gallery-img',
      gutter: 15
    });
  });
}