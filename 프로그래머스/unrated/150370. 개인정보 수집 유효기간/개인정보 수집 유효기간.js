function solution(today, terms, privacies) {
    const answer = [];
    const toDay = new Date(today);
    const termMap = new Map();

    terms.forEach((term)=>{
        const [type, termMonth] = term.split(' ');
        termMap.set(type, Number(termMonth));
    })

    privacies.forEach((pri, index) => {
        const [date, type] = pri.split(' ');
        const privacyDate = new Date(date);

        privacyDate.setMonth(privacyDate.getMonth() + termMap.get(type));

        if(privacyDate <= toDay) answer.push(index + 1);
    })
    return answer;
}