function makeClass() {
  "use strict";
  class Thermostat {
    constructor(thermos){
      this._thermos = thermos;
    }
    // getter
    get temperature(){
      return this._thermos;
    }
    // setter
    set temperature(UpdatedTemp){
      this._thermos = UpdatedTemp;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
