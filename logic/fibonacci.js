function fibonacci(num) {
  if (num == 0) {
    console.log(0);
    return;
  }
  let firstNum = 0,
    secondNum = 1;
  let thirdNum = firstNum + secondNum;

  while (thirdNum <= num) {
    firstNum = secondNum;
    secondNum = thirdNum;
    thirdNum = firstNum + secondNum;
  }

  let answer = Math.abs(thirdNum - num) >= Math.abs(secondNum - num) ? secondNum : thirdNum;

  console.log(answer);
}

let test = 19;
fibonacci(test);
