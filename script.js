let tabMenu = $(".tabmenu li"),
  tabContent = $(".tabmenu__wrap"),
  currentUrl = location.href; //현재 주소표시줄 주소 확인
console.log(currentUrl);

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

  //   tabContent.each(function (i) {
  //     tabContent.find("a").removeClass("active");
  //     tabContent.eq(i).find("a").addClass("active");

  //     tabContent.hide();
  //     tabContent.eq(i).show();
  //   });
}
