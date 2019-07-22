const $ = require('jquery');
const scrollSpy = require('scrollspy-js');
const slick = require('slick-carousel');

$(() => {
  
  const bodyOrHtml = $('html, body');

  $('.header__mobile-menu').click((e) => {
    $('body').addClass('mobile-menu-is-shown');
    return false;
  });

  $('.mobile-menu__close').click((e) => {
    $('body').removeClass('mobile-menu-is-shown');
  });

  $('.mobile-menu').click((e) => {
    return false;
  });

  $(document).click((e) => {
    $('body').removeClass('mobile-menu-is-shown');
  });

  $('.hero__more').click((e) => {
    e.preventDefault();
    const target = $($(e.target).attr('href'));
    bodyOrHtml.animate({ scrollTop: target.offset().top }, 500, 'linear');
  })

  $(window).scroll((e) => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('body').addClass('to-top-is-shown');

    } else {
      $('body').removeClass('to-top-is-shown');
    }
  });

  $(".to-top").click((e) => {
    e.preventDefault();
    bodyOrHtml.animate({ scrollTop: 0 }, 500, 'linear');
  });

  const spyTop = new scrollSpy('#scrollspyTop', {
    nav: '.menu__item a',
    className: 'active'
  });

  const widgetsSlider = $('.widgets-slider').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    waitForAnimate: true,
    speed: 600,
    centerMode: true,
    // centerPadding: '100px',
    variableWidth: true,
    draggable: false,
    infinite: false,
    initialSlide: 1,
    slidesToShow: 1,
  });

  $('.widgets-slider__item').click((e) => {
    console.log('click');
    const that = $(e.currentTarget);
    widgetsSlider.slick('slickGoTo', that.data('index'));
  });

});