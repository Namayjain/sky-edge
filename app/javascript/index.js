// ====== Menu Scroll
document.addEventListener("DOMContentLoaded", () => {
  const pageLinks = document.querySelectorAll(".ud-menu-scroll");

  pageLinks.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(elem.getAttribute("href"));
      if (!target) return;

      const topOffset = 60; // Adjust as needed
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - topOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    });
  });

  // Section menu active
  function onScroll() {
    const sections = document.querySelectorAll(".ud-menu-scroll");
    const scrollPos =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((currLink) => {
      const val = currLink.getAttribute("href");
      const refElement = document.querySelector(val);
      if (!refElement) return;

      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document.querySelectorAll(".ud-menu-scroll").forEach((el) => el.classList.remove("active"));
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);

  // ====== Swiper Testimonial
  const testimonialCarousel = document.querySelector(".testimonial-carousel");
  if (testimonialCarousel) {
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
  }
});
