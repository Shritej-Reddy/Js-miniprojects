function executeClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var AMPM = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;

    var time = h + ":" + m + ":" + s + " " + AMPM;

    var clock = document.getElementById("clockDisplay");
    clock.innerHTML = time;
    clock.textContent = time;
    setTimeout(executeClock, 1000);
}

executeClock();