const hamburger = document.getElementById("hamburger");
const body = document.body;
const header = document.getElementById("header");
const overlay = document.getElementById("overlay");
const mobile = document.getElementById("mobile");

// toggle class
function toggleClass(e) {
  e.preventDefault();
  header.classList.toggle("header--open");
  if (header.classList.contains("header--open")) {
    body.classList.add("noscoll");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    mobile.classList.add("fade-in");
    mobile.classList.remove("fade-out");
  } else {
    body.classList.remove("noscoll");
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
    mobile.classList.add("fade-out");
    mobile.classList.remove("fade-in");
  }
}

// header__menu--open
hamburger.addEventListener("click", toggleClass);
