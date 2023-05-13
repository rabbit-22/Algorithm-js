function solution(M, N) {
  let answer = 0;
  if (M == 1 && N == 1) {
    return 0;
  }
  let width = 0;
  while (M > 1) {
    M = M - 1;
    width++;
  }

  let height = 0;
  while (N > 1) {
    N = N - 1;
    height++;
  }
  answer = (width + 1) * height + width;
  return answer;
}

console.log(solution(2, 2));
