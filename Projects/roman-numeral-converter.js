// Convert the given number into a roman numeral.

function convertToRoman(num) {
 var romanNum = { //romanNum is based on https://www.mathsisfun.com/roman-numerals.html -- create key-value pairs
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1
 };

 var roman = "";

 for (var key in romanNum){
   while (num >= romanNum[key]) {
     roman += key;
     num -= romanNum[key];
   }
 }
 //console.log(roman);
 return roman; // return roman number
}

convertToRoman(57); //conver 57 to romanNum
