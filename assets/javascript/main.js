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
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    prevArrow: $('.back1'),
    nextArrow: $('.next1')
  });

  $('.carousel2').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    prevArrow: $('.back2'),
    nextArrow: $('.next2')
  });

  $('.carousel3').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    prevArrow: $('.back3'),
    nextArrow: $('.next3')
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
    $(this).parents('.advantages-box').find('.advantages-body').slideToggle();
  });
});

const startCounting = () => {
  $('.amount').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({countNum: $this.text()}).animate({
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
  $('.forward').click(function () {
    $("#wizard").steps('next');
  })

  // Date Picker
  var dp1 = $('#dp1').datepicker().data('datepicker');
  dp1.selectDate(new Date());
  var dp2 = $('#dp2').datepicker().data('datepicker');
  dp2.selectDate(new Date());
  var dp3 = $('#dp3').datepicker().data('datepicker');
  dp3.selectDate(new Date());
  var dp4 = $('#dp4').datepicker().data('datepicker');
  dp4.selectDate(new Date());

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

