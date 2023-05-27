function solution(survey, choices){
    let answer = '';
    const board = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    }

    for(let i=0; i<survey.length; i++){
        const [first, secound] = survey[i].split('');
        const score = choices[i];

        if(score < 4){
            board[first] += 4 - score;
        }
        if(score > 4){
            board[secound] += score - 4; 
        }
    }

    for(let i=1; i<=4; i++){
        let option; 

        switch(i){
            case 1:
                option = 'RT';
                break;

            case 2:
                option = 'CF';
                break;
            
            case 3:
                option = 'JM';
                break;
            
            case 4:
                option = 'AN';
                break;
        }

        const [start, end] = option.split('');

        if(board[start] > board[end]){
            answer += start;
        }
        if(board[start] < board[end]){
            answer += end;
        }
        if(board[start] === board[end]){
            option.charCodeAt(0) < option.charCodeAt(1) ? answer += start : answer += end;
        }

    }

    return answer;
}