function solution(id_pw, db) {
     let isLogin = db.map((user) => {
        if(id_pw[0] === user[0] && id_pw[1] === user[1]) return "login";
        if(id_pw[0] === user[0] && id_pw[1] !== user[1]) return "wrong pw";
        return 'fail';
    });
    
    if(isLogin.includes("login")){
        return "login";
    } else if(isLogin.includes("wrong pw")){
        return  "wrong pw";
    } else{
        return "fail";
    }
}