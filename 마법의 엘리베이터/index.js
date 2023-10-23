function solution(storey) {
  const answer = [0, 0];
  let overFive = storey;
  let belowFive = storey;
  while (overFive || belowFive) {
    let overNumber = overFive % 10;
    let belowNumber = belowFive % 10;

    overFive = parseInt(overFive / 10);
    belowFive = parseInt(belowFive / 10);

    if (overNumber >= 5) {
      overFive += 1;
      answer[1] += 10 - overNumber;
    } else {
      answer[1] += overNumber;
    }

    if (belowNumber > 5) {
      belowFive += 1;
      answer[0] += 10 - belowNumber;
    } else {
      answer[0] += belowNumber;
    }
  }
  return Math.min(...answer);
}

// solution(2554);
// solution(16);
solution(545);
// solution(565);
