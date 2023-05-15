function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0);
    
    const reportedUser = {};

    id_list.forEach((user) => {
        reportedUser[user] = []
    });

    report.forEach((user) => {
        const [reporter, reportedPerson] = user.split(' ');

        if(!reportedUser[reportedPerson].includes(reporter)){
            reportedUser[reportedPerson].push(reporter);
        }
    })


    for(let key in reportedUser){
        if(reportedUser[key].length >= k){
            reportedUser[key].map((user) => {
                answer[id_list.indexOf(user)] += 1;
            })
        }
    }


    return answer;
}