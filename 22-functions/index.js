function happyBirthday(username, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`Happy birthday dear ${username}!`);
  console.log(`You are ${age} old!`);
}
happyBirthday("Egormity", 25);
happyBirthday("Spongebob", 30);
happyBirthday("Patric", 37);

function add(x, y) {
  let result = x + y;
  return result;
}
let answer = add(2, 3);
console.log(answer);
console.log(add(3, 4));

function substract(x, y) {
  return x - y;
}
console.log(substract(10, 2));

function isEven(number) {
  return number % 2 === 0 ? true : false;
}
console.log(isEven(11));
console.log(isEven(112));

function wewewe(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(wewewe(`Egormityproduction.com`));
console.log(wewewe(`Egormityproduction@gmail.com`));
