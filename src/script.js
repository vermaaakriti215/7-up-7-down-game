function sevenUp(a, b) {
  switch (a) {
    case 1:
      let imageone = document.querySelectorAll("#dice-one");

      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    default:
  }
}

let a = Math.floor(Math.random() * 6) + 1;
let b = Math.floor(Math.random() * 6) + 1;
console.log(a);
console.log(b);
let z = a + b;
if (z > 7) {
  let sevenup = document.querySelector("#seven-up");
  sevenup.addEventListener("click", sevenUp);
} else if (z < 7) {
  let sevendown = document.querySelector("#seven-down");
  sevendown.addEventListener("click", sevenDown);
} else {
  let seven = document.querySelector("#seven-only");
  seven.addEventListener("click", sevenOnly);
}
