// NodeList = static collection of html elements by ( id, class, element)
//            can be created by using querySelectorAll()
//            similiar to an array, but no(map, filter,reduce)
//            NodeList wont update to automatically refelct changes

let btn = document.querySelectorAll(".mybtn");

console.log(btn);

// btn.forEach(btns => {
//     btns.style.backgroundColor = "green";
//     btns.textContent += " changed"
// })

// btn.forEach((btns) => {
//   btns.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });

// btn.forEach((btns) => {
//   btns.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });

// btn.forEach(bnts => {
//     bnts.addEventListener("mouseout", event =>{
//         event.target.style.backgroundColor = "aqua";
//     })
// })

// const newbtn = document.createElement("button");
// newbtn.textContent = "btn 5";
// newbtn.classList = "mybtn";
// document.body.appendChild(newbtn);

// btn = document.querySelectorAll(".mybtn");
// console.log(btn);

btn.forEach((bnts) => {
  bnts.addEventListener("click", (event) => {
    event.target.remove();
    btn = document.querySelectorAll(".mybtn");
    console.log(btn);
  });
});
