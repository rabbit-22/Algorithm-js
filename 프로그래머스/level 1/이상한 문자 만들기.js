function solution(s) {
  let answer = [];

  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let sum = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) sum += arr[i][j].toUpperCase();
      else sum += arr[i][j].toLowerCase();
    }
    answer.push(sum);
  }
  return answer.join(" ");
}
