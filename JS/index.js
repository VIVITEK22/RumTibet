const swiper = new Swiper('.popular__slider', {
    direction: 	'horizontal',
    loop: true,
    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        800: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1180: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});

const swiper2 = new Swiper('.blog__body', {
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        1225: {
            slidesPerView: 2,
            spaceBetween: 20,

            grid: {
                rows: 2,
            },
        },
        595: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 24,
        }
    }
});

const swiper3 = new Swiper('.photo__swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,

    breakpoints: {
        900: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },

        600: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },
        0: {
            slidesPerView: 1
        }
    }

});

$(function() {
    $('a').on('click', function(e) {
        e.preventDefault();
    });

    $('.header__nav-burger').on('click', function() {
        $('.header__nav').toggleClass('header__nav--active');
        $('.back__dark').toggleClass('back__dark--active');
    });

    let callback = () => {
        if (($('.header__nav').hasClass('header__nav--active')) === false && $(window).scrollTop() > 0) {
            $('.header__nav-burger').addClass('burger--active');
            $('.header__top').addClass('header__top--scroll');
        } else {
            $('.header__nav-burger').removeClass('burger--active');
            $('.header__top').removeClass('header__top--scroll');
        }
    }
    $(window).scroll(callback);
});
