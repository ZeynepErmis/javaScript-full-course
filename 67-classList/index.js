// classList = element property in javascript used to interact with ann element list of classes (css classes)
//              allows you make reusable classes for many elements accross you webpage.

// add()
// remove()
//toggle(remove if present, add if not)
//replace(oldclass, newclass)
// contains()

const mybtn = document.getElementById("mybtn");

// mybtn.classList.add("enabled");
// mybtn.classList.remove("enabled");

// mybtn.addEventListener("mouseover", (event) => {
//   event.target.classList.toggle("hover");
// });

// mybtn.addEventListener("mouseout", (event) => {
//   event.target.classList.toggle("hover");
// }); 

// mybtn.classList.add("enabled");

// mybtn.addEventListener("click" , event =>{
//     event.target.classList.replace("enabled", "disabled")
// });

 mybtn.classList.add("enabled");

mybtn.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "test";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
