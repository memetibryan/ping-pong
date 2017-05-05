$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    $("ul").empty();
    var number = parseInt($("input#ping").val());

    for (m = 1; m <= number; m++)
      if (m % 3 === 0 && m % 5 === 0) {
        $("ul").append("<li>pingpong</li>");

      } else if (m % 3 === 0) {
      $("ul").append("<li>ping</li>");

    } else if (m % 5 === 0) {
      $("ul").append("<li>pong</li>");

    } else {
      $("ul").append("<li>" + m + "</li>");
    }
    event.preventDefault();
  });
});
