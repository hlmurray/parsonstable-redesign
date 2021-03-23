// Mobile menu
const openMobileMenu = () => {
  $('.nav-menu').addClass('active');
  $('.mobile-overlay').addClass('active');
  $('body').addClass('modal-active');
};

const closeMobileMenu = () => {
  $('.nav-menu-icon').removeClass('active');
  $('.nav-menu').removeClass('active');
  $('.mobile-overlay').removeClass('active');
  $('body').removeClass('modal-active');
};

// Menu list overlay
const openMenuOverlay = () => {
  $('.nav-menu-list-overlay').addClass('active');
  $('body').addClass('modal-active');
};

const closeMenuOverlay = () => {
  $('.nav-menu-list-overlay').removeClass('active');
  $('body').removeClass('modal-active');
};


// Home Page carousel
const initHomeCarousel = () => {
  const $homeCarousel = $('.home-carousel');
  
  if ($homeCarousel.length) {
    $('.home-carousel').slick({
      accessibility: true,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3500,
      centerMode: true,
      infinite: true,
      speed: 500,
      variableWidth: true
    });
  }
};

$(document).ready(() => {
  // Gallery Masonry grid
  const initGalleryGrid = () => {
    const $container = $('#container');

    if (window.innerWidth < 769 && $container.masonry) {
      $container.masonry('destroy');
    }
    
    // initialize
    if ($container.length) {
      $container.masonry({
        itemSelector: '.gallery-img',
        gutter: 15
      });
    
      $container.imagesLoaded().progress(() => {
        $container.masonry(`layout`);
      });
    }
  };

  initHomeCarousel();

  if (window.innerWidth > 768) {
    initGalleryGrid();
  }

  $(window).resize(() => {
    if (window.innerWidth > 768) {
      initGalleryGrid();
    }
  })
});