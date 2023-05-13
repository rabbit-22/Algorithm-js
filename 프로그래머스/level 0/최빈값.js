function solution(array) {
  let hash = new Map();
  let max = -1;
  let value = 0;

  array.forEach((value) => {
    const data = hash.get(value) || 0;
    hash.set(value, data + 1);
  });

  const arr = [...hash]
    .sort((a, b) => b[1] - a[1])
    .map((a) => {
      if (max < a[1]) {
        max = a[1];
        value = a[0];
      } else if (max === a[1]) value = -1;
    });

  return value;
}

console.log(solution([3, 4, 4, 1]));
