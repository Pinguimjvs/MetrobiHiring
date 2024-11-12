// 5) A building has 100 floors. One of the floors is the highest floor an egg can be dropped
// from without breaking. If an egg is dropped from above that floor, it will break. If it is
// dropped from that floor or below, it will be completely undamaged and you can drop the
// egg again. Given two eggs, find the highest floor an egg can be dropped from without
// breaking, with as few drops as possible in the worst-case scenario.

export function findHighestSafeFloor(totalFloors) {
    let interval = 1;
    let currentFloor = interval;
    let drops = 0;
  
    while ((interval * (interval + 1)) / 2 < totalFloors) {
      interval++;
    }
  
    while (currentFloor <= totalFloors) {
      drops++;
      if (eggBreaks(currentFloor)) {
        break;
      }
      interval--;
      currentFloor += interval;
    }
  
    let startFloor = currentFloor - interval + 1;
    for (let i = startFloor; i < currentFloor; i++) {
      drops++;
      if (eggBreaks(i)) {
        return { highestSafeFloor: i - 1, drops };
      }
    }
  
    return { highestSafeFloor: currentFloor - 1, drops };
  }
  
  function eggBreaks(floor) {
    const highestSafeFloor = 100; 
    return floor > highestSafeFloor;
  }
