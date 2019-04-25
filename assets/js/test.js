$(document).ready(function () {
    var slider = $('.js_slider'),
        pagin = $('.slider__pagination');

    if (slider.length) {
        slider.on('init reInit afterChange', function (event, slick, currentSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            pagin.html('<div class="pagin__num">' + i + ' / ' + slick.slideCount + '</div>');
            if ($(window).width() < 768) {
                for (j = 0; j < slick.slideCount / 2; j++) {
                    pagin.append('<div class="pagin"></div>');
                }
            } else {
                for (j = 0; j < slick.slideCount / 3; j++) {
                    pagin.append('<div class="pagin"></div>');
                }
            }
        });

        slider.slick({
            rows: 2,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: $('.slider__prev'),
            nextArrow: $('.slider__next'),
            dots: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        rows: 1,
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.pagin').eq(0).addClass('active');

        slider.on("afterChange", function (event, slick, currentSlide) {
            if ($(window).width() < 768) {
                $('.pagin').removeClass('active').eq(currentSlide / 2).addClass('active');
            } else {
                $('.pagin').removeClass('active').eq(currentSlide / 3).addClass('active');
            }
        });
    }
});