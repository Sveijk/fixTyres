//Spawn Tyres
$(document).ready(function() {
  createTyres(25);
});

//Optional additions
var screenWidth = $(document).width();
var screenHeight = $(document).height();

var low = 150;
var high = 250;

var hitCount = 0;
var missCount = 0;

var span = $('<span id = "dummy"></span>');
span.appendTo("#container");
//End Optional

function createTyres(count) {
  var delay = 0;
  var hit = $("<h1>" + "Hits: " + "<span id='hits'>" + 0 + "</span>" + "</h1>");
  for (var i = 0; i < count; i++) {
    var width = Math.floor(Math.random() * (high - low) + low);
    var tyre = $('<img src="flat_tyre.png">');
    tyre.css({
      position: "absolute",
      left: 0,
      top: Math.floor(
        Math.random() * (screenHeight - Math.floor(screenHeight / 5))
      ), //Give random starting position
      width: width
    });
    tyre.appendTo("#tyre");
    delay = delay + Math.floor(Math.random() * 2000); //Random delays
    var speed = Math.floor(Math.random() * 450) + 100; //Random speed
    tyre
      .hide()
      .delay(delay)
      .show(1)
      .animate(
        { left: screenWidth },
        {
          //Hide tyre on start and show one after random delay
          duration: ($(document).width() / speed) * 1000,
          easing: "linear",
          complete: function() {
            $(this).hide();
            // missCount++;
          }
        }
      );
    tyre.click(function() {
      // $(this).stop()
      // $(this).hide()
      $(this).attr("src", "fixed_tyre.png");
      hitCount++;
      hit.appendTo("#container");
      document.getElementById("hits").innerHTML = hitCount;
    });
  }
}
