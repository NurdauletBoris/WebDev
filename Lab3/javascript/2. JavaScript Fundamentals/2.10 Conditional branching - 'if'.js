
if ("0") { 
  alert( 'Hello' );
} 


if (prompt("What's the 'official' name of JavaScript?", '') == 'ECMAScript') {
  alert("Right!")
} else {
  alert("You don't know? 'ECMAScript!")
}


let number = prompt("Type in a number: ", 0);
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}


let result = (a + b < 4) ? 'Below' : 'Over';



let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :
              '';

