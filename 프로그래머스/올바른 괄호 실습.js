function solution(s) {
  // 1. 반복문 돌리면서 (는 스택에 집어넣기
  // 2. )가 나오면 스택에서 하나 꺼내기
  // 3. 스택이 비면 true 리턴

  let arr = Array.from(s);
  let stack = [];

  for (let char of s) {
    // for문은 solution을 리턴시키지만, forEach는 파라미터 함수만 종료시킴
    if (char === ")" && stack.length === 0) {
      return false;
    } else {
      if (char === "(") stack.push(char);
      else stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(solution("()())"));
