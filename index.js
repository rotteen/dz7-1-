var a;
let number1 = false;
while (!number1) {
  a = parseFloat(prompt('Enter A'));
  number1 = !isNaN(a);
  if (!number1) {
    alert('Please enter correct number');
  }
}
var b;
let number2 = false;
while (!number2) {
  b = parseFloat(prompt('Enter B'));
  number2 = !isNaN(b);
  if (!number2) {
    alert('Please enter correct number');
  }
 }
var c;
let number3 = false;
while (!number3) {
  c = parseFloat(prompt('Enter C'));
  number3 = !isNaN(c);
  if (!number3) {
    alert('Please enter correct number');
  }
 }
function solveDiscr(a, b, c) {
    return b*b - 4*a*c;
}
function solveQuest(a, b, c){
 var discr = solveDiscr(a, b, c);
 if (discr < 0) {
    return 'No roots';
 }
 if (discr == 0) {
    var x1 = (-b)/2*a;
    return 'The result is: x = ' + x1;
 }
 if (discr > 0) {
    var d = Math.sqrt(solveDiscr(a, b, c));
    var x2 = ((-b) + d)/2*a;
    var x3 = ((-b) - d)/2*a;
    return 'The result is: x1 = ' + x2 + ', x2= ' + x3;
 }
}
var result = solveQuest(a, b, c);
document.write(result);