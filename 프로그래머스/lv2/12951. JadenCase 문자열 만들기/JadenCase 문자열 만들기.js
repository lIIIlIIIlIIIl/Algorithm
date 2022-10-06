function solution(s) {
  return s.split(' ').map(el => {
    if (el === '') return el;
    return el[0].toUpperCase() + el.slice(1).toLowerCase();
  }).join(' ');
}