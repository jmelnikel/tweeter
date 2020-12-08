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
    $($container).prepend(createTweetElement(tweet))
  }
}

$(document).ready(() => {
  document.getElementById("too-long-message").hidden = true;
  document.getElementById("no-tweet-message").hidden = true;
  document.getElementById("new-tweet").hidden = true;

  $("#compose-tweet").click(event => {
    event.preventDefault();
    $("#new-tweet").slideToggle();
    $("#tweet-text").focus();
  })


  $("#form").submit(event => {
    event.preventDefault();
    const $tweetText = $("#tweet-text").val();
    const $serialized = $("#form").serialize();
    if (!$tweetText) {
      $("#no-tweet-message").slideDown();
    } else if ($tweetText.length > 20) {
      $("#too-long-message").slideDown();
    } else {
      $("#no-tweet-message").slideUp();
      $("#too-long-message").slideUp();
      $.post("/tweets", $serialized)
      loadTweets()
      $("#tweet-text").val(""); //Double check char couter is resetting
    }
  })

  const loadTweets = () => {
    const $container = $("#tweets-list")
    // $container.empty();
    $.get("/tweets", (tweetsArray) => {
      renderTweets(tweetsArray, $container) // Dependency Injection
    })
  }
  loadTweets()
});
