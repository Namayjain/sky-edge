import "@hotwired/turbo-rails";
import "controllers";
import "main";
import "index";

document.addEventListener("turbo:load", function () {
  // if (typeof WOW !== "undefined") {
  //   new WOW().init();
  // }

  new Swiper(".testimonial-carousel", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
      1280: { slidesPerView: 3, spaceBetween: 30 },
    },
  });
});
