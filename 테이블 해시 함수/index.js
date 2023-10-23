function solution(data, col, row_begin, row_end) {
  const hashArray = [];
  let answer = 0;
  let sortedData = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    }
    return a[col - 1] - b[col - 1];
  });
  for (let i = row_begin; i <= row_end; i++) {
    let calcData = sortedData[i - 1].reduce((acc, cur) => {
      acc += parseInt(cur % i);
      return acc;
    }, 0);
    answer = answer ^ calcData;
  }

  return answer;
}

solution(
  [
    [2, 2, 6],
    [1, 5, 10],
    [4, 2, 9],
    [3, 8, 3],
  ],
  2,
  2,
  3
);
