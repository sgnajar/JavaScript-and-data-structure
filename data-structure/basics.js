// return a new array that contains the elements 'warm' and 'sunny' using slice
function forecast(arr) {
  arr = arr.slice(2,4);
  return arr;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// the function is supposed to return a new array made up of num copies of arr
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr = [[...arr], ...newArr];
//    newArr.push([...arr]); works exactly as previous line!
    num--;
  }
  return newArr;
}
console.log(([true, false, true], 2));
