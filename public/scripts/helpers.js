/* eslint no-undef: "off" */
$(document).ready(() => {

  // Character Counter
  const maxCount = 140;
  $(".counter").text(`${maxCount}`);
  $("#tweet-text").keyup(event => {
    const tweet = event.target.value;
    const charLeft = maxCount - tweet.length;
    $(".counter").text(`${charLeft}`);
    if (charLeft <= 0) {
      $(".counter").addClass("limit-alert");
    } else {
      $(".counter").removeClass("limit-alert");
    }
  });

  // New Tweet Drop-down
  document.getElementById("too-long-message").hidden = true;
  document.getElementById("no-text-message").hidden = true;
  document.getElementById("new-tweet").hidden = true;
  $("#compose-tweet").click(event => {
    event.preventDefault();
    $("#new-tweet").slideToggle();
    $("#tweet-text").focus();
  });

  // Scroll-to-Top Button
  document.getElementById("scroll-button").hidden = true;
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $("#scroll-button").fadeIn();
    } else {
      $("#scroll-button").fadeOut();
    }
  });
  $("#scroll-button").click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});