/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(x) {
  let h = parseInt(x.split(':')[0]);
  let m = parseInt(x.split(':')[1]);
  var msg;
  if (h < 12 && h > 0){msg = "Good Morning"}
  if ( h >= 12 && h <17 ){msg =  "Good Afternoon"}
  if (h >= 17 ){ msg = "Good Evening"}
  return msg;
}
/* Write your implementation of displayMessage() */
function displayMessage(str) { document.getElementById("greeting").textContent = str;}
