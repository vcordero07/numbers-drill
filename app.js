//first numbers drill
function computeArea(width, height) {
  // your code here
  return width * height;
}

computeArea(2,2);
computeArea(3,5);

//second numbers drill
function celsToFahr(celsTemp) {
  // your code here
  var f = celsTemp * 9/5 + 32;
  return f;
}

function fahrToCels(fahrTemp) {
  // your code here
  var c = (fahrTemp - 32) * 5/9;
  return c;
}


//Third numbers drill
function isDivisible(divisee, divisor) {
   // your code here
  var doDiv = divisee / divisor;
  console.log(doDiv);
  console.log(Number.isInteger(doDiv));
  return Number.isInteger(doDiv);
}
isDivisible(18, 3);
isDivisible(15, 4);
