function diceroll() {
  return Math.floor(Math.random() * 6) + 1;
}

function sevenUp() {
  let a = diceroll();
  let b = diceroll();
  z = a + b;
  if (z > 7) {
    bal = bal + 5;
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Player Won!! 😄";
  } else if (z == 7) {
    bal = bal;
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Draw!! 😐";
  } else {
    bal = bal - 5;
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Player Lose!! ☹️";
  }
  let score = document.querySelector("#score");
  score.innerHTML = bal;
}
function sevenDown() {
  let a = diceroll();
  let b = diceroll();
  z = a + b;
  if (z < 7) {
    bal = bal + 5;
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Player Won!! 😄";
  } else {
    bal = bal - 5;
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Player Lose!! ☹️";
  }
  let score = document.querySelector("#score");
  score.innerHTML = bal;
}
function sevenOnly() {
  let a = diceroll();
  let b = diceroll();
  z = a + b;
  if (z == 7) {
    bal = bal + 10;
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Player Won!! 😄";
  } else {
    bal = bal + 10;
    let h1 = document.querySelector("h1");
    h1.innerHTML = "Player Lose!! ☹️";
  }
  let score = document.querySelector("#score");
  score.innerHTML = bal;
}
let bal = 100;
let sevenup = document.querySelector("#seven-up");
let sevendown = document.querySelector("#seven-down");
let seven = document.querySelector("#seven-only");
sevenup.addEventListener("click", sevenUp);
sevendown.addEventListener("click", sevenDown);
seven.addEventListener("click", sevenOnly);
