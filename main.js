$(document).ready(function () {
  $(".nav__menu").click(function () {
    $(".menu").toggle(".hidden");
    $("html").css("overflow", "hidden");
  });
  $(".menu__close").click(function () {
    $(".menu").toggle(".hidden");
    $("html").css("overflow", "scroll");
  });
});

// $(document).ready(function () {
//   $(".nav__menu").click(function () {
//     if ($(".nav__menu").hasClass("hidden")) {
//       $("h1").removeClass("active");
//     } else {
//       $("h1").addClass("active");
//     }
//   });
// });

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
