const INTERVAL = 10000;

function updateClock() {
    let currentTime = new Date();

    let date = currentTime.getDate();
    if (date < 10) {
        date = '0' + date;
    }
    let month = currentTime.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let hours = currentTime.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    let seconds = currentTime.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    let str = date + "." + month + "." + currentTime.getFullYear() + " " + hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = str;
}
updateClock();
setInterval(updateClock, INTERVAL)