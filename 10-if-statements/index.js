const mytext = document.getElementById("mytext");
const mybtn = document.getElementById("mybtn");
const result = document.getElementById("result");
let age;

mybtn.onclick = function () {
  age = Number(mytext.value);

  if (age < 0) {
    result.textContent = `you can't enter`;
  } else if (age >= 100) {
    result.textContent = `you are too old to enter`;
  } else if (age >= 18) {
    result.textContent = "approved";
  } else {
    result.textContent = "You must be 18+ to enter this website";
  }
};
