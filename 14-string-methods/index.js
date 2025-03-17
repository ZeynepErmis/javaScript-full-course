// String method = allow you to manipulate and work with text (string)

let userName = "Zeynep";

console.log(userName.charAt(0));
console.log(userName.indexOf("e")); 
console.log(userName.lastIndexOf("e"));
console.log(userName.length); 
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3)); 

let result = userName.startsWith(" ");
// let result = userName.endsWith(" ");

if (result) {
  console.log("your username cant start with ' ' ");
} else {
  console.log(userName);
}

let userName1 = "    Zeynep      ";
userName1 = userName1.trim();
console.log(userName1);

let phoneNumber = "123-456-789";
console.log(phoneNumber.padStart(15, "0"));
console.log(phoneNumber.padEnd(15, "0"));
