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
      timeUp.innerText = "Gata Bro";
      timeUp.style.fontSize = "5vh";
      timeUp.id = "box";
      timeUp.style.margin = "auto";
      document.getElementById("container").appendChild(timeUp);
      ended = true;
    }
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
