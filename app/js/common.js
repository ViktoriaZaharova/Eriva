// timer
$(".countdown-time").countdowntimer({
    hours : 0,
    minutes : 1,
    seconds : 0,
    displayFormat: "HMS",
});

$('.advantages-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});

let pagingInfo = $('.fleet-slider__nav .counter-slide');
let teamSlider = $('.fleet-slider');

teamSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    let i = (currentSlide ? currentSlide : 0) + 1;
    let prefix = i < 10 ? '0' : '';
    let prefixAll = slick.slideCount < 10 ? '0' : '';
    pagingInfo.html('<span class="current">' + prefix + i + '</span>');
});

$('.fleet-slider').slick({
    slidesToShow: 3,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendDots: '.fleet-slider__nav',
    appendArrows: '.fleet-slider__nav'
});

// select
$('.js-example-basic-single').select2();