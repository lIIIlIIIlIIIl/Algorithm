function solution(spell, dic) {
    return dic.map((word) => spell.filter((spl) => word.includes(spl))).map((el) => el.join("") === spell.join("") ? 1 : 2).includes(1) ? 1 : 2;

}