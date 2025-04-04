// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time
//                            Times are approximate
//                            setTimeout(callback, delay);

// function hello() {
//   window.alert("Hello");
// }

// setTimeout(hello, 3000);
// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
// clearTimeout(timeoutId);

let timeoutId;

function showAlert() {
    window.alert("Hello");
}

function startTimer() {
    timeoutId = setTimeout(showAlert, 3000);
    console.log("STARTED");
}

function clearTime() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}
