const container = document.querySelector(".main-container");
let innerHTMLString = '';
let gridSize = 16;
let color = "red";


for(let i = 1; i <= gridSize ; i++) {
     innerHTMLString += '<div class="row"> </div>'
}
container.innerHTML = innerHTMLString;

const row = document.querySelectorAll(".row")
let columnHTMLString = "";

row.forEach(element => {
    for(let j=1 ; j<= gridSize; j++) {
        columnHTMLString += '<div class="box"></div>'
    }
    element.innerHTML = columnHTMLString;
    columnHTMLString = "";
})

const box = document.querySelectorAll(".box");

box.forEach(draw => draw.addEventListener("mousemove" ,  function() {
    draw.style.background = "red";
}))
