function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let answer = [0, 0, 0];
  answers.map((item, index) => {
    if (one[index % one.length] === item) answer[0]++;
    if (two[index % two.length] === item) answer[1]++;
    if (three[index % three.length] === item) answer[2]++;
  });
  let max = Math.max(...answer);
  let arr = [];
  answer.map((x, i) => {
    if (x === max) arr.push(i + 1);
  });
  return arr;
}
