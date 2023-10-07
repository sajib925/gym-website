
const header = document.querySelector(".header");
const headerHeight = header.clientHeight;

window.addEventListener("scroll", () => {
    if (window.scrollY > headerHeight) {
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
});



const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
const swiper2 = new Swiper(".mySwiper2", {
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        995: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const sliderButtonNext = document.querySelector('.swiper-button_next');
const sliderButtonPrev = document.querySelector('.swiper-button_prev');
const sliderButtonNext2 = document.querySelector('.swiper_button_next');
const sliderButtonPrev2 = document.querySelector('.swiper_button_prev');

sliderButtonPrev2.addEventListener('click', () => {
    swiper2.slidePrev()
    sliderButtonNext.style.opacity = 1;
})
sliderButtonNext2.addEventListener('click', () => {
    swiper2.slideNext()
    sliderButtonPrev.style.opacity = 1;
})

sliderButtonPrev.addEventListener('click', () => {
    swiper.slidePrev()
    sliderButtonNext.style.opacity = 1;
})
sliderButtonNext.addEventListener('click', () => {
    swiper.slideNext()
    sliderButtonPrev.style.opacity = 1;
})

