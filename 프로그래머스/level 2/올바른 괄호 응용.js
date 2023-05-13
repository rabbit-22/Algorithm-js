function solution(s) {
  const brackets = new Map([
    ["[", "]"],
    ["{", "}"],
    ["(", ")"],
  ]);
  let stack = [];

  for (let char in s) {
    if (Object.keys(brackets).includes(char)) {
      stack.push(char);
    } else if (Object.values(brackets).includes(char)) {
      let tmp = stack[-1];
      if (stack.length !== 0 && char === brackets[tmp]) {
        stack.pop();
      } else {
        return false;
      }
    }
    if (stack.length === 0) return true;
    else return false;
  }
}
