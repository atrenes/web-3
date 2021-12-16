let submitButton = document.getElementById("submit");
let canvas = document.getElementById("myCanvas");
let rField = document.getElementById("select_r");

submitButton.addEventListener("click", submitter);
canvas.addEventListener("click", canvasClick);
rField.addEventListener("keyup", rListen);

let x = document.getElementById("select_x");
let y = document.getElementById("select_y");
let r = document.getElementById("select_r");

function canvasClick(event) {
    if (!isNaN(r.value) && r.value !== "" && parseFloat(r.value) > 2 && parseFloat(r.value) < 5) {
        let obj = event.target;
        let x1 = Math.round(Number(((event.pageX - window.pageXOffset - obj.getBoundingClientRect().x - obj.width/2)/i).toFixed(2))*2)/2;
        let y1 = Number((-(event.pageY - window.pageYOffset - obj.getBoundingClientRect().y - obj.height/2)/i).toFixed(4));
        console.log(x1, y1);
        if (y1 > -5 && y1 < 3 && x1 >= -2 && x1 <= 2) {
            ajax(x1, y1, r.value);
        }
    } else alert("R is unset")
}

function rListen() {
    if (isNaN(r.value) || r.value === "" || parseFloat(r.value) <= 2 || parseFloat(r.value) >= 5) {
        if (r.value !== "") {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let pic = new Image();
            pic.src = 'https://i.pinimg.com/originals/34/6c/64/346c64e5fa5334bf1d69d515f30be5f7.png';
            pic.onload = function () {
                ctx.drawImage(pic, 0, 150, 500, 200);
            }
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAxis();
            drawPointsFromTable();
        }
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawAxis();
        drawArea(r.value);
        drawPointsFromTable();
    }
}

function validateXYR() {

    let xOk = false;
    let yOk = false;
    let rOk = false;

    if (isNaN(x.value) || x.value === "") {
        event.preventDefault();
        alert("X is not set");
        return false;
    } else {
        xOk = true;
    }

    if (isNaN(y.value) || y.value === "") {
        event.preventDefault();
        alert("Type a float number");
        return false;
    } else if (parseFloat(y.value) <= -5 || parseFloat(y.value) >= 3) {
        event.preventDefault();
        alert("Type a number inside of (-5; 3)");
        return false;
    } else {
        yOk = true;
    }

    if (isNaN(r.value) || r.value === "") {
        event.preventDefault();
        alert("Type a float number");
        return false;
    } else if (parseFloat(r.value) <= 2 || parseFloat(r.value) >= 5) {
        event.preventDefault();
        alert("Type a number inside of (2; 5)");
        return false;
    } else {
        rOk = true;
    }
    //console.log(xOk, yOk, rOk);
    return xOk && yOk && rOk;
}

function submitter(event) {
    //console.log(x.value, y.value, r.value, validateXYR());
    if (validateXYR()) {
        ajax(x.value, y.value, r.value);
    }
    event.preventDefault();
}