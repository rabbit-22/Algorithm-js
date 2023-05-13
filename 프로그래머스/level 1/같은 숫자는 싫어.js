function solution(arr) {
  let result = [];
  result.push(arr.shift());
  for (let value of arr) {
    if (result[result.length - 1] !== value) {
      result.push(value);
    }
  }
  return result;
}
