function nextInLine(arr, item) {
  arr.push(item);
  var removedElement = arr.shift(item);
  return removedElement;
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
