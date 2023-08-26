function solution(arr){
  let totalSum = arr.reduce((acc, cur) => acc + cur, 0);
  let arrLength = arr.length;    
  
  return totalSum / arrLength;
}