function solution(seoul) {
  let result = "";
  seoul.forEach((element, index) => {
    if (element === "Kim") {
      result = index.toString();
    }
  });
  return "김서방은 " + result + "에 있다";
}

console.log(solution(["Jane", "Kim"]));
