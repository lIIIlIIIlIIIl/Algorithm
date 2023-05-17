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