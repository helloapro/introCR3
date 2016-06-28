var pingpong = function(x) {
  var count = [];
  var countList = document.getElementById('countList');
  var countElement;

  for (var i = 1; i <= x; i++) {
    count.push(i);
    if (i % 3 === 0) {
      //var ping = count.splice (i,1,"ping"); -->(another method)
      count[i] = "ping";
    }
    if (i % 5 === 0) {
      count[i] = "pong";
    }
    if (i % 15 === 0) {
      count[i] = "pingpong";
    }

    $("ul#countList").append("<li><span class='count'>" + count[i] + "</span></li>")
    /*var frag = document.createDocumentFragment();
    for (var j = count.length; j--;) {
      var li = document.createElement("li").firstChild;
      li.appendChild(document.createTextNode(count[j++]));
      frag.appendChild(countElement);
    } */


  }

  alert(count);
//  countList.appendChild(frag);

}


$(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());

    var result = pingpong(number);

  });
});
