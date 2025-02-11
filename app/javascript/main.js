(function () {
  "use strict";

  // ======= Sticky Header (Optimized)
  let isScrolling;
  window.addEventListener("scroll", () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
      const ud_header = document.querySelector(".ud-header");
      const logo = document.querySelector(".header-logo");

      if (!ud_header || !logo) return;

      if (window.pageYOffset > ud_header.offsetTop) {
        ud_header.classList.add("sticky");
      } else {
        ud_header.classList.remove("sticky");
      }

      // Optimized Logo Switching
      const newLogo = document.documentElement.classList.contains("dark")
        ? "assets/images/logo/logo-white.svg"
        : "assets/images/logo/logo.svg";

      if (ud_header.classList.contains("sticky")) {
        if (logo.src !== newLogo) {
          logo.src = newLogo;
        }
      }

      // Show or Hide Back-to-Top Button
      const backToTop = document.querySelector(".back-to-top");
      if (backToTop) {
        backToTop.style.display = window.pageYOffset > 50 ? "flex" : "none";
      }
    }, 50); // Debounced for smoothness
  });

  // ===== Responsive Navbar
  const navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", () => {
      navbarToggler.classList.toggle("navbarTogglerActive");
      navbarCollapse.classList.toggle("hidden");
    });

    // Close navbar on link click
    document.querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
      .forEach((e) =>
        e.addEventListener("click", () => {
          navbarToggler.classList.remove("navbarTogglerActive");
          navbarCollapse.classList.add("hidden");
        })
      );
  }

  // ===== Submenu Toggle
  document.querySelectorAll(".submenu-item a").forEach((el) =>
    el.addEventListener("click", () => {
      const submenu = el.nextElementSibling;
      if (submenu) submenu.classList.toggle("hidden");
    })
  );

  // ===== FAQ Accordion
  document.querySelectorAll(".single-faq").forEach((el) => {
    const faqBtn = el.querySelector(".faq-btn");
    const faqContent = el.querySelector(".faq-content");
    const icon = el.querySelector(".icon");

    if (faqBtn && faqContent && icon) {
      faqBtn.addEventListener("click", () => {
        icon.classList.toggle("rotate-180");
        faqContent.classList.toggle("hidden");
      });
    }
  });

  // ===== WOW.js (Ensuring it's enabled)
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }

  // ===== Smooth Scroll Back-to-Top
  const backToTopButton = document.querySelector(".back-to-top");
  if (backToTopButton) {
    backToTopButton.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  }

  // ===== Theme Switcher (Fixed Null Issue)
  const themeSwitcher = document.getElementById("themeSwitcher");

  if (themeSwitcher) {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Initial Theme Check
    const themeCheck = () => {
      if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
      }
    };

    // Theme Switch Logic
    const themeSwitch = () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
    };

    // Event Listener for Theme Toggle
    themeSwitcher.addEventListener("click", themeSwitch);

    // Apply Initial Theme
    themeCheck();
  }
})();
