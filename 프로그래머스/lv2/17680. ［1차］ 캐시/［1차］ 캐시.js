function solution(cacheSize, cities) {
    let time = 0;
    let cache = [];

    if(cacheSize === 0) return cities.length * 5;

    cities.map((city, idx) => {
        let lowerCity = city.toLowerCase();

        if(cache.includes(lowerCity)){
            time += 1;
            cache.splice(cache.indexOf(lowerCity), 1);
            cache.push(lowerCity);
        }else{
            if(cache.length === cacheSize){
                cache.shift();
            }
            cache.push(lowerCity);
            time += 5;
        }

    })
    return time;
}