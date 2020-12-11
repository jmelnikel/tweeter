$(document).ready(() => {
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