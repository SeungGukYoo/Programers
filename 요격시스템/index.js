function solution(targets) {
  let sortedTargets = targets.sort((a, b) => a[1] - b[1]);
  let count = 0;

  let prev = -1;
  for (let i = 0; i < sortedTargets.length; i++) {
    let [startTarget, endTarget] = sortedTargets[i];

    if (prev <= startTarget) {
      prev = endTarget;
      count++;
    }
  }
  return count;
}

solution([
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
]);
