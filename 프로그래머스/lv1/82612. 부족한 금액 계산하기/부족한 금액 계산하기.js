function solution(price, money, count) {
    let totalCount =  price * count * (count + 1) / 2 
    
    return money - totalCount < 0 ? totalCount - money : 0;
}
