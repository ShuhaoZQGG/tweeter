$(document).ready(function() {
  // The following codes handle the box shadow when user hovers on the tweet article area 
  $(".tweets-article").on("mouseenter", function() {
    $(this).css("box-shadow", "10px 5px 5px #60a3bc");
    const tweets_footer = $(this).children(".tweets-footer");
    tweets_footer.css("box-shadow", "0px 10px #60a3bc");
  });

  $(".tweets-article").on("mouseleave", function() {
    $(this).css("box-shadow", "none");
    const tweets_footer = $(this).children(".tweets-footer");
    tweets_footer.css("box-shadow", "none");
  });

  // The following codes handle the color change when user hovers the buttons
  $(".fa-heart").on("mouseenter", function() {
    $(this).css("color","#fad390");
  });

  $(".fa-heart").on("mouseleave", function() {
    $(this).css("color","#60a3bc");
  });

  $(".fa-comment").on("mouseenter", function() {
    $(this).css("color","#fad390");
  });

  $(".fa-comment").on("mouseleave", function() {
    $(this).css("color","#60a3bc");
  });

  $(".fa-retweet").on("mouseenter", function() {
    $(this).css("color","#fad390");
  });

  $(".fa-retweet").on("mouseleave", function() {
    $(this).css("color","#60a3bc");
  });
});