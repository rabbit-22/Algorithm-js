function solution(nums) {
  const set = new Set(nums);
  const countSpecies = set.size;
  const mine = nums.length / 2;

  if (mine >= countSpecies) return countSpecies;
  else return mine;
}
