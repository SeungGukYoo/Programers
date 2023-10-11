function solution(N, stages) {
  const stagesPlayUserCount = {};
  let startUser = stages.length;
  for (let i = 1; i <= N; i++) !stagesPlayUserCount[i] && (stagesPlayUserCount[i] = 0);

  stages.forEach((stage) => {
    if (stagesPlayUserCount[stage] >= 0) {
      stagesPlayUserCount[stage] += 1;
    }
  });
  let failerRates = [];

  for (let currentStage in stagesPlayUserCount) {
    let failerRate = stagesPlayUserCount[currentStage] / startUser;
    failerRates.push([failerRate, parseInt(currentStage)]);
    startUser -= stagesPlayUserCount[currentStage];
  }

  failerRates = failerRates.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return b[0] - a[0];
  });
  const answer = failerRates.map((rates) => rates[1]);
  return answer;
}
