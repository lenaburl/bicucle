function TwitterSlider () {
  $(".slider-buttons input[type=radio]").click(function (){
    var btn_id = $(this).attr( "id");
    if (btn_id == "btn-1") {
      $(".slider-slides").css("transform", "translate(0)");
    }
    else if (btn_id == "btn-2") {
      $(".slider-slides").css("transform", "translate(-1060px)");
    }
    else if (btn_id == "btn-3") {
      $(".slider-slides").css("transform", "translate(-2120px)");
    }
  });
}


$(document).ready(function() {
  TwitterSlider();
});