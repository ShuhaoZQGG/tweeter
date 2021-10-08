/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  // escape function to handle XSS attack
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //function to creeate each individual tweets
  const createTweetElement = function(tweet_Data) {
    const  tweet_article = `
      <article class = "tweets-article">
        <header>
          <div class = "avatar-name">
          <img src = ${tweet_Data.user.avatars}>
          <h6>${tweet_Data.user.name}</h6>
          </div>
          <h5>${tweet_Data.user.handle}</h5>
        </header>
        <p>${escape(tweet_Data.content.text)}</p>
        <footer class = "tweets-footer">
          <p id = "tweet-time">${timeago.format(tweet_Data.created_at)}</p>
          <div class = "interaction-buttons">
            <i class="fas fa-heart"></i>
            <i class="fas fa-comment"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </div>
        </footer>
      </article>
       `;

    return tweet_article;
  };

  // function to render all the tweets sent
  const renderTweets = function(tweets_data) {
    $('#tweets-container').empty();

    for (const tweet of tweets_data) {
      const $tweet = createTweetElement(tweet);
  
      $('#tweets-container').prepend($tweet);
    }
    return $('#tweets-container');
  };

  renderTweets(data);

  // ajax get method to render the tweets
  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        renderTweets(tweets);
      },

      error: (err) => {
        alert(`there was an error ${err}`);
      }
    });
  };

  // submit form event to post a new tweet
  const $form = $("#newTweet-form");

  $form.on("submit", function(event) {
    event.preventDefault();

    const serializeData = $(this).serialize();
    // If user input is empty, give a corresponding error message
    if ($("#counter").val() === '140') {
      $(".err-msg").slideDown(400, function() {
        $(this).text("Your tweet is empty!")
          .css("display", "inline");
      });

    // If user input exceeds the maximum limit (140), display a error messages 
    } else if (Number($("#counter").val()) < 0) {
      $(".err-msg").slideDown("slow", function() {
        $(this).text("Your tweet exceeds 140 characters!")
          .css("display", "inline");
      });
    } else {
      // empty error message (if any), render tweet and clear the textarea
      $.post("/tweets", serializeData, (err, res) =>{
        if (err) {
          alert(`there was an error ${err}`);
        } else {
          $(".err-msg").empty();
          $(".err-msg").css("display", "none");
          $("#tweet-text").val('');
          $("#counter").val('140');
          loadTweets();
        }
      });
    }
  });

});

