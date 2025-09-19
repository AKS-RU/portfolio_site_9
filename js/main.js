const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiper2 = new Swiper(".mySwiper2", {});
let swiper3 = new Swiper(".mySwiper3", {});

let SwiperTechSpecs = new Swiper(".SwiperTechSpecs", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Находим элементы
const burger = document.getElementById("burger");
const navMenu = document.querySelector(".header__title-flex");

// Переключаем класс .active при клике
burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burger.classList.toggle("active"); // можно использовать для анимации бургера
});

// Закрытие меню при клике на ссылку
document.querySelectorAll(".header__title-flex a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    burger.classList.remove("active");
  });
});
