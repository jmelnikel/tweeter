$(document).ready(() => {
  const maxCount = 140;
  $(".counter").text(`${maxCount}`);

  $("#tweet-text").keyup(event => {
    const tweet = event.target.value
    const charLeft = maxCount - tweet.length
    $(".counter").text(`${charLeft}`);
    if (charLeft <= 0) {
      $(".counter").addClass("limit-alert")
    } else {
      $(".counter").removeClass("limit-alert")
    }
  });
});