// .filter() -> filters elements from an array

let numbers = [1, 2, 3, 4, 5];

function isEven(element) {
  return element % 2 === 0;
}
function isOdd(element) {
  return element % 2 !== 0;
}

const evenNums = numbers.filter(isEven);
console.log(evenNums);
const oddNums = numbers.filter(isOdd);
console.log(oddNums);

const words = ["apple", "tornado", "kid", "luffy", "lettuce"];

function isShort(element) {
  return element.length <= 5;
}

const shortWords = words.filter(isShort);
console.log(shortWords);
