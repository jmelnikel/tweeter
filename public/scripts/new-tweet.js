/* eslint no-undef: "off" */
$(document).ready(() => {
  document.getElementById("too-long-message").hidden = true;
  document.getElementById("no-text-message").hidden = true;
  document.getElementById("new-tweet").hidden = true;

  $("#compose-tweet").click(event => {
    event.preventDefault();
    $("#new-tweet").slideToggle();
    $("#tweet-text").focus();
  });
});

