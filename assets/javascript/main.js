$(function () {
    $(document).ready(function() {
        $('#nav-btn').click(function(){
            $('.navigation-menu').slideToggle("slide");
            if ($(this).hasClass('not-active')) {
                $(this).addClass('is-active').removeClass('not-active');
            }else{
                $('.is-active').addClass('not-active').removeClass('is-active');
            }
        });
    });


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
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    prevArrow: $('.back1'),
    nextArrow: $('.next1'),
      responsive: [
          {
              breakpoint: 520,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 960,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          }
      ]
  });

  $('.carousel2').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    prevArrow: $('.back2'),
    nextArrow: $('.next2'),
      responsive: [
          {
              breakpoint: 520,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 960,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          }
      ]
  });

  $('.carousel3').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    prevArrow: $('.back3'),
    nextArrow: $('.next3'),
      responsive: [
          {
              breakpoint: 520,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 960,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          }
      ]
  });

  $('.locations').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    prevArrow: $('.prev-loc'),
    nextArrow: $('.next-loc')
  });

  $(window).scroll(function () {
    var hT = $('.amount').offset().top,
        hH = $('.amount').outerHeight(),
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
    $(this).parents('.advantages-box').find('.advantages-body').slideToggle();
  });
});

const startCounting = () => {
  $('.amount').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(putSpace(Math.ceil(now)));
      }
    });
  });

  function putSpace(x) {
    return x.toLocaleString('ru');
  }
};

//Wizard

$(function () {
  $("#wizard").steps({
    headerTag: "h4",
    bodyTag: "section",
    transitionEffect: "fade",
    enableAllSteps: true,
    enablePagination: false,
    transitionEffectSpeed: 500,
    labels: {
      current: ""
    }
  });

  // Custome Button Jquery Step
  $('.forward').click(function (event) {
    event.preventDefault();
    $("#wizard").steps('next');
  });

  // Select Dropdown
  $('html').click(function () {
    $('.select .dropdown').hide();
  });
  $('.select').click(function (event) {
    event.stopPropagation();
  });
  $('.select .select-control').click(function () {
    $(this).parent().next().toggle();
  })
  $('.select .dropdown li').click(function () {
    $(this).parent().toggle();
    var text = $(this).attr('rel');
    $(this).parent().prev().find('div').text(text);
  })
});

$(function () {
  $('.plus').click(function () {
    const clonableArea = $(this).parents('.form-blocks').find('.form-block');
    const clonableInputGroups = clonableArea.find('.form');

    clonableInputGroups.last().clone().appendTo(clonableArea);

    const inputBlocks = $(this).parents('.inputs').find('.input');
    const input = inputBlocks.find('.add-input');

    input.last().clone().appendTo(inputBlocks);
  });

  $('.minus').click(function () {
    const clonableInputGroups = $(this).parents('.form-blocks').find('.form');

    const inputBlocks = $(this).parents('.inputs').find('.add-input');

    if (clonableInputGroups.length > 1) {
      clonableInputGroups.last().remove();
    }

    if (inputBlocks.length > 1) {
      inputBlocks.last().remove();
    }
  });
});