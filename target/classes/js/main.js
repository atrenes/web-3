let canvas = document.getElementById("myCanvas");
let rField = document.getElementsByClassName("select_r")[0];
canvas.addEventListener("click", canvasClick);

let dropdown = document.getElementById("mainForm:select_r");
let r = dropdown.value;
let hiddenX = document.getElementsByClassName('hidden_x')[0];
let hiddenY = document.getElementsByClassName('hidden_y')[0];
let hiddenR = document.getElementsByClassName('hidden_r')[0];

let submitButton = document.getElementsByClassName('hidden-submit-button')[0];

function pressR() {
    console.log(dropdown.value);
    let r = dropdown.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawAxis();
    drawArea(r);
    drawPointsFromTable(r);
}

function canvasClick(event) {
    if (parseFloat(r) === 1 || parseFloat(r) === 2 || parseFloat(r) === 3 || parseFloat(r) === 4 || parseFloat(r) === 5) {
        let obj = event.target;
        let x1 = Math.round(Number(((event.pageX - window.pageXOffset - obj.getBoundingClientRect().x - obj.width/2)/i).toFixed(2))*2)/2;
        let y1 = Number((-(event.pageY - window.pageYOffset - obj.getBoundingClientRect().y - obj.height/2)/i).toFixed(4));
        console.log(x1, y1);
        if (y1 >= -3 && y1 <= 3 && x1 >= -2 && x1 <= 1.5) {
            hiddenX.value = x1;
            hiddenY.value = y1;
            hiddenR.value = r;
            submitButton.click();
        }
    }
}