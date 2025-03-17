const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess > 100 || guess < 1) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert(`Too low! Try Again!`);
    } else if (guess > answer) {
      window.alert(`Too High! Try Again!`);
    } else {
      window.alert(
        `Currect! The answer is ${answer}. It took you ${attempts} attempts`
      );
      running = false;
    }
  }
}
