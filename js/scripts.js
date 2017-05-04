/*user interface logic*/
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var numbe = parseInt($("input#numbe").val());
      var result = pingPong(numbe);
      $("#result").text(result);
    });
});

/*bussiness logic*/
var pingPong = function(numbe) {
    if ((numbe % 3 === 0) && (numbe % 5===0)){
      return true;
    } else {
      return false;
    }
  };
