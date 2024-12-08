 const time = document.getElementById('time');
 const time_format = document.getElementById('time-format');

 document.addEventListener('DOMContentLoaded' , ()=>{
    setInterval(showtime , 1000);
 });

 const showtime = ()=>{
    let date = new Date();

    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    hrs = hrs <10 ? `0${hrs}` :hrs;
    mins = mins <10 ? `0${mins}` :mins;
    secs = secs <10 ? `0${secs}` :secs;

    time.innerHTML = `${hrs} : ${mins} : ${secs}`;
    time_format.innerHTML = hrs > 12 ? "PM" : "AM" 
 } 