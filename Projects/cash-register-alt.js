function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var totalCid = cid.reduce(function(col, next) {
    return col + next[1];
  },0.0);
  if (totalCid < change) {
    return 'INSUFFICIENT_FUNDS';
  } else if (totalCid === change) {
    return 'CLOSED';
  }

  cid = cid.reverse();

  var result = unitOrder.reduce(function(col, next, index) {
    if (change >= next.value) {
      var currentVal = 0.0;
      while (change >= next.value && cid[index][1] >= next.value) {
        currentVal += next.value;
        change -= next.value;
        change = Math.round(change * 100) / 100;
        cid[index][1] -= next.value;
      }
      col.push([next.name, currentVal]);
      return col;
     } else {
       return col;
     }
    


  }, []);
  return result.length > 0 && change === 0 ? result : 'INSUFFICIENT_FUNDS';
  // Here is your change, ma'am.
}

var unitOrder = [
  {name: 'ONE HUNDRED', value: 100},
  {name: 'TWENTY', value: 20},
  {name: 'TEN', value: 10},
  {name: 'FIVE', value: 5},
  {name: 'ONE', value: 1},
  {name: 'QUARTER', value: 0.25},
  {name: 'DIME', value: 0.10},
  {name: 'NICKEL', value: 0.05},
  {name: 'PENNY', value: 0.01}
]

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
