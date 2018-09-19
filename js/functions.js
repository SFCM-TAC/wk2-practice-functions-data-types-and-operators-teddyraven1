
function sayHello() {
document.write('Hello');
  // TODO: return a greeting string that greets
  // the person by name, e.g. "Hello, Emily!"
}
function myName() {
  document.write(' Teddy!');
}

function sayHelloEverybody(threeNames) {
  var threeNames = [' Teddy',' Emily',' and Santa Claus!'];
  document.write(threeNames)


  // TODO: return a greeting string that greets
  // all three people in the threeNames array
  // e.g. "Hello, Emily, MaryClare, and Taurin!"
  // NOTE: inputs should be an array with exactly three items
}

function getClasses(classes) {
  var classes = ['Music Business',' Private lessons with Clint',
'Tools, techniques, and analysis',' Intro to Computer Science',' Logic class',
' Intro to Recording',' Sound Design',' and the Sony Project']
  document.write(classes)
  // TODO: return an array with a list of strings
  // naming the classes you are taking this semester
}

function labelOrder(fiveNumbers) {
  var fiveNumbers = [1,2,3,4,5];
var newArray = ['','','','',''];

newArray[0] = ' first:' + fiveNumbers[0];
newArray[1] = ' second:' + fiveNumbers[1];
newArray[2] = ' third:' + fiveNumbers[2];
newArray[3] = ' fourth:' + fiveNumbers[3];
newArray[4] = ' fifth:' + fiveNumbers[4];


return(newArray);


  // TODO: Given an array with five numbers, return a new array
  // of strings that have labels for the ordering.
  // e.g. if fiveNumbers is [1,2,3,4,5] your function should return:
  // ["first: 1", "second: 2", "third: 3", "fourth: 4", "fifth: 5"]
  // NOTE: inputs should be an array with exactly five items
}

function calculateVolume(w, l, h) {
  // TODO: given a room's width, length, and height
  // write a function that returns the volume
var volume = w * l * h;
return volume;




}

function isOdd(n) {
return n % 2 == 1;

//
//var Odd = n % 2 == 1;
//Odd = Boolean(1)
//var Even = n % 2 == 0;
//Even = Boolean(0)
//return n;//
  // TODO: given a number, return true if it is odd, false if it is even
  // HINT: the expression "Boolean(0)" is false, "Boolean(1)"" is true
  // DOUBLE HINT: Try using the modulus operator (%)
}

// ** CART PRICES ** //

const saleAmount = .25 // 25% off!
function getSalePrice(originalPrice) {
//var salePrice = number * saleAmount;

return originalPrice - (saleAmount * originalPrice);

//  var price = number;
//  var salePrice = price * saleAmount;
//return(salePrice);


  // TODO: given a dollar price (e.g. 5.99), return
  // a price with the saleAmount discount applied
  // e.g. if originalPrice is 4.00, your function should return 3.00.
  // (Don't worry about rounding to the correct number of decimal places)
}

function getSalePrices(threeOriginalPrices) {

var newArray = ['','',''];

newArray[0] = getSalePrice(3);
newArray[1] = getSalePrice(4);
newArray[2] = getSalePrice(5);

return(newArray);


  // TODO: given an array of prices for three items in a cart,
  // return a new array with the saleAmount discount applied to each.
  // TIP: see if you can reuse the getSalePrice function that you just wrote!
  // NOTE: inputs should be an array with exactly three items
}

 // ** COUNTING ** //

var counter = 4;
function incrementCounter() {
  var newNumber = counter + 1;
  return(newNumber);
  // TODO: implement a function that increments (adds 1) to the counter variable
  // and then calls showCounter to update the interface with the new value.
  // Test your code by opening the developer console and calling incrementCounter.
  // The displayed answer for this question should increase by 1!
}
function showCounter() {
  // updates the counter element with the latest value
  document.getElementById('counter').textContent = counter;
}
