// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."

// hello(leave);

// function hello(callback) {
//   console.log("Hello");
//   callback();
// }

// function leave() {
//   console.log("leave");
// }

// function goodbye() {
//   console.log("Goodbye");
// }

sum(displayPage, 5, 9);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("h1").textContent = result;
}
