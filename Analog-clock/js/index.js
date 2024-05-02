let hr = document.getElementById('hour');
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hour_rotation = 30*hh + mm/2;
    let minutes_rotation = 6*mm;
    let second_rotation = 6*ss;
    

    hr.style.transform=  `rotate(${hour_rotation}deg)`;
    min.style.transform=  `rotate(${minutes_rotation}deg)`;
    sec.style.transform=  `rotate(${second_rotation}deg)`;

}
setInterval(displayTime,1000);