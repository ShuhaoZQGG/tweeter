$(document).ready(function() {
  // Event takes place whenever user begins to input
  $('#tweet-text').on("keyup keydown", function() {
    const count = 140 - $(this).val().length; // the remaining count number
    const counter = $(this).siblings(".tweet-submit").children("#counter"); 
    counter.text(count); // replace the counter value by the remaning count number

    if (counter.val() < 0) {
      counter.css("color", "red"); // turn coutner color to red if maximum value is exceeded
    } else {
      counter.css("color", "black");
    }
  });
}
);