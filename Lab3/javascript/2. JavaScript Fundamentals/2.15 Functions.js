
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}



function checkAge(age) {
  let result = (age > 18) ? true : confirm('Did parents allow you?');
  return result;
}

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}


function min(a,b) {
  let result = (a < b) ? a : b;
  return result;
}


function pow(x,n) {
  if (n < 1) {
    alert(`Power ${n} is not supported`);
    return;
  }
  let result = x;
  while (n > 1) {
    result *= x;
    n--;
  }
  return result;
}
alert(pow(3, 2));

