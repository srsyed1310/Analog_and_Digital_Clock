let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')


setInterval(() => {
    let day = new Date();

    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hours.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;





// Digital Clock


let hr = document.getElementById('hour')
let mnt = document.getElementById('mint')
let sc = document.getElementById('second')
let ampm = document.getElementById('ampm')

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let am = h >= 12 ? "PM" : "AM";

if(h > 12){
    h = h - 12;
}


h =  (h < 10) ? "0" + h : h
m =  (m < 10) ? "0" + m : m
s =  (s < 10) ? "0" + s : s


hr.innerHTML = h;
mnt.innerHTML = m;
sc.innerHTML = s;
ampm.innerHTML = am;



}, 1000);





