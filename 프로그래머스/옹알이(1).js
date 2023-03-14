function solution(babbling) {
  let answer = 0;
  array = ["aya", "ye", "woo", "ma"];
  for (let word of babbling) {
    for (let j of array) {
      if (word.includes(j)) {
        word = word.replace(j, " ");
      }
    }
    if (word.replaceAll(" ", "") === "") answer++;
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
