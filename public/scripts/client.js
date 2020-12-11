/* eslint no-undef: "off" */
$(document).ready(() => {
  const $createTweetElement = tweetObject => {
    const $avatar = $("<img>")
      .attr("src", tweetObject.user.avatars)
      .attr("alt", "User Avatar");
    const $name = $("<span>").text(tweetObject.user.name);
    const $avatarName = $("<div>").append($avatar, $name);
    const $handle = $("<span>").text(tweetObject.user.handle);
    const $header = $("<header>").append($avatarName, $handle);
    const $content = $("<p>").text(tweetObject.content.text);
    const $main = $("<main>").append($content);
    const $timeCreated = $("<span>").text(new Date(tweetObject.created_at).toLocaleString());
    const $footer = $("<footer>").append($timeCreated);
    const $article = $("<article>").append($header, $main, $footer)
      .addClass("tweet");

    return $article;
  };

  const $renderTweets = (tweetsArray, $container) => {
    for (const tweet of tweetsArray) {
      $($container).prepend($createTweetElement(tweet));
    }
  };

  const $loadTweets = () => {
    const $container = $("#tweets-list");
    $container.empty();
    $.get("/tweets", (tweetsArray) => {
      $renderTweets(tweetsArray, $container); // Dependency Injection
    });
  };

  $("#form").submit(event => {
    event.preventDefault();
    event.stopPropagation();
    const $tweetText = $("#tweet-text").val();
    const $serialized = $("#form").serialize();
    if (!$tweetText) {
      $("#no-text-message").slideDown();
    } else if ($tweetText.length > 140) {
      $("#too-long-message").slideDown();
    } else {
      $.post("/tweets", $serialized);
      $("#no-text-message").slideUp();
      $("#too-long-message").slideUp();
      $("#tweet-text").val("");
      $(".counter").text("140");
      $loadTweets();
    }
  });

  $loadTweets();
});
