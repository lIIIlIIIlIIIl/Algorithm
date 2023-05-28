function solution(num_list) {
    let even = 0;
    let odd = 0;

    num_list.forEach((num, index) => {
        if(index % 2 === 0) even += num;
        if(index % 2 === 1) odd += num;
    });

    return even > odd ? even : odd;
}