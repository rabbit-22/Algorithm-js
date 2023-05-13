function solution(absolutes, signs) {
  let temp = 0;
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) temp = absolutes[i];
    else temp = absolutes[i] * -1;
    sum += temp;
  }
  return sum;
}
