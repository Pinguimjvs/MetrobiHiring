//1) Write a javascript function that finds the duplicate items in any given array

function findDuplicates(arr) {
    let duplicates = [];
    let seen = {};
  
    for (let item of arr) {
        if (seen[item]) {
            if (seen[item] === 1) {
                duplicates.push(item);
            }
            seen[item] += 1;
        } else {
            seen[item] = 1;
        }
    }
  
    return duplicates;
  }