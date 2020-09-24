// load event listeners
loadEventListeners();

function loadEventListeners() {
  document.addEventListener("DOMContentLoaded", function () {
    /* The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. */
    calcTime();
  });
}

let timeTo = document.getElementById("time-to").value,
  date,
  now = new Date(),
  newYear = new Date("1.1.2021").getTime(),
  startTimer = "";

// calculate date, hour, minute and second
function calcTime(dates) {
  //ui variables
  clearInterval(startTimer);

  if (typeof dates == "undefined") {
    date = new Date(newYear).getTime();
  } else {
    date = new Date(dates).getTime();
  }

  function updateTimer(date) {
    let now = new Date().getTime();
    let distance = date - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // select element
    document.querySelector(".clock-day").innerHTML = days;
    document.querySelector(".clock-hours").innerHTML = hours;
    document.querySelector(".clock-minutes").innerHTML = minutes;
    document.querySelector(".clock-seconds").innerHTML = seconds;

    if (now >= date) {
      clearInterval(startTimer);
      document.querySelector(".clock-day").innerHTML = "D";
      document.querySelector(".clock-hours").innerHTML = "O";
      document.querySelector(".clock-minutes").innerHTML = "N";
      document.querySelector(".clock-seconds").innerHTML = "E";
    }
  }

  startTimer = setInterval(function () {
    updateTimer(date);
  }, 1000);
}
