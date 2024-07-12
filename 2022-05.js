const fs = require('fs');
let [s, moves] = fs.readFileSync("inputs/day5.txt", 'utf-8').split('\r\n\r\n')

//clean movesoves
moves = moves.split('\r\n').map(record => record.split(/\D+/).filter(Boolean).map(Number));

//clean stacks into arrays
let rows = s.split("\r\n")

//find the index of where the letters are
let numbers = rows[rows.length-1].split('')

let indexes = []
let stacks = []
for (let i = 0; i<numbers.length; i++){
    if (numbers[i] !== ' '){
        indexes.push(i)
        stacks.push([])
    }
}

//bump each of the numbers into all the stacks
for (let i=rows.length-2; i>=0; i--){
    for (let j =0; j<indexes.length; j++){
        if (rows[i][indexes[j]] != ' '){
            stacks[j].push(rows[i][indexes[j]])
        }
    }
}

console.log(moves);
console.log(stacks);

let mainp1 = function(moves, stacks){

    for (let i = 0; i<moves.length; i++){
        for (let j = 0; j<moves[i][0]; j++){
            stacks[moves[i][2]-1].push(stacks[moves[i][1]-1].pop())
        }
    }


    let result = ''
    for (let i = 0; i<stacks.length; i++){
        result += stacks[i].pop()
    }

    console.log(result)
}

//mainp1(moves,stacks)

let mainp2 = function(moves, stacks){
    for (let i = 0; i<moves.length; i++){
        stacks[moves[i][2]-1].push(...stacks[moves[i][1]-1].slice(-moves[i][0]))
        stacks[moves[i][1]-1] = stacks[moves[i][1]-1].slice(0, -moves[i][0])
        console.log(i, stacks)
    }


    let result = ''
    for (let i = 0; i<stacks.length; i++){
        result += stacks[i].pop()
    }

    console.log(result)
}

mainp2(moves, stacks)