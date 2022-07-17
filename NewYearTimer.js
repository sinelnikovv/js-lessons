let currentDay,
    nextYear ,
    newYearDate ,
    delta = newYearDate - currentDay,
    days,
    minutes,
    seconds;


function func2() {
  currentDay = new Date();
  nextYear = currentDay.getFullYear() + 1;
  newYearDate = new Date(`${nextYear}-01-01T00:00:00`);
  delta = newYearDate - currentDay;
  days = Math.floor(delta / 1000 / 60 / 60 / 24), hours = Math.floor((delta - (days * 1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  minutes = Math.floor((delta - (days * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000)) / 1000 / 60);
    seconds = Math.round((delta - (days * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000) - (minutes * 60 * 1000) ) / 1000);



  day = document.getElementById("day");

  if (days < 10) 
    day.innerHTML = "0" + days;
  else
    day.innerHTML = days;
  

   hour = document.getElementById("hour");

  if (hours < 10) 
    hour.innerHTML = "0" + hours;
  else
    hour.innerHTML = hours;  

  minute = document.getElementById("minute");

  if (minutes < 10) 
    minute.innerHTML = "0" + minutes;
  else
    minute.innerHTML = minutes;  

  second = document.getElementById("second");

  if (seconds < 10) 
    second.innerHTML = "0" + seconds;
  else
     second.innerHTML = seconds;
   
  
}

  setInterval(func2, 1000);

