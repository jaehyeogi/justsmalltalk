var src = "./award.wav";
var body = document.getElementsByTagName("body")[0];

if (body.getElementsByTagName("audio").length <= 0) {
  var audio = document.createElement("audio");
  audio.setAttribute("id", "awardAudio");
  audio.setAttribute("autoplay", "autoplay");
  audio.setAttribute("src", "./assets/audio/justsmalltalk.mp3");
  body.appendChild(audio);

  setTimeout(function() {
    body.removeChild(audio);
  }, 230000);
}
