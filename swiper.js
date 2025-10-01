

// section2 gallery
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay],
    slidesPerView: 3,
    loop: true,
    speed: 600,
    spaceBetween: 20,

    // btn next & prev
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2000,
    },
    // autoplay responsive
    breakpoints: {
        0: {
            autoplay: {
                delay: 10000000,
            }
        },
        768: {
            autoplay: {
                delay: 2000,
            }
        }
    }


});
