function solution(number) {
  let count = 0;
  while (number.length !== 0) {
    let num = number.shift();
    for (let i = 0; i < number.length; i++) {
      for (let j = i + 1; j < number.length; j++) {
        if (num + number[i] + number[j] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}
