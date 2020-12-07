const tweetsArray = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1606595383057
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1606681783057
  }
];

const createTweetElement = tweetObject => {
  return `
  <article class="tweet">
    <header>
      <div>
        <img class="" src="${tweetObject.user.avatars}" alt="">
        <span>${tweetObject.user.name}</span>
      </div>
      <span>${tweetObject.user.handle}</span>
    </header>
    <main>
      <p>${tweetObject.content.text}</p>
    </main>
    <footer>
      <span>${tweetObject.created_at}</span>
      <span>Icon buttons</span>
    </footer>
  </article>
  `
};

const renderTweets = tweetsArray => {
  let tweets = ""
  for (let tweet of tweetsArray) {
    tweets += createTweetElement(tweet)
  }
  return $(".container").append(tweets)
}

$(document).ready(() => {
  renderTweets(tweetsArray)
});
