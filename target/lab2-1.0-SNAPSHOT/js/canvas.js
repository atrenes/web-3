let ctx = canvas.getContext('2d');
const i = canvas.width/10-2;
drawAxis();
drawPointsFromTable();
function drawAxis() {
    let height = canvas.height;
    let width = canvas.width;

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(width / 2 - 2 * i, height / 2 - 3 * i, 4 * i, i * 8);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2, height);
    ctx.lineTo(width / 2, 0);
    ctx.lineTo(width / 2 + 3, 7);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2 - 3, 7);
    drawDigitsX(ctx, i, width, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.lineTo(width - 7, height / 2 + 3);
    ctx.moveTo(width, height / 2);
    ctx.lineTo(width - 7, height / 2 - 3);
    drawDigitsY(ctx, i, width, height);
    ctx.stroke();
}


function drawDigitsX(ctx, i, width, height) {
    let t = width / 2;
    for (let j = 0; j < 5; j++) {
        t += i;
        ctx.moveTo(t, height / 2 + 3);
        ctx.lineTo(t, height / 2 - 3)
    }
    t = width / 2;
    for (let j = 0; j < 5; j++) {
        t -= i;
        ctx.moveTo(t, height / 2 + 3);
        ctx.lineTo(t, height / 2 - 3)
    }
}

function drawDigitsY(ctx, i, width, height) {
    let t = height / 2;
    for (let j = 0; j < 5; j++) {
        t += i;
        ctx.moveTo(width / 2 + 3, t);
        ctx.lineTo(width / 2 - 3, t);
    }
    t = height / 2;
    for (let j = 0; j < 5; j++) {
        t -= i;
        ctx.moveTo(width / 2 + 3, t);
        ctx.lineTo(width / 2 - 3, t);
    }
}

function drawArea(r) {
    let height = canvas.height;
    let width = canvas.width;
    ctx.strokeStyle = "rgba(94, 174, 204, 0.5)";
    ctx.fillStyle = "rgba(94, 174, 204, 0.5)";
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2);
    ctx.arc(width / 2, height / 2, r * i / 2, 3 * Math.PI / 2, 0, false);
    ctx.lineTo(width / 2, height / 2 + r * i / 2);
    ctx.lineTo(width / 2 - r * i, height / 2 + r * i / 2);
    ctx.lineTo(width / 2 - r * i, height / 2);
    ctx.fill();
}

function drawPoint(x, y, hit) {
    ctx.fillStyle = (hit === "true" ? "#000000" : "#ff0000");
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + x * i, canvas.height / 2 - y * i, 2, 0, Math.PI * 2, true);
    ctx.fill();
}

function drawPointsFromTable() {
    let xData = window.document.getElementsByClassName("xdata");
    let yData = window.document.getElementsByClassName("ydata");
    let resultData = window.document.getElementsByClassName("resultdata");

    for (let i = 0 ; i < xData.length ; i++) {
        let x = parseFloat(xData[i].innerHTML);
        let y = parseFloat(yData[i].innerHTML);
        console.log(resultData[i].innerHTML);
        drawPoint(x, y, resultData[i].innerHTML);
    }
}