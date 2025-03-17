// .checked = property that determines the checked state of an
//                     HTML checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `You are Subscribed`;
  } else {
    subResult.textContent = `You are not Subscribed`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with Mastercard`;
  } else if (paypalBtn.checked) {
    paymentResult.textContent = `You are paying with Paypal`;
  } else {
    paymentResult.textContent = `You are not paying with any payment method`;
  }
};
