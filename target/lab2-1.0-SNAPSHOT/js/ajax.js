function ajax(x, y, r) {
    let req = new XMLHttpRequest();
    let params = "x=" + x + "&y=" + y + "&r=" + r + "&type=ajax";
    req.open("POST", "ControllerServlet", true);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    req.onload = ()=> updatePage(req.responseText)
    console.log(req.responseText);
    req.send(params);
}

function updatePage(res) {
    let point = JSON.parse(res);
    drawPoint(point.x, point.y, point.result);
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${point.x}</td><td class="ydata">${point.y}</td><td class="rdata">${point.r}</td><td class="resultdata">${point.result}</td><td>${point.runtime} ns</td><td>${point.timestamp}</td>`;
    document.getElementById("headers").after(newRow);
    //console.log(point);
}