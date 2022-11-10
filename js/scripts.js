// seleção dos elementos
const menuBtn = document.querySelector("#menu")
const closeMenuBtn = document.querySelector("#close-menu")
const menuMobile = document.querySelector("#mobile-navbar")
const buttons = [menuBtn, closeMenuBtn]

const desktopLinks = document.querySelectorAll("#navbar a")
const mobileLinks = document.querySelectorAll("#mobile-navbar a")
const allLinks = [...desktopLinks, ...mobileLinks]

const slides = document.querySelectorAll(".banner")
const dots = document.querySelectorAll(".dot")
let slideIndex = 0

// funções
function smoothScroll(e){
    e.preventDefault();

    const href = this.getAttribute("href")
    const offsetTop = document.querySelector(href).offsetTop

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    })

    setTimeout(() => {
        if (menuMobile.classList.contains("menu-active")) {
            menuMobile.classList.remove('menu-active')
        }
    }, 400);
}

function showSlides () {
    for (let i =0; i < slides.length; i++) {
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")
    }

    slideIndex++

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].classList.add("active")
    dots[slideIndex - 1].classList.add("active")

    setTimeout(showSlides, 4000);
}

// eventos
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // toggle - se tiver a classe, ele remove. se não tiver, ele adiciona
        menuMobile.classList.toggle("menu-active")
    })
})

allLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll)
})

// inicialização
showSlides();