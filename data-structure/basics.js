// return a new array that contains the elements 'warm' and 'sunny' using slice

function forecast(arr) {
  arr = arr.slice(2,4);
  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
