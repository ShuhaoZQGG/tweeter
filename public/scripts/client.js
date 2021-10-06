/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweet_post =  {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1633313862833
};

const createTweetElement = function(tweet_Data) {
 const tweet_article = `
<article class = "tweets-article">
  <header>
    <div class = "avatar-name">
    <img src = ${tweet_Data.user.avatars}>
    <h6>${tweet_Data.user.name}</h6>
    </div>
    <h5>${tweet_Data.user.handle}</h5>
  </header>
  <p>${tweet_Data.content.text}</p>
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
$(document).ready(function() {
  const $tweet = createTweetElement(tweet_post);
  console.log($tweet);
  $('#tweets-container').append($tweet);
});
