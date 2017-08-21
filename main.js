var click = 1;

function MainMenu () {
   $("#main-menu-button").click(function (){
      if (click == 1) {
        $(".main-nav").addClass("main-nav-min");
        $(".page-header").css("height", "870");
        click = 2;
    }
    else {
      click = 1;
      $(".main-nav").removeClass("main-nav-min");
      $(".page-header").css("height", "800");
    }
  });

}

$(document).ready(function() {
  $('.twitter .slider').slick({
  dots: true,
  arrows: false,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 3000,
  });

  MainMenu();
});