// change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq-icon i");
    if (icon.className === "bi bi-plus-circle") {
      icon.className = "bi bi-dash-circle";
    } else {
      icon.className = "bi bi-plus-circle";
    }
  });
});

// swiper testimonials

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
      },
  },
});

//   show/open nav menu mobile

const menu = document.querySelector(".nav-menu");
const menuOpenBtn = document.querySelector("#open-menu-btn");
const menuCloseBtn = document.querySelector("#close-menu-btn");

menuOpenBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  menuCloseBtn.style.display = "inline-block";
  menuOpenBtn.style.display = "none";
});

// close nav menu mobile

const closeNavMobile = () => {
  menu.style.display = "none";
  menuCloseBtn.style.display = "none";
  menuOpenBtn.style.display = "inline-block";
};

menuCloseBtn.addEventListener("click", closeNavMobile);
