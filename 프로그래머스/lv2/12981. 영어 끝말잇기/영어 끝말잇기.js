function solution(n, words) {
    let answer = [0, 0];
    let stackWords = [words[0]];

    
    for(let i=1; i<words.length; i++){
        // 회수 = i/3 + 1
        let beforWord = stackWords[stackWords.length-1];

        if(stackWords.length === 0 || !(stackWords.includes(words[i])) && beforWord[beforWord.length-1] === words[i][0]){
            stackWords.push(words[i]);
        }else{
            answer[0] = i % n + 1;
            answer[1] = parseInt(i/n) + 1;
            return answer;
        }

    }
    return answer;
}