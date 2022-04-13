var video = document.getElementById("player1");
var volume = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	document.querySelector('video').playbackRate = document.querySelector('video').playbackRate * 0.950;
	console.log("New speed is " + document.querySelector('video').playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	document.querySelector('video').playbackRate = document.querySelector('video').playbackRate * 1.050;
	console.log("New speed is " + document.querySelector('video').playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original Location " + video.currentTime);
	video.currentTime = video.currentTime + 15;
	console.log("New Location " + video.currentTime);
});

document.getElementById('player1').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        console.log("Original Location " + video.currentTime);
		video.currentTime = 0;
		console.log("Going back to beginning");
		console.log("New Location " + video.currentTime);
		video.play();
    }

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {    
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#vintage").addEventListener("click", function() {

	document.getElementById('player1').setAttribute("class", "oldSchool");

});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById('player1').removeAttribute("class", "oldSchool");
});

document.querySelector("#slider").addEventListener("change", function(e){
    document.querySelector("#volume").innerHTML = e.currentTarget.value + "%";
	video.volume = e.currentTarget.value / 100;
})








