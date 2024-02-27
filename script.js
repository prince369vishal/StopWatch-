let [second, minute, hour] = [0, 0, 0];
let displayTime = document.querySelector("#displayTime");
let timer = null;

function time() {
  second++;
  if (second === 60) {
    second = 0;
    minute++;
    if (minute === 60) {
      minute = 0;
      hour++;
      if (hour == 99) {
        hour = 0;
      }
    }
  }
  let h = hour < 10 ? "0" + hour : hour;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  displayTime.innerHTML = h + ":" + m + ":" + s;
}

function startWatch() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(time, 1000);
}

function stopWatch() {
  clearInterval(timer);
}

function resetWatch() {
  clearInterval(timer);
  [second, minute, hour] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
