
function solution(clothes) {
    let answer = 1;
    const myClothes = {};

    clothes.map((clo) => {
        let [type, name] = clo;

        if( myClothes[name]){
            myClothes[name] = [...myClothes[name], type]
        }
        if( !myClothes[name]){
            myClothes[name] = [type]
        }
    })

    for(let key in myClothes){
        answer *= (myClothes[key].length + 1);
    }

    return answer - 1;
}