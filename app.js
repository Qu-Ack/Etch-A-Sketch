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




drawBackground(box);
clearBackground(box);

gridButton.addEventListener('click' , function() {
    reGrid();
});



function drawBackground(thing){
thing.forEach(draw => draw.addEventListener("mousemove" ,  function() {
    draw.style.background = "red";
}))
}

function clearBackground(anotherthing) {
clear.addEventListener('click' , function() {
    anotherthing.forEach(clean => {
        clean.style.background = "white";
    })
})
}



function removeGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
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


function reGrid() {
        let userInput = parseInt(prompt("What size? "));
        removeGrid();
        gridRow(userInput)
        const rowAgain = document.querySelectorAll(".row");
        gridColumn(userInput , rowAgain);
        const boxAgain = document.querySelectorAll(".box");
        drawBackground(boxAgain);
        clearBackground(boxAgain);
        
    }
    