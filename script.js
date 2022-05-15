const musicNav = document.querySelector(".music-nav");
const musicShow = document.querySelector(".menu-toggle input");
const repeatBtn = document.getElementById("repeat");
const shuffleBtn = document.getElementById("shuffle");
const pauseBtn = document.getElementById("pause");
const playBtn = document.getElementById("play");
const music = new Audio("songs/sparks.mp3");

musicShow.addEventListener("click", function () {
  musicNav.classList.toggle("slide");
});

playBtn.addEventListener("click", function () {
  playBtn.setAttribute("style", "display: none");
  pauseBtn.setAttribute("style", "display: inline-block");
  music.play();
});
pauseBtn.addEventListener("click", function () {
  pauseBtn.setAttribute("style", "display: none");
  playBtn.setAttribute("style", "display: inline-block");
  music.pause();
});
repeatBtn.addEventListener("click", function () {
  repeatBtn.classList.toggle("pressed");
  music.loop();
});
shuffleBtn.addEventListener("click", function () {
  shuffleBtn.classList.toggle("pressed");
});
