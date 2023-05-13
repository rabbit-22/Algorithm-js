function solution(progresses, speeds) {
  let term = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
  for (let i = 1; i < term.length; i++) {
    if (term[i - 1] > term[i]) {
      term[i] = term[i - 1];
    }
  }
  let arr = term.reduce((ac, v) => ({ ...ac, [v]: (ac[v] || 0) + 1 }), {});
  return Object.values(arr);
}
