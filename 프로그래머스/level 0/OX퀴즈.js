function solution(quiz) {
  // 1. " "을 토큰으로 나누기
  // 2. 정수로 바꿔서 첫번째랑 세번째 변수 두번째 연산자로 계산
  let result = [];
  quiz.forEach((element) => {
    let arr = element.split(" ");
    let sum = 0;
    if (arr[1] === "+") sum = parseInt(arr[0]) + parseInt(arr[2]);
    else sum = parseInt(arr[0]) - parseInt(arr[2]);
    result.push(sum === parseInt(arr[4]) ? "O" : "X");
  });
  return result;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));
