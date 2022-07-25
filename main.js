// $(document).ready(function () {
//   $(".nav__menu").click(function () {
//     $(".menu").toggle(".hidden");
//     $("html").css("overflow", "hidden");
//   });
//   $(".menu__close").click(function () {
//     $(".menu").toggle(".hidden");
//     $("html").css("overflow", "scroll");
//   });
// });

$(document).ready(function () {
  $(".nav__menu").click(function () {
    if ($(".nav__menu").hasClass("hidden")) {
      $("h1").removeClass("active");
    } else {
      $("h1").addClass("active");
    }
  });
});
