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
    appendArrows: '.fleet-slider__nav',
    variableWidth: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false,
                variableWidth: false,
                slidesToShow: 1
            }
        }
    ]
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 576) {
        $('.place-wrapper:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            slidesToShow: 2,
            arrows: false,
            variableWidth: true,
            appendDots: '.place-wrapper-dots'
        });

        $('.certificates-wrapper:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            slidesToShow: 2,
            arrows: false,
            variableWidth: true,
            appendDots: '.certificates-nav'
        });
    } else {
        $(".place-wrapper.slick-initialized").slick("unslick");
        $(".certificates-wrapper.slick-initialized").slick("unslick");
    }
});
// slick active


// select
$('.js-example-basic-single').select2();

// mobile menu
$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeIn();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

// активная ссылка меню
$('.menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();