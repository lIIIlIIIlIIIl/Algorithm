function solution(today, terms, privacies) {
    const answer = [];
    const expireDate = new Date(today);
  
    const termType = {};

    terms.forEach((el) => {
      const [type, term] = el.split(" ");
      termType[type] = Number(term);
    });
  
    privacies.forEach((el, idx) => {
      const [date, type] = el.split(" ");
      const checkDate = new Date(date);
  
      checkDate.setMonth(checkDate.getMonth() + termType[type]);
  
      if (checkDate <= expireDate) answer.push(idx + 1);
    });
  
    return answer;
  }
