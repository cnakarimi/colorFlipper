const codes = [1, 2, 3, 4, 5, 6, "a", "b", "c", "d", "e", "f"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  let flipper = "#";
  for (let i = 0; i < 6; i++) {
    flipper += codes[getRandomNumber()];
  }
  color.textContent = flipper;
  document.body.style.backgroundColor = flipper;
});
function getRandomNumber() {
  return Math.floor(Math.random() * codes.length);
}
