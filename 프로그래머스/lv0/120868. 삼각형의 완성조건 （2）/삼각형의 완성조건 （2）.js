function solution(sides) {
    let maxSide = Math.max(...sides);
    let minSide = Math.min(...sides);
    let sidesArr = [];
    
    sides[0] > sides[1] ? maxSide = sides[0] : maxSide = sides[1];
    
    for(let i=1; i<=maxSide; i++){
        if(minSide+i > maxSide) sidesArr.push(i);
    }
    
    for(let i=maxSide+1; i<maxSide+minSide; i++){
        sidesArr.push(i);
    }
    
    return sidesArr.length;
}