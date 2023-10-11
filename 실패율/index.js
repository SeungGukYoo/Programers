function solution(N, stages) {
  const answer = [];
  let failerRate = [];
  let sortedStages = stages.sort((a, b) => a - b);
  let currentStage = 1;
  while (currentStage <= N) {
    let startUserCount = sortedStages.length;
    sortedStages = sortedStages.filter((userStage) => userStage !== currentStage);
    let goalUserCount = sortedStages.length;
    if (startUserCount === goalUserCount) {
      failerRate.push([0, currentStage]);
    } else {
      let failerPercent = (startUserCount - goalUserCount) / startUserCount;
      failerRate.push([failerPercent, currentStage]);
    }
    currentStage++;
  }

  failerRate = failerRate.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });
  failerRate.forEach((rate) => answer.push(rate[1]));
  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));



