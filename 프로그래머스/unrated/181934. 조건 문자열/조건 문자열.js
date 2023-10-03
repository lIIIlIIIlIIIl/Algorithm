// function solution(ineq, eq, n, m) {
//     if(ineq === "<" && eq === "="){
//         return n <= m ? 1 : 0;
//     }
//     if(ineq === "<" && eq === "!"){
//         return n < m ? 1 : 0;
        
//     }
//     if(ineq === ">" && eq === "="){
//         return n >= m ? 1 : 0;
        
//     }
//     if(ineq === ">" && eq === "!"){
//         return n > m ? 1 : 0;
        
//     }
// }

const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}