// ***************** BUTTON ONE *****************
const btnOneEl = document.querySelector(".acc-btn-1");
const itemOneEl = document.querySelector(".acc-item-1");

btnOneEl.addEventListener("click", function () {
   itemOneEl.classList.toggle("acc-open");
});

// ***************** BUTTON TWO *****************
const btnTwoEl = document.querySelector(".acc-btn-2");
const itemTwoEl = document.querySelector(".acc-item-2");

btnTwoEl.addEventListener("click", function () {
   itemTwoEl.classList.toggle("acc-open");
});

// ***************** BUTTON THREE *****************
const btnThreeEl = document.querySelector(".acc-btn-3");
const itemThreeEl = document.querySelector(".acc-item-3");

btnThreeEl.addEventListener("click", function () {
   itemThreeEl.classList.toggle("acc-open");
});
