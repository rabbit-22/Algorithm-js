function solution(priorities, location) {
  let index = Array.from({ length: priorities.length }, (_, i) => i); // 인덱스
  console.log(index, priorities);
  let count = 0; // 출력 횟수
  while (priorities.length) {
    // 대기목록이 비어있을 때까지 반복
    let max = Math.max.apply(null, priorities);
    const priority = priorities.shift(); // 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
    const idx = index.shift();
    if (priority < max) {
      // 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
      priorities.push(priority);
      index.push(idx);
    } else {
      // 3. 그렇지 않으면 J를 인쇄합니다.
      count++; // 인쇄 횟수 추가
      if (location === idx) return count; // location과 index가 같다면 반환 (몇번째로 인쇄되었는지)
    }
  }
}

solution([2, 1, 3, 2], 2);
