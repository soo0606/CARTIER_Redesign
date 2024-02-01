// top-bar scroll
  var lastScrollTop = 0;
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
    if(scrollTop >= 100) { 
        if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { 
            $(".top-bar-section").css("top","-100px");
        } else {
            $(".top-bar-section").css("top","0px");
        }
        lastScrollTop = scrollTop;
    } 
});
// product-swiper
var swiper = new Swiper(".productSwiper", {
  effect: "coverflow",
  slidesPerView: 1.5,
  spaceBetween: 0,   
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
});
// footer main-box(<768)
$(document).ready(function() {
  function handleTitleClick() {
    if ($(this).hasClass("hover")) {
      $(this).siblings(".link-list").slideUp(300);
      $(this).removeClass("hover");
    } else {
      $(this).siblings(".link-list").slideDown(300);
      $(this).addClass("hover");
    }
    $(this).parent().siblings().children(".hover").siblings(".link-list").slideUp(300);
    $(this).parent().siblings().children(".hover").removeClass("hover");
  }

  $(".footer-main-box .title").click(handleTitleClick);

  $(".link-list").click(function(event) {
    event.preventDefault();
  });

  $(window).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth < 768) {
      $(".footer-main-box .title").off("click", handleTitleClick).on("click", handleTitleClick);
    }
  });
});
