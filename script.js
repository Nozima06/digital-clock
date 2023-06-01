//Get time
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let period = document.querySelector(".period");

function showTime () {
    var timeNow = new Date();

    let hr = timeNow.getHours();
    let min = timeNow.getMinutes();
    let sec = timeNow.getSeconds();
    let per = "AM";
    
    if (hr > 12) {
        per = "PM";
        hr -= 12;
    }

    hr = hr < 10 ? "0" + hr: hr;
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec: sec;
    
    hour.innerHTML = hr;
    minute.innerHTML = min;
    second.innerHTML = sec;
    period.innerHTML = per;
}

setInterval(function() {
    showTime();
}, 1000);

showTime();