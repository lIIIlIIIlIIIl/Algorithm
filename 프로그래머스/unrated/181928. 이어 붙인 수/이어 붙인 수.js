function solution(num_list) {
    let odd = ''; 
    let even = '';
    
    num_list.forEach((num) => {
        if(num % 2 === 1) odd += String(num);
        if(num % 2 === 0) even += String(num);
    })

    return Number(odd) + Number(even);
}