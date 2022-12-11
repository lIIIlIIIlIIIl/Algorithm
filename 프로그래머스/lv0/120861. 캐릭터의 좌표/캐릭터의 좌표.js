function solution(keyinput, board) {
    let answer = [0, 0];
    
    let midRL = (board[0]-1) / 2;
    let midUD = (board[1]-1) / 2;
    
    keyinput.map((key) => {
        if(key === 'left'){
            answer[0] > -(midRL) ? answer[0] -= 1 : null;
        }
        
        if(key === 'right'){
            answer[0] < midRL ? answer[0] += 1 : null;
        }
        
        if(key === 'up'){
            answer[1] < midUD ? answer[1] += 1 : null;
        }
        if(key === 'down'){
            answer[1] > -(midUD) ? answer[1] -= 1 : null; 
        }
    })
    
    return answer;
}