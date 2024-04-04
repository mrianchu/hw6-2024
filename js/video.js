var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	// Initialize the video element and turn off autoplay and turn off looping.
	video = document.getElementById('player1');
	video.removeAttribute('autoplay');
	console.log('Auto play is set to false')
	video.removeAttribute('loop');
	console.log('Loop is set to false')

    // Play the video and update the volume information. 
	document.getElementById("play").addEventListener("click", playVideo);

    // Pause the video.
    document.getElementById("pause").addEventListener("click", pauseVideo);

    // Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  
    document.getElementById("slower").addEventListener("click", slowDown);

    //Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down.
    document.getElementById("faster").addEventListener("click", speedUp);

    //Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
    document.getElementById("skip").addEventListener("click", skipAhead);

    //Mute/unmute the video and update the text in the button.
	document.getElementById("mute").addEventListener("click", muteAndUnmute);

    //Change the volume based on the slider and update the volume information.
    document.getElementById("slider").addEventListener("input", adjustSlider);

    //Utilize the existing oldSchool class on the video element
    document.getElementById('vintage').addEventListener('click', makeVintage);

    //Remove the oldSchool class from the video.
    document.getElementById('orig').addEventListener('click', makeOrig);

	
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

function playVideo() {
    console.log("Play Video");
    video.play();
}

function pauseVideo() {
    video.pause();
}

function slowDown() {
    console.log("Slow down Video");
    var currentSpeed = video.playbackRate;
    var newSpeed = currentSpeed - (currentSpeed * 0.1);
    console.log("Speed is " + (newSpeed));
    video.playbackRate = newSpeed;
}  

function speedUp() {
    console.log("Speed up Video");
    var currentSpeed = video.playbackRate;
    var newSpeed = currentSpeed + (currentSpeed * 0.1);
    console.log("Speed is " + (newSpeed));
    video.playbackRate = newSpeed;
}

function skipAhead() {
    console.log("Skip Ahead");
    console.log("Video current time is " + video.currentTime);
    video.currentTime += 10; 

    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
}

function muteAndUnmute() {
    var muteButton = document.getElementById("mute");
    
    if (muteButton.textContent === "Mute") {
        console.log("Mute");
        video.muted = true;
        muteButton.textContent = "Unmute"; 
    } else {
        console.log("Unmute");
        video.muted = false;
        muteButton.textContent = "Mute"; 
    }
}

function adjustSlider() {
    var volumeValue = this.value;
    video.volume = volumeValue / 100;
    var volumeInfo = document.getElementById("volume");
    volumeInfo.textContent = volumeValue + "%";
    console.log('The current value is ' + video.volume);
}

function makeVintage() {
    var video = document.getElementById("player1");
    video.classList.add("oldSchool");
}

function makeOrig() {
    var video = document.getElementById("player1");
    video.classList.remove("oldSchool");
}