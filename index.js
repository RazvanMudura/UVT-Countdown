let countDownDate = new Date("Sep 20, 2021 09:00:00").getTime();
let countdown = document.getElementById("countdown");
let ended = false;

const timer = () => {
  let today = new Date().getTime();
  let timeleft = countDownDate - today;

  if (timeleft < 0) {
    if (!ended) {
      countdown.remove();
      let timeUp = document.createElement("div");
      let video = document.createElement("video");
      let audio = document.createElement("audio");

      audio.src = "audio.mp3";
      audio.loop = true;
      audio.autoplay = true;

      video.src = "video.mp4";
      video.loop = true;
      video.muted = true;
      video.autoplay = true;

      timeUp.innerText = "Gata cu joaca bro \n Du-te si salveza-ti patria";
      timeUp.id = "timeUp";

      document.getElementById("container").appendChild(timeUp);
      document.getElementById("container").appendChild(video);
      document.getElementById("container").addEventListener("click", () => {
        let response = audio.play();

        if (response !== undefined) response.then((_) => {}).catch((error) => {});
      });

      ended = true;
    }
  } else {
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
};

timer();
setInterval(() => timer(), 1000);
