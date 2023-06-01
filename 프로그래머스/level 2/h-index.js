function solution(citations) {
  let max = Math.max.apply(null, citations);
  for (let h = max; h >= 0; h--) {
    let n_1 = citations.filter((x) => x >= h);
    if (n_1.length >= h) return h;
  }
}
