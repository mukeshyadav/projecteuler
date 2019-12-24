/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/
function sumOfNumbers(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
//1,2,3,4,5,6,7,8,9
//3,6,9,12,15,18,21,24,27,30
//5,10,15,20,25,30
function sumOfNumberss(num, sum = 0, count = 1) {
  if (num < count) {
    return sum;
  }
  if (count < num && (count % 3 === 0 || count % 5 === 0)) {
    sum += count;
  }

  return sumOfNumberss(num, sum, ++count);
}
console.time("ForLoop");
console.log(sumOfNumbers(5003));
console.timeEnd("ForLoop");

console.time("Recursive");
console.log(sumOfNumberss(5003));
console.timeEnd("Recursive");
