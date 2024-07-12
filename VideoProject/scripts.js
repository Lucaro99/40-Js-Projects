document.getElementById("Change").addEventListener("click", () => {
  let video = document.getElementById("video");
  if(video.paused) {
    video.play();
    document.getElementById("swipe").className = "swipe";
  }else{
    video.pause();
    document.getElementById("swipe").className = "swipe_pause";
  }
});
