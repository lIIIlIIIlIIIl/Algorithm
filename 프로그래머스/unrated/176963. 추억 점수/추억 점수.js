function solution(name, yearning, photo) {
    let answer = [];
    let nameAndScore = {};

    for(let i=0; i<name.length; i++){
        nameAndScore[name[i]] = yearning[i];
    }


    photo.map((pt) => {
        let score = 0;
        for(let i=0; i<pt.length; i++){
            let personScore = nameAndScore[pt[i]];
            personScore && (score += personScore)
        }
         answer.push(score)
    })
    return answer;
}