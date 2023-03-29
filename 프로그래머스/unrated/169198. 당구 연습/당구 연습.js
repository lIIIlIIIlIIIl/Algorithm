function solution(m, n, startX, startY, balls) {
    const answer = [];
    for(let [targetX, targetY] of balls){
        const candidate_x_down = (targetX - startX)**2 + (targetY + startY)**2;
        const candidate_x_up = (targetX - startX)**2 + (targetY - 2*n + startY)**2;
        const candidate_y_left = (targetX + startX)**2 + (targetY - startY)**2;
        const candidate_y_right = (targetX - 2*m + startX)**2 + (targetY-startY)**2;

        if(targetX === startX) 
            if(targetY > startY)
                answer.push(Math.min(candidate_x_down, candidate_y_left, candidate_y_right));
            else 
                answer.push(Math.min(candidate_x_up, candidate_y_left, candidate_y_right));
        else if(targetY === startY) 
            if(targetX > startX) 
                answer.push(Math.min(candidate_x_down, candidate_x_up, candidate_y_left));
            else 
                answer.push(Math.min(candidate_x_down, candidate_x_up, candidate_y_right));
        else 
            answer.push(Math.min(candidate_x_down, candidate_x_up, candidate_y_left, candidate_y_right));
    }
    return answer;
}