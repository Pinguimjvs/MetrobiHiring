// 7) Think that you have an unlimited number of carrots, but a limited number of carrot
// types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
// weight and a price. Write a function that takes carrotTypes and capacity and return the
// maximum value the bag can hold. 

function calculateMaxValue(carrots, maxCapacity) {
    carrots.sort(function(a, b) {
      return (b.price / b.kg) - (a.price / a.kg);
    });
  
    let totalValue = 0;
    let i = 0;
  
    while (i < carrots.length && maxCapacity > 0) {
      let currentCarrot = carrots[i];
      let amountToTake = Math.min(currentCarrot.kg, maxCapacity);
  
      totalValue += (currentCarrot.price / currentCarrot.kg) * amountToTake;
  
      maxCapacity -= amountToTake;
      i++;
    }
  
    return totalValue;
  }
