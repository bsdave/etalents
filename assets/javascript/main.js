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
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now))
      }
    })
  })
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
  $('.toggle').on('click', function () {
    $(this).toggleClass('is-active');
  });

  $('.buy-ticket').on('click', function () {
    $('.order-form-overlay').toggleClass('opened');
  });

  $('#close-order-form-overlay').on('click', function () {
    $('.order-form-overlay').removeClass('opened');
  });

  $('#increment').on('click', function () {
    addVisitor();
    changeButtonState();
  });

  $('#decrement').on('click', function () {
    removeVisitor();
    changeButtonState();
  });

  const addVisitor = () => {
    const visitorsCounter = $('#visitorsCounter');
    let visitorsCount = parseInt(visitorsCounter.val());
    const newVisitorsCount = ++visitorsCount;
    visitorsCounter.val(newVisitorsCount);
    recalculate(newVisitorsCount);

    addVisitorHtml(newVisitorsCount);
  };

  const removeVisitor = () => {
    const visitorsCounter = $('#visitorsCounter');
    let visitorsCount = parseInt(visitorsCounter.val());
    const newVisitorsCount = --visitorsCount;
    visitorsCounter.val(newVisitorsCount);
    recalculate(newVisitorsCount);

    removeVisitorHtml();
  };

  const canAdd = (currentState) => {
    const min = parseInt($('#visitorsCounter').prop('min'));
    const max = parseInt($('#visitorsCounter').prop('max'));

    if (currentState < max) {
      return true;
    } else {
      return false;
    }
  };

  const canRemove = (currentState) => {
    const min = parseInt($('#visitorsCounter').prop('min'));
    const max = parseInt($('#visitorsCounter').prop('max'));

    if (currentState > min) {
      return true;
    } else {
      return false;
    }
  };

  const changeButtonState = () => {
    const visitorsCounter = $('#visitorsCounter');
    let visitorsCount = parseInt(visitorsCounter.val());

    $('#increment').prop('disabled', !canAdd(visitorsCount));
    $('#decrement').prop('disabled', !canRemove(visitorsCount));
  };

  const recalculate = (visitorsCount) => {

  };

  const addVisitorHtml = (number) => {
    const visitorHtml = $('#visitor-1').clone();

    visitorHtml.attr('id', `visitor-${number}`);
    visitorHtml.find('.visitor-number').html(number);

    $('.visitors').append(visitorHtml);
  };

  const removeVisitorHtml = () => {
    $('.visitor').last().remove();
  };

  recalculate(parseInt($('#visitorsCounter').val()));
});
