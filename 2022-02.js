const fs = require('fs');
let data = fs.readFileSync("inputs/day2.txt", 'utf-8').split('\r\n')

const drawwinloss = function(op, you){

    if (op == 'A'){
        if (you == 'X'){return 3}
        if (you == 'Y'){return 6}
        if (you == 'Z'){return 0}
    }
    if (op == "B"){
        if (you == 'Y'){return 3}
        if (you == 'Z'){return 6}
        if (you == 'X'){return 0}
    }
    if (op == "C"){
        if (you == 'Z'){return 3}
        if (you == 'X'){return 6}
        if (you == 'Y'){return 0}
    }
}


const handpoints = {X: 1, Y: 2, Z: 3}

let mainp1 = function(data){

    let total = 0

    for (let i = 0; i< data.length; i++){
        let plays = data[i].split(' ')
        total+= (handpoints[plays[1]] + drawwinloss(plays[0], plays[1]))
    }

    return total
}

console.log(mainp1(data))

const rockpaperscissors = function(op, you){

    if (op == 'A'){
        if (you == 'X'){return 3}
        if (you == 'Y'){return 1}
        if (you == 'Z'){return 2}
    }
    if (op == "B"){
        if (you == 'X'){return 1}
        if (you == 'Y'){return 2}
        if (you == 'Z'){return 3}
    }
    if (op == "C"){
        if (you == 'X'){return 2}
        if (you == 'Y'){return 3}
        if (you == 'Z'){return 1}
    }
}
const resultpoints = {X: 0, Y: 3, Z: 6}

let mainp2 = function(data){

    let total = 0

    for (let i = 0; i< data.length; i++){
        let plays = data[i].split(' ')
        total+= (resultpoints[plays[1]] + rockpaperscissors(plays[0], plays[1]))
    }

    return total
}

console.log(mainp2(data));
