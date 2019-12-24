//sum of even number in fibonacci series
//1, 2, 3, 5, 8, 13, 21, 34, 55 => 44

function fibonacci(num) {
  let fibo = [0, 1];
  let evenFiboSum = 0;
  for (let i = 2; i < num; i++) {
    let sfibo = fibo[i - 2] + fibo[i - 1];
    fibo[i] = sfibo;
    if (sfibo < num && sfibo % 2 === 0) {
      evenFiboSum += sfibo;
    }
  }
  return evenFiboSum;
}

console.log(fibonacci(4000000));
