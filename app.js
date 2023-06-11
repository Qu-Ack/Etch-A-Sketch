const container = document.querySelector(".main-container");
let innerHTMLString = '';
for(let i = 1; i <= 16 ; i++) {
     innerHTMLString += '<div class="row"> </div>'
}
container.innerHTML = innerHTMLString;

const row = document.querySelectorAll(".row")
let columnHTMLString = "";

row.forEach(element => {
    for(let j=1 ; j<= 16; j++) {
        columnHTMLString += '<div class="box">hello</div>'
    }
    element.innerHTML = columnHTMLString;
    columnHTMLString = "";
})
