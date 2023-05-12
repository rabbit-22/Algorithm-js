function solution(emergency) {
  // 1. emergency copy array 생성 후 내림차순 정렬
  // 2. copyArr와 emergency 빅교해서 copyArr의 인덱스+1 저장

  let copyArr = [...emergency];
  copyArr.sort((a, b) => b - a);
  return emergency.map((x) => copyArr.indexOf(x) + 1);
}
