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
  console.log("메뉴 나타난다");
});

$(document).on("click", function (e) {
  // console.log(e.target);
  // if (other.is(e.target) || $("#tab-menu1").is(e.target)) {
  dropdownMenu.hide();
  console.log("메뉴 사라짐");
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

tabMenu.click(function (e) {
  e.preventDefault();
  activateTab($(this).index());
});

function activateTab(idx) {
  tabContent.find("a").removeClass("active");
  tabContent.eq(idx).find("a").addClass("active");

  tabMenu.removeClass("selected");
  tabMenu.eq(idx).addClass("selected");

  tabContent.hide();
  tabContent.eq(idx).show();
}
