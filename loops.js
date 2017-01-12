var whileLoop = function(num){
  while (num>0){
  console.log(num--);
}
console.log("done");
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(arr){
 do{
   delete arr[0];
 } while (array.length > 0 && maybeTrue());
 return arr;
}
