let userName;

do {
  userName = window.prompt("Enter your name");
} while (userName === "" || userName === null);

console.log(`Hello ${userName}`);

// let loggedIn = false;
// let userName;
// let password;

// while (!loggedIn) {
//   userName = window.prompt("Enter your username:");
//   password = window.prompt("Enter your password");

//   if (userName === "bro" && password === "444") {
//     loggedIn = true;
//     console.log("You are loged in welcome ");
//   } else {
//     console.log("invalid");
//   }
// }
