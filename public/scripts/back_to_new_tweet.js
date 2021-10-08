// This script handles the stretch challenges
$(document).ready(function(){
  let count = 0;

  
  // click write a new tweet once will bring the user to the text area, click again will 
  // bring to the tweets areas
  $(".newTweet").on("click", function(){
    count ++;

    if (count % 2 === 1) {
      $('html, body').animate({
        scrollTop: $("#tweet-text").offset().top - 190
        }, 1000);
      // This can enable text area wihle bringing user to the text area 
      // (so user doesn't have to click again)
      $('#tweet-text').focus(); 
      $("#up-button").css("display", "none");
    } else {
      $('html, body').animate({
        scrollTop: $(".tweets-container").offset().top - 110
        }, 1000);
    }
  })

  // add animation on the angle-double-down icon when user hovers it
  $(".newTweet").on("mouseover hover",function(){
    $(".fa-angle-double-down").animate({
      top: "90px"
    });
    $(".fa-angle-double-down").animate({
      top: "80px"
    });
  })

  /* This code will only detect mousewheel movement so it's abandoned but kept as a reference
  $(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta < 0) {
      $("#up-button").css("display", "inline-flex");
      $("nav").css("visibility", "hidden");
    }
  });
  */

  // when user scrolls down, a "go to top" button will appear and nav bar will hide
  $(window).scroll(function() {
    if($(window).scrollTop() > $(document).height() * 0.2) {
      $("#up-button").css("display", "inline-flex");
      $("nav").css("visibility", "hidden");
    }
  });

  // click the button will bring user to the top of the browser
  $("#up-button").on("click", function(){
    $(this).css("display", "none");
    $("nav").css("visibility", "visible");
    $("html").get(0).scrollIntoView();

  })
})