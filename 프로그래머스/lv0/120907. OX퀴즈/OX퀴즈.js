function solution(quiz) {
    return quiz.map((q) => q.split(' ')).map((q) => {
        if(q[1] === '-'){
            if(parseInt(q[0]) - parseInt(q[2]) === parseInt(q[4])) return 'O';
            return 'X'
        }
            if(parseInt(q[0]) + parseInt(q[2]) === parseInt(q[4])) return 'O';
            return 'X'
    })
}