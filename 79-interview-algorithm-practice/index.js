// //1. check isPrime

// function isPrime(n) {
//   var divisor = 2;

//   while (n > divisor) {
//     if (n % divisor == 0) {
//       return false;
//     } else divisor++;
//   }
//   return true;
// }

// isPrime(5);

//

// //2. prime factors

// function primeFactors(n) {
//   var factors = [],
//     divisor = 2;

//   while (n > 2) {
//     if (n % divisor == 0) {
//       factors.push(divisor);
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   return factors;
// }

// // primeFactors(100);

// function fibonacci(n) {
//   const fib = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }

//   return fib[n];
// }

// console.log(fibonacci(6));

// function faktoriyelRecursive(n) {
//   // Temel Durum: Eğer n 1 ise, sonuç 1 olur.
//   if (n === 1) {
//     return 1;
//   }

//   // Özyineleme Durumu: n * (n-1)'in faktöriyelini çağırıyoruz.
//   return n * faktoriyel(n - 1);
// }

// console.log(faktoriyel(5)); // 120

// //factorial
// function factorial(n) {
//   let result = 1;

//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

//Greatest Common Divisor
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log(gcd(8, 12)); // 4

function findMinMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return { min, max };
}

console.log(findMinMax([12, 5, 3, 8, 19, 1])); // { min: 1, max: 19 }
