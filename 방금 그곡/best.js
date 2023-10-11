function solution(m, musicinfos) {
  m = m.replace(/(C|D|F|G|A)#/g, (_, value) => value.toLowerCase());

  musicinfos = musicinfos
    .map((music) => {
      let [startTime, finishTime, title, melody] = music.split(",");
      let h = finishTime.slice(0, 2) - startTime.slice(0, 2);
      let m = finishTime.slice(3) - startTime.slice(3);
      const time = h * 60 + m;

      melody = melody.replace(/(C|D|F|G|A)#/g, (_, value) => value.toLowerCase());
      return [time, title, melody.cd(time, melody).slice(0, time)];
    })
    .filter(([_, $, melody]) => melody.indexOf(m) >= 0)
    .sort((a, b) => b[0] - a[0]);

  return musicinfos[0]?.[1] || "(None)";
}

solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]);
solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "12:00,12:28,HELLO,CDEFGAB"]);
