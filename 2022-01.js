const fs = require('fs');
let data = fs.readFileSync("inputs/day1.txt", 'utf-8').split('\r\n')

data.push('')

let mainp1 = function(data){

    let currmax = 0
    let curr = 0

    for (i = 0; i<data.length; i++){
        if (data[i] != ''){
            curr += Number(data[i])
        }else{
            currmax = Math.max(currmax, curr)
            curr = 0
        }
    }

    return currmax
}

console.log(mainp1(data))

let mainp2 = function(data){
    let currmaxes = []
    let curr = 0

    for (i = 0; i<data.length; i++){
        if (data[i] != ''){
            curr += Number(data[i])
        }else{
            currmaxes.push(curr)
            curr = 0
        }
    }

    return currmaxes.sort((a,b)=>b-a)
}

let top3 = mainp2(data).splice(0,3)
console.log(top3.reduce((a,b)=>a+b,0))