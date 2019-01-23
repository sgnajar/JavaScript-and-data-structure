// generate and return a random whole number between 0 and 9
var randomWholeNum = Math.floor(Math.random() * 10)

function randomWholeNum() {
  return Math.floor(Math.random() * 10)
}

// generate a random number that falls within a range of two specific number
function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin

}
// Change these values to test your function
var myRandom = randomRange(5, 15);
