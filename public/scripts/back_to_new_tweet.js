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
      top: "40px"
    });
    $(".fa-angle-double-down").animate({
      top: "30px"
    });
  })

  $(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta < 0) {
      $("#up-button").css("display", "inline-flex");
      $("nav").css("visibility", "hidden");
    }
});

  $("#up-button").on("click", function(){
    $('html, body').animate({
      scrollTop: $(".header").offset().top - 190
      }, 1000);
    $(this).css("display", "none");
    $("nav").css("visibility", "visible");
  })
})