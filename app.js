
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