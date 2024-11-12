// 2) Write an async javascript function that writes every item in any given array with 1, 2, 4, 8,
// etc., seconds apart.

async function printWithDelay(arr) {
    let delay = 1000;
  
    for (let item of arr) {
      await new Promise(resolve => setTimeout(resolve, delay));
      console.log(item);
      delay *= 2;
    }
}
