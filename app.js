const container = document.querySelector(".main-container");
let innerHTMLString = '';
let gridSize = 16;
let color = "red";
const gridButton = document.querySelector(".grid-btn");
const clear = document.querySelector(".color");


function gridRow(gridnumber) {
    for(let i = 1; i <= gridnumber ; i++) {
        innerHTMLString += '<div class="row"> </div>'
   }
   container.innerHTML = innerHTMLString;
   innerHTMLString = "";
}

gridRow(gridSize);


const row = document.querySelectorAll(".row")
let columnHTMLString = "";



gridColumn(gridSize , row);


const box = document.querySelectorAll(".box");

box.forEach(draw => draw.addEventListener("mousemove" ,  function() {
    draw.style.background = "red";
}))

clear.addEventListener('click' , function() {
    box.forEach(clean => {
        clean.style.background = "white";
    })
})

gridButton.addEventListener("click" , function() {
    let userInput = parseInt(prompt("What size? "));
    removeGrid();
    gridRow(userInput)
    const rowAgain = document.querySelectorAll(".row");
    gridColumn(userInput , rowAgain)
})





function removeGrid() {
    row.forEach(del => {
        container.removeChild(del);
    })
}

function gridColumn(gridnumber , row) {
    row.forEach(element => {
        for(let j=1 ; j<= gridnumber; j++) {
            columnHTMLString += '<div class="box"></div>'
        }
        element.innerHTML = columnHTMLString;
        columnHTMLString = "";
    })  
}

