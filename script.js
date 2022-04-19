const hamburgerMenu = document.querySelector(".hamburger__btn");
let bars = document.querySelector(".fa-bars");
let navigationWrap = document.querySelector(".navigation__wrap");
let navigationContainer = document.querySelector(".navigation__container");
let toggleBtnState = true;
let closeBtn = document.querySelector(".fa-bars");
const navLinks = document.querySelectorAll(".link");
let preHeader = document.querySelector(".navigation__container");
/* navlinks toggle active class */

navLinks.forEach((link) => {
  link.classList.remove("active");
  link.addEventListener("click", () => {
    navLinks.forEach((linkk) => {
      linkk.classList.remove("active");
    });
    link.classList.toggle("active");
  });
});

/* hamburger menu event listener */

hamburgerMenu.addEventListener("click", () => {
  if (toggleBtnState) {
    closeBtn.classList.remove("fa-bars");
    closeBtn.classList.add("fa-xmark");
    toggleBtnState = !toggleBtnState;
    navigationContainer.classList.add("active__container");
    navigationWrap.classList.add("active__nav");
    preHeader.style.zIndex = "1000";

    preheader.classList.add("fullHeight");
  } else {
    closeBtn.classList.remove("fa-xmark");
    closeBtn.classList.add("fa-bars");
    toggleBtnState = !toggleBtnState;
    navigationContainer.classList.remove("active__container");
    navigationWrap.classList.remove("active__nav");

    preheader.classList.remove("fullHeight");
  }
});
