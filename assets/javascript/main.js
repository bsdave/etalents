$(function () {
  $('.slider').slick({
    dots: true,
    appendDots: '.slides-control',
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.carousel1').slick({
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    prevArrow: $('.back1'),
    nextArrow: $('.next1')
  });

  $('.carousel2').slick({
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    prevArrow: $('.back2'),
    nextArrow: $('.next2')
  });

  $('.carousel3').slick({
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    prevArrow: $('.back3'),
    nextArrow: $('.next3')
  });

  $(window).scroll(function () {
    var hT = $('.countings-box').offset().top,
      hH = $('.countings-box').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > (hT + hH - wH - 100)) {
      $(window).unbind('scroll');
      startCounting();
    }
  });

  $('.film-box, .shadow-film').hover(function () {
    $('body').css('background-color', `#${$(this).data('backgroundColor')}`);
  },
    function () {
      $('body').css('background-color', 'white');
    });

  $('.advantages-toggle-button').click(function () {
    $(this).toggleClass('rotate');
    $('.advantages-body').slideToggle();
  });
});

const startCounting = () => {
  $('.amount').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },
      {
        duration: 5000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      });
  });
}