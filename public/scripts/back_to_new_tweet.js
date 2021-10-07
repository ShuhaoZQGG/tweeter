$(document).ready(function(){
  let count = 0;
  $(".newTweet").on("click", function(){
    count ++;

    if (count % 2 === 1) {
      $('html, body').animate({
        scrollTop: $("#tweet-text").offset().top - 190
        }, 1000);
      $('#tweet-text').focus();
    } else {
      $('html, body').animate({
        scrollTop: $(".tweets-container").offset().top - 110
        }, 1000);
    }

  })

})