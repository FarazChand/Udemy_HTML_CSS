const btnEl = document.querySelector(".mobile-btn");
const headerEl = document.querySelector(".header");

btnEl.addEventListener("click", function () {
   headerEl.classList.toggle("nav-open");
});
