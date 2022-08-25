let tabMenu = $(".tabmenu li"),
  tabContent = $(".tabmenu__wrapper").children(),
  currentUrl = location.href; //현재 주소표시줄 주소 확인

let dropdown = $(".dropdown");
let dropdownMenu = $(".tab-menu2_1");
let other = $(".product__page-container");

dropdown.click(function (e) {
  e.stopPropagation();
  e.preventDefault();
  dropdownMenu.slideToggle(100);
});

$(document).on("click", function (e) {
  dropdownMenu.hide();
});
activateTab(0);

// tabMenu.each(function () {
//   let targetStr = $(this).find("a").attr("href");
//   if (currentUrl.indexOf(targetStr) > -1) {
//     let targetIdx = $(this).index();
//     activateTab(targetIdx);
//   }
//   if (currentUrl.indexOf("#") == -1) {
//     $(this).find("a").attr("href")
//   }
// });

// tabMenu.click(function (e) {
//   e.preventDefault();
//   // 이벤트를 막아줌
//   activateTab($(this).index());
// });

tabMenu.click(function (e) {
  if (currentUrl.indexOf("detail") > -1) {
    // window.location.replace(`../product__page.html`);
    // location.href = `product__page.html#tab-menu${targetIdx + 1}`;
    e.preventDefault();
    let targetIdx = $(this).index();
    location.href = `product__page.html`;
    console.log(targetIdx);
    activateTab(targetIdx);
  } else {
    let targetIdx = $(this).index();
    console.log(targetIdx);
    e.preventDefault();
    // 이벤트를 막아줌
    activateTab(targetIdx);
  }
});

function activateTab(idx) {
  tabContent.removeClass("active");
  tabContent.eq(idx).addClass("active");

  tabMenu.removeClass("selected");
  tabMenu.eq(idx).addClass("selected");

  tabContent.hide();
  tabContent.eq(idx).show();
}
