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

// Combine arrays with the spread operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is','fun'];
  return sentence;
}
console.log(spreadOut());

//  the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) === -1){
    return false;
  } else {
    return true;
  }
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  for (var i=0; i < arr.length; i++){
    if(arr[i].indexOf(elem) ===-1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
