function sayError() {
  alert("Some error ocurred");
}

function showError(x) {    
  alert(x + " occured!");
}

function createHeaders(N) {
  for (i = 1; i <= N; i++){
    document.write("<h2>Header" + i
      + "</h2>");
  }
}

function checkPassword(x) {
  if (x === "Step" || x === "Web" || x === "JavaScript") {
    return true;
  } else {
    return false;
  }
}

function sign(x) {
  if (x > 0) {
    return 1;
  } else if (x < 0){
    return -1;
  } else if (x == 0){
    return 0;
  } else {
    return NaN;
  }
}

function dayOfWeek(n){
  switch (n) {

    case "Sunday":
      return 0;
      break;
    
    case "Monday":
      return 1;
      break;
    
    case "Tuesday":
      return 2;
      break;
    
    case "Wednesday":
      return 3;
      break;
    
    case "Thursday":
      return 4;
      break;
    
    case "Friday":
      return 5;
      break;
    
    case "Satudray":
      return 6;
      break;
  }
}