$(document).ready(function(){
  let count = 0;

  

  $(".newTweet").on("click", function(){
    count ++;

    if (count % 2 === 1) {
      $('html, body').animate({
        scrollTop: $("#tweet-text").offset().top - 190
        }, 1000);
      $('#tweet-text').focus();
      $("#up-button").css("display", "none");
    } else {
      $('html, body').animate({
        scrollTop: $(".tweets-container").offset().top - 110
        }, 1000);
    }
  })

  $(".newTweet").on("mouseover hover",function(){
    $(".fa-angle-double-down").animate({
      top: "90px"
    });
    $(".fa-angle-double-down").animate({
      top: "80px"
    });
  })

  /*
  $(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta < 0) {
      $("#up-button").css("display", "inline-flex");
      $("nav").css("visibility", "hidden");
    }
  });
  */

$(window).scroll(function() {
  if($(window).scrollTop() > $(document).height() * 0.2) {
    $("#up-button").css("display", "inline-flex");
    $("nav").css("visibility", "hidden");
  }
});


  $("#up-button").on("click", function(){
    $(this).css("display", "none");
    $("nav").css("visibility", "visible");
    $("html").get(0).scrollIntoView();

  })
})