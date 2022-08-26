let tabMenu = $(".tabmenu li"),
  tabContent = $(".tabmenu__wrapper").children(),
  currentUrl = location.href; //현재 주소표시줄 주소 확인

let dropdown = $(".dropdown");
let dropdownMenu = $(".tab-menu2_1");
let other = $(".product__page-container");

$(function () {
  tabMenu.each(function (index, item) {
    $(item).click(function (e) {
      if (currentUrl.indexOf("detail") > -1) {
        e.preventDefault();
        location.href = `product__page.html#${index}`;
      } else {
        e.preventDefault();
        // 이벤트를 막아줌
        // location.href = `product__detail.html#${index}`;
        activateTab(index);
      }
    });
  });

  tabContent.each(function (index, item) {
    $(item).click(function (e) {
      console.log(index);
      e.preventDefault();
      location.href = `product__detail.html#${index}`;
    });
  });

  if (window.location.hash === "#0") {
    activateTab(0);
  }
  if (window.location.hash === "#1") {
    activateTab(1);
  }
  if (window.location.hash === "#2") {
    activateTab(2);
  }
  if (window.location.hash === "#3") {
    activateTab(3);
  }
  if (window.location.hash === "#4") {
    activateTab(4);
  }
  if (window.location.hash === "#5") {
    activateTab(5);
  }
  if (window.location.hash === "#6") {
    activateTab(6);
  }
});

dropdown.click(function (e) {
  e.stopPropagation();
  e.preventDefault();
  dropdownMenu.slideToggle(100);
});

$(document).on("click", function (e) {
  dropdownMenu.hide();
});

// activateTab(0);

// tabMenu.click(function (e) {
//   if (currentUrl.indexOf("detail") > -1) {
//     e.preventDefault();
//     let targetIdx = $(this).index();
//     activateTab(2);

//     location.href = `product__page.html#${targetIdx}`;
//   } else {
//     let targetIdx = $(this).index();
//     e.preventDefault();
//     // 이벤트를 막아줌
//     activateTab(targetIdx);
//   }
// });

function activateTab(idx) {
  tabContent.removeClass("active");
  tabContent.eq(idx).addClass("active");

  tabMenu.removeClass("selected");
  tabMenu.eq(idx).addClass("selected");

  tabContent.hide();
  tabContent.eq(idx).show();
}
