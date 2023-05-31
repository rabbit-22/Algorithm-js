function solution(array, commands) {
  let answer = [];
  for (let command of commands) {
    let new_arr = array.slice(command[0] - 1, command[1]);
    new_arr.sort((a, b) => a - b);
    answer.push(new_arr[command[2] - 1]);
  }
  return answer;
}
