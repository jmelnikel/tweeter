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
  const $avatar = $("<img>")
    .attr("src", tweetObject.user.avatars)
    .attr("alt", "User Avatar")
  const $name = $("<span>").text(tweetObject.user.name)
  const $avatarName = $("<div>").append($avatar, $name)
  const $handle = $("<span>").text(tweetObject.user.handle)
  const $header = $("<header>").append($avatarName, $handle)
  const $content = $("<p>").text(tweetObject.content.text)
  const $main = $("<main>").append($content)
  const $timeCreated = $("<span>").text(tweetObject.created_at)
  const $iconLinks = $("<span>").text("Icon Links")
  const $footer = $("<footer>").append($timeCreated, $iconLinks)
  const $article = $("<article>").append($header, $main, $footer)
    .addClass("tweet")

  return $article
};

const renderTweets = (tweetsArray, $container) => {
  for (let tweet of tweetsArray) {
    $($container).append(createTweetElement(tweet))
  }
}

$(document).ready(() => {
  const $container = $(".container")
  renderTweets(tweetsArray, $container) // Dependency Injection
});
