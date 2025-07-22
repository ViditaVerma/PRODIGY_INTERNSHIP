
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;
    let isRunning = false;
    let angle = 0;

    const display = document.getElementById("display");
    const progressCircle = document.getElementById("progressCircle");

    function formatTime(ms) {
      const minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
      const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
      const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
      return `${minutes}:${seconds}.${centiseconds}`;
    }

    function updateDisplay() {
      const now = Date.now();
      elapsedTime = now - startTime;
      display.textContent = formatTime(elapsedTime);

      // Animate circle: angle increases by 6 degrees every second (360° every 60s)
      angle = (elapsedTime / 1000) * 6 % 360;
      progressCircle.style.background = `conic-gradient(#ff9800 ${angle}deg, #222 ${angle}deg)`;
    }

    function start() {
      if (isRunning) return;
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(updateDisplay, 10);
      isRunning = true;
    }

    function pause() {
      clearInterval(timerInterval);
      isRunning = false;
    }

    function reset() {
      clearInterval(timerInterval);
      elapsedTime = 0;
      isRunning = false;
      display.textContent = "00:00.00";
      angle = 0;
      progressCircle.style.background = `conic-gradient(#ff9800 0deg, #222 0deg)`;
      document.getElementById("laps").innerHTML = "";
    }

    function lap() {
      if (!isRunning) return;
      const lapTime = formatTime(elapsedTime);
      const lapElement = document.createElement("div");
      lapElement.className = "lap";
      const lapCount = document.getElementById("laps").children.length + 1;
      lapElement.textContent = `#${lapCount}  ${lapTime}`;
      document.getElementById("laps").prepend(lapElement);
    }

    function clearAll() {
      document.getElementById("laps").innerHTML = "";
    }
  