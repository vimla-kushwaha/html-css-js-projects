let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hour_rotation = 30*h + m/2;
    let minutes_rotation = 6*m;
    let second_rotation = 6*s;
    

    hr.style.transform=  `rotate(${hour_rotation}deg)`;
    m.style.transform=  `rotate(${minutes_rotation}deg)`;
    s.style.transform=  `rotate(${second_rotation}deg)`;

}
setInterval(displayTime,1000);