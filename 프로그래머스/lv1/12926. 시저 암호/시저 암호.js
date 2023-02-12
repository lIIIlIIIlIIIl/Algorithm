function solution(s, n) {
    return s.split("").map((el)=>{
        let charCode = el.charCodeAt(0);
        
        if(el === " "){
            return " "
        }
        
        if(charCode<91 && charCode>64){
            let strNum = 0;
            
            if(charCode+n > 90){
                strNum = charCode+n - 26;
            }
            if(charCode+n <= 90){
                strNum = charCode+n;
            }
        return String.fromCharCode(strNum);
        }
            
        if(charCode<123 && charCode>96){
            let strNum = 0;
            
            if(charCode+n > 122){
                strNum = charCode+n - 26;
            }
            if(charCode+n <= 122){
                strNum = charCode+n;
            }
        return String.fromCharCode(strNum);
        }
    }).join("");
}