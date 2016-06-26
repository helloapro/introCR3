var pingpong = function(x) {
  return false;

}


$(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    
    var number = parseInt($("input#number").val());

    var result = pingpong(number);
    alert(result);
  });
});
