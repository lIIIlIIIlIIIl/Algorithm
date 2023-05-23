function solution(board, moves) {
    let answer = 0;
    let stack = [];

    moves.forEach((el) => {
        for(let i=0; i<board.length; i++){
            if(board[i][el-1] !== 0){
                if(stack[stack.length-1] === board[i][el-1]){
                    stack.pop();
                    answer += 2;
                }else{
                    stack.push(board[i][el-1]);                
                }
                board[i][el-1] = 0;
                break;
            }
        }
    })

    return answer;
}