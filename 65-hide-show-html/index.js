const myBtn = document.getElementById("myBtn");
const myImg = document.getElementById("myImg");

// mybtn.addEventListener("click", event => {

//     if(myimg.style.display === "none"){
//         myimg.style.display = "block";
//         mybtn.textContent = "hide";
//     }
//     else{
//         myimg.style.display = "none";
//         mybtn.textContent = "show";
//     }
// });

myBtn.addEventListener("click", (event) => {
  if (myImg.style.visibility === "hidden") {
    myImg.style.visibility = "visible";
    myBtn.textContent = "hide";
  } else {
    myImg.style.visibility = "hidden";
    myBtn.textContent = "show";
  }
});
