function solution(n, m, section) {
  let answer = 0;
  let part = 0;
  section.forEach((s) => {
    if (s > part) {
      answer++;
      part = s + m - 1;
    }
  });
  return answer;
}