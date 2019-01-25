const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const {tomorrow : tempOfTomorrow} = avgTemperatures;
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// ES6: Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
/*const { tomorrow: {max: maxOfTomorrow}} = LOCAL_FORECAST;
console.log(maxOfTomorrow);
*/
function getMaxOfTmrw(forecast) {
  "use strict";
  const {tomorrow: {max: maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

// ES6: Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
(() => {
  "use strict";
  [a, b] = [b, a]
})();
console.log(a); // should be 6
console.log(b); // should be 8
