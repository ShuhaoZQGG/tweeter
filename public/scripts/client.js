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
]

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

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

const renderTweets = function(tweets_data) {
  $('#tweets-container').empty();

  for (const tweet of tweets_data) {
    const $tweet = createTweetElement(tweet);
  
    $('#tweets-container').prepend($tweet);
  }
  return $('#tweets-container');
}

  renderTweets(data);

  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        renderTweets(tweets);
      },

      error: (err) => {
        alert(`there was an error ${err}`)
      }
    });
  }

  const $form = $("#newTweet-form");

  $form.on("submit", function(event){
  event.preventDefault();

  const serializeData = $(this).serialize();
  if ($("#counter").val() === '140'){
    alert ("Your tweet is empty");
  } else if (Number($("#counter").val()) < 0) {
    alert ("Your tweet exceeds the maximum length (140)");
  } else {
     $.post("/tweets", serializeData, (err, res) =>{
      if (err) {
        alert(`there was an error ${err}`)
      } else {
       loadTweets();
      }
      })
    }
  })  

});

