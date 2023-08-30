// function solution(keymap, targets) {
//     let answer = [];
//     let map = new Map();

//     for(let key of keymap){
//         for(let i=0; i<key.length; i++){
//             if(!map.has(key[i]) || i+1 < map.get(key[i])) map.set(key[i], i+1);
//         }
//     }

//     for (const target of targets) {
//         let count = 0;
//         for (let i = 0; i < target.length; i++) {
//           count += map.get(target[i]);
//         }
//         answer.push(count || -1);
//       }
//     return answer;
// }

function solution(keymap, targets) {
    const answer = [];
    const map = new Map();

    keymap.forEach((keys) => {
        const targetArr = [...keys];
        targetArr.forEach((key, idx) => {
            if(!map.has(key) || idx + 1 < map.get(key)){
                map.set(key, idx + 1);
            }
        })
    })

    targets.forEach((target) => {
        const targetArr = [...target];
        let count = 0;

        targetArr.forEach((targetKey) => {
            count += map.get(targetKey)
        })

        answer.push(count || -1);
    })

    return answer;
}