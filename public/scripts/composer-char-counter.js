$(document).ready(function() {
  $('#tweet-text').on("keyup keydown", function(){
    const count = 140 - $(this).val().length;
    const counter = $(this).siblings(".tweet-submit").children("#counter");
    counter.text(count);

    if (counter.val() < 0) {
      counter.css("color", "red");
    } else {
      counter.css("color", "black");
    }
  })
}
)