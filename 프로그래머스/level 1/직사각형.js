function solution(sizes) {
  let width = [];
  let height = [];
  for (let size of sizes) {
    if (size[0] > size[1]) {
      width.push(size[0]);
      height.push(size[1]);
    } else {
      width.push(size[1]);
      height.push(size[0]);
    }
  }
  return Math.max(...width) * Math.max(...height);
}
