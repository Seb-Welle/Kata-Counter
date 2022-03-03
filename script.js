const label = document.querySelector("label");
let counter = 0;
let colorCounter = 0;

const main = document.querySelector("main");
main.addEventListener("click", increaseCounter);

function increaseCounter() {
  label.innerText = counter;
  counter++;
  colorCounter++;
  main.style.setProperty("--counter", colorCounter + "%");
}

document.addEventListener("keypress", (e) => {
  if (["Enter", " "].includes(e.key)) {
    increaseCounter();
  }
});

const btn = document.querySelector("button");
btn.addEventListener("click", resetCounter);

function resetCounter() {
  counter = 0;
  colorCounter = 0;
  label.innerText = counter;
  _main.style.setProperty("--counter", 0 + "%");
}
