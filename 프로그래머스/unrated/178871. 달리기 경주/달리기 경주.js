function solution(players, callings) {
    const hash = new Map();

    players.forEach((player, idx) => {
        hash.set(player, idx);
    });
    
    callings.forEach((name) => {
        const callNameIdx = hash.get(name);
        const frontPlayer = players[callNameIdx-1];

        [players[callNameIdx], players[callNameIdx-1]] = [players[callNameIdx-1], players[callNameIdx]];

        hash.set(name, hash.get(name) - 1);
        hash.set(frontPlayer, hash.get(name) + 1);
    });
    return players;
}

// function solution(players, callings){
//     const playersArr = [...players];

//     callings.forEach((callingPlayer)=>{
//         const callingPlayerIndex = playersArr.indexOf(callingPlayer);
//         const prevPlayer = playersArr[callingPlayerIndex - 1]; 

//         playersArr[callingPlayerIndex] = prevPlayer;
//         playersArr[callingPlayerIndex - 1] = callingPlayer;
//     })
//     return playersArr;
// }