 var source = "./assets/audio/KakaoTalk_Audio_2021-07-18-04-18-44.m4a"
 var audio = document.createElement("audio");
 //
 audio.autoplay = true;
 //
 audio.load()
 audio.addEventListener("load", function() { 
     audio.play(); 
 }, true);
 audio.src = source;
