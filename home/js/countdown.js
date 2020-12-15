const countDownDate = new Date("Aug 28, 2021 00:00").getTime();
const x = setInterval(function () {
    const distance = countDownDate - new Date().getTime();
    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));;
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));;
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);;
if (distance < 0) { clearInterval(x); document.getElementById("clock").innerHTML = "EXPIRED"; }
}, 1000);