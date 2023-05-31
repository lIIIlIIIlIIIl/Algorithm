const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let answer =  line.split('').map((alp) => {
        if(alp.toUpperCase() === alp){
            return alp.toLowerCase();
        }else{
            return alp.toUpperCase();
        }
    }).join('');
    
    console.log(answer)
}).on('close',function(){
    str = input[0];
});


