let progressBar = document.querySelectorAll(".circular-progress");
let valueContainer = document.querySelectorAll(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.forEach((value) => (value.textContent = `${progressValue}%`));

  progressBar.forEach(
    (progress) =>
      (progress.style.background = `conic-gradient(
      #3498db ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`)
  );
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);
