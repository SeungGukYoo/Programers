function solution(storey) {
  if (storey < 5) return storey;
  const lastStorey = storey % 10;
  const caclStorey = (storey - lastStorey) / 10;

  return Math.min(lastStorey + solution(caclStorey), 10 - lastStorey + solution(caclStorey + 1));
}

console.log(solution(545));
