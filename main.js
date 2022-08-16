let navMenu = document.querySelector(".menu");
let menuOpenBtn = document.querySelector(".nav__menu");
let menuCloseBtn = document.querySelector(".menu__close");
menuOpenBtn.addEventListener("click", function () {
  navMenu.style.display = "block";
});
menuCloseBtn.addEventListener("click", function () {
  navMenu.style.display = "none";
});

let menuEls = document.querySelectorAll(".tabmenu  li");
let menuEl = [...menuEls];
let tabEls = document.querySelectorAll(".tabmenu__wrapper [data-index]");
let tabEl = [...tabEls];

for (let i = 0; i < menuEl.length; i++) {
  menuEl[i].setAttribute("data-index", i);
  // tabEl[i].dataset.id = i;
  menuEl[i].addEventListener("click", (e) => {
    openTab(e.target.getAttribute("data-index"));
  });
}

function openTab(index) {
  menuEl.forEach((el) => el.classList.remove("selected"));
  tabEl.forEach((el) => el.classList.remove("active"));
  tabEl[index].classList.add("active");
  menuEl[index].classList.add("selected");
}
