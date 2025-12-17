// creating variables

let display = document.querySelector(".time");
let startBtn = document.getElementById("start");
let resumeBtn = document.getElementById("resume");

let timerID;
let timerRunning = false;

let hours = 0;
let minutes = 0;
let seconds = 0;

const tickSound = new Audio("tick.wav");
tickSound.volume = 0.1;

//initialize clocks to 00:00:00
function initializeClock() {
  seconds = 0;
  minutes = 0;
  hours = 0;

  display.textContent = "00:00:00";
}

//function to update clock every second
function updateClock() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  display.textContent =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  tickSound.currentTime = 0;
  tickSound.play();
}

//start functionality
function startTimer() {
  if (timerRunning == false) {
    timerID = setInterval(updateClock, 1000);
    timerRunning = true;
  }

  return timerID;
}

//stop functionality
function stopTimer() {
  clearInterval(timerID);
  timerRunning = false;
  initializeClock();

  resumeBtn.textContent = "Resume";
}

//resume&pause functionality
function resumeTimer() {
  if (timerRunning == true) {
    clearInterval(timerID);
    timerRunning = false;
    resumeBtn.textContent = "Resume";
  } else {
    timerID = setInterval(updateClock, 1000);
    timerRunning = true;
    resumeBtn.textContent = "Pause";
  }
}

//event listeners
startBtn.addEventListener("click", function () {
  if (startBtn.textContent === "Start") {
    startTimer();
    startBtn.textContent = "Stop";
  } else {
    stopTimer();
    startBtn.textContent = "Start";
  }
}
);
resumeBtn.addEventListener("click", resumeTimer);
