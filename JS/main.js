let $menu = document.querySelector(".menu-icon");
let $navbar = document.querySelector(".menu");
let $bell = document.querySelector(".notification");
let $belicon = document.querySelector("#bell-icon");

$menu.addEventListener("click", function () {
  $menu.classList.toggle("move");
});
$menu.addEventListener("click", function () {
  $navbar.classList.toggle("active");
  $bell.classList.remove("active");
});

$belicon.addEventListener("click", function () {
  $bell.classList.toggle("active");
});

var swiper = new Swiper(".trending-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1068: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
