let countDownDate = new Date("Sep 20, 2021 09:00:00").getTime();
let countdown = document.getElementById("countdown");

const timer = () => {
  let today = new Date().getTime();
  let timeleft = countDownDate - today;

  if (timeleft < 0) {
    countdown.remove();
    let timeUp = document.createElement("div");
    document.appendChild(timeUp);
    timeUp.innerText = "Time is Up!";
  } else {
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
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
