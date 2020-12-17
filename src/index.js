import "./styles.css";

const videoContainer = document.querySelector(".videoContainer");
const video = videoContainer.querySelector("video");
const controls = document.querySelector(".videoPlayer__controls");
const playBtn = controls.querySelector(".PlayBtn");
const volumeBtn = controls.querySelector(".volumeBtn");
const statusBar = controls.querySelector(".statusBar");

// let delay = null;

// function displayControls () {
//   if (delay) {
//     clearTimeout(delay);
//   }
//   controls.classList.add("showing");

// }

function handlePlayClick() {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    video.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumeClick() {
  if (video.muted) {
    video.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    video.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function handleStatusBar() {
  const time = `${Math.floor(video.currentTime)}`.padStart(2, "0");
  const duration = `${Math.floor(video.duration)}`.padStart(2, "0");
  statusBar.innerHTML = `00:${time} / 00:${duration}`;
}

function init() {
  video.addEventListener("timeupdate", handleStatusBar);
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
}

if (videoContainer) {
  init();
}
