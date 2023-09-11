// function solution(park, routes) {
//     const maxRow = park.length - 1;
//     const maxCol = park[0].length - 1;
  
//     let row = park.findIndex((s) => s.includes("S"));
//     let col = park[row].indexOf("S");
  
//     routes.forEach((position) => {
//       const [d, n] = position.split(" ");
  
//       let tempRow = row;
//       let tempCol = col;
//       let flag = true;
  
//       for (let i = 0; i < Number(n); i++) {
  
//         if (d === "E") tempCol++;
//         else if (d === "W") tempCol--;
//         else if (d === "S") tempRow++;
//         else if (d === "N") tempRow--;
  
//         if (
//           tempRow > maxRow ||
//           tempRow < 0 ||
//           tempCol > maxCol ||
//           tempCol < 0 ||
//           park[tempRow][tempCol] === "X"
//         ) {
//           flag = false;
//           break;
//         }
//       }
  
//       if (flag) {
//         col = tempCol;
//         row = tempRow;
//       }
//     });
  
//     return [row, col];
//   }

function solution(park, routes) {
        const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
        let [x, y] = [0, 0];
        for (let i = 0; i < park.length; i++) {
          if (park[i].includes('S')) {
            [x, y] = [i, park[i].indexOf('S')];
            break;
          }
        }

        routes.forEach((route) => {
          const [r, n] = route.split(' ');
          let [nx, ny] = [x, y];
          let cnt = 0;
          while (cnt < n) {
            [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
            if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;
            cnt++;
          }
          if (cnt == n) [x, y] = [nx, ny];
        });
        return [x, y];
      }