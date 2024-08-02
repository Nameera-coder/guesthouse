const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".section p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".section h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".Service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

//swiper
var explore__bg=new Swiper(".mySwiper",
{
    loop: true,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    slidesPerview:1,
    spaceBetween:10,
    pagination:{
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        640:{
            slidesPerview:2,
            spaceBetween:20,
        },
        768:{
            slidesPerview:3,
            spaceBetween:40,
        },
        1024:{
            slidesPerview:3,
            spaceBetween:50,
  }
}
})