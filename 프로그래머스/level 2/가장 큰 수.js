function solution(numbers) {
  // 1. 배열 내용들 스트링으로 변환 후 정렬
  // 2. join()을 통해 합치고 리턴
  let answer = numbers
    .map((v, i) => (numbers[i] = v.toString()))
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
