let tabMenu = $(".tabmenu li"),
  tabContent = $(".tabmenu__wrap"),
  currentUrl = location.href; //현재 주소표시줄 주소 확인

let dropdown = $(".dropdown");
let dropdownMenu = $(".tab-menu2_1");
let other = $(".product__page-container");

// $(document).ready(function () {
dropdown.click(function (e) {
  e.stopPropagation();
  e.preventDefault();
  dropdownMenu.slideToggle(100);
});

$(document).on("click", function (e) {
  // console.log(e.target);
  // if (other.is(e.target) || $("#tab-menu1").is(e.target)) {
  dropdownMenu.hide();
  // }
});
// });

tabMenu.each(function () {
  let targetStr = $(this).find("a").attr("href");
  if (currentUrl.indexOf(targetStr) > -1) {
    let targetIdx = $(this).index();
    activateTab(targetIdx);
  }
  if (currentUrl.indexOf("#") == -1) {
    activateTab(0);
  }
});

console.log(currentUrl);

tabMenu.click(function (e) {
  let targetIdx = $(this).index();
  e.preventDefault();
  // 이벤트를 막아줌
  activateTab(targetIdx);
  console.log(tabContent.eq(targetIdx));

  if (currentUrl.indexOf("detail") > -1) {
    console.log("detail");
    //   // $(location).attr("href", `product__page.html`);
    //   // location.href = `product__page.html`;
    //   console.log("fff");
    window.location.replace(`../product__page.html`);
    let targetIdx = $(this).index();
    e.preventDefault();
    // 이벤트를 막아줌
    activateTab(targetIdx);
    console.log(tabContent.eq(targetIdx));
    //   // $("body").css("backgroundColor", "red");
  }
});

function activateTab(idx) {
  tabContent.find("a").removeClass("active");
  tabContent.eq(idx).find("a").addClass("active");

  tabMenu.removeClass("selected");
  tabMenu.eq(idx).addClass("selected");

  tabContent.hide();
  tabContent.eq(idx).show();
}
