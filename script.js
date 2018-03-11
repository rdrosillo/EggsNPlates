$(document).ready(function() {
	window.onkeydown = function(e) {
		console.log(e.key)
		// w: 87
		if (e.key == "ArrowLeft") {
			$("#egg").css("left", (parseInt($("#egg").css("left")) - 8).toString() + "px")
		// s: 83
		} else if (e.key == "ArrowRight") {
			$("#egg").css("left", (parseInt($("#egg").css("left")) + 8).toString() + "px")
		// up: 38
		} else if (e.key == "ArrowUp") {
			$("#egg").css("top", (parseInt($("#egg").css("top")) - 8).toString() + "px")
		// down: 40
		} else if (e.key == "ArrowDown") {
			$("#egg").css("top", (parseInt($("#egg").css("top")) + 8).toString() + "px")
		}

		var egg = {
			x: $("#egg").css("left"),
			y: $("#egg").css("top")
		};
		console.log(egg);
	}
	update();
});

function newPlate() {
	$(plateString).append()
}

function update() {
	$('.invisible').mouseenter(function() {
		$(this).animate(randomAnimateObj())
	});

	$('.invisible').click(function() {
		count -= 140
		var newThing = $(ballString);
		newThing.css("top", count + "px")
		$('.container').append(newThing);
		update();
	});
}

function randomAnimateObj() {
	var leftBoundary = $(".container").width() - $(".ball").width() - 20
	var topBoundary = $(".container").height() - $(".ball").height() - 10

	var randomLeft = Math.random() * leftBoundary
	var randomTop = Math.random() * topBoundary - 5

	var randomBorderRadius = Math.random() * 100
	randomBorderRadius = randomBorderRadius.toString() + "%"

	return {
		"left": randomLeft,
		"top": randomTop,
		"border-radius": randomBorderRadius
	}
}

var plateString = '<div class="plate"></div>';
var eggString = '<div class="invisible"><div class="ball"></div></div>';
var count = 0;