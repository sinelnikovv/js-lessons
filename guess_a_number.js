let randomNumber;
let counter=document.getElementById("count");
let inp = document.getElementById("nam");
let submitbtn = document.getElementById("submitbtn");
let i;
let userNumber = document.getElementById("nam").value;
name.disabled = true;
submitbtn.disabled = true;



function startGame() {
  let counter = document.getElementById("count");
  i =3;
  counter.innerHTML = i;

  randomNumber = Math.floor(Math.random() * 10);
  name.disabled = false;
  submitbtn.disabled = false;
}

function submitNumber() {
  let userNumber = document.getElementById("nam").value;  

  do {
      name.disabled = false;
      submitbtn.disabled = false;

    if (userNumber == randomNumber) {
      alert("Вы угадали!");
      name.disabled = true;
      submitbtn.disabled = true;
      counter.innerHTML = "";      
      startGame();
      break;
     
    } else if (userNumber > randomNumber) {
      i--;
      result.innerHTML = "Загаданное число меньше";
      counter.innerHTML = i;      
      break;
    } else   {
      i--;
      result.innerHTML = "Загаданное число больше";      
      counter.innerHTML = i;      
      break;
    }
  } while (i > 0);
  if (i == 0) { 
    alert("Вы проиграли!");
    name.disabled = true;
    submitbtn.disabled = false;
    counter.innerHTML = "";
    startGame();
  }
  document.getElementById("nam").value = "";
  }