// // string slicing = creating a substring from a
// //                  portion of another string

// //                  string.slice(start, end)

const fullName = "Zeynep Ermis";

// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4);

// let firstchar = fullName.slice(0, 1);
// let lastchar = fullName.slice(-1);

// console.log(firstchar);
// console.log(lastchar);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

const email = "zzeyneppermis@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extention = email.slice(email.indexOf("@"));
console.log(username);
console.log(extention);
