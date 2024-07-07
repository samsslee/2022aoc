const fs = require('fs');
let data = fs.readFileSync("inputs/day3.txt", 'utf-8').split('\r\n')

let mainp1 = function(data){

    let total = 0

    for (let i=0; i<data.length; i++){
        let len = data[i].length
        let first = new Set(data[i].slice(0,len/2).split(''))
        let second = data[i].slice(len/2,len).split('')

        for (j = 0; j<len/2; j++){
            console.log(second[j])
            if(first.has(second[j])){
                console.log(total)
                let code = second[j].charCodeAt(0)-96
                total += code > 0? code: code + 58
                break
            }
        }
    }

    return total

}

//console.log(mainp1(data))

let mainp2 = function(data){
    let total = 0    

    let i = 0
    while (i<data.length){
        let first = new Set(data[i].split(''))
        let filtered = new Set([])

        for (let j = 0; j<data[i+1].length; j++){
            if(first.has(data[i+1][j])){
                filtered.add(data[i+1][j])
            }
        }

        for (let k=0; k<data[i+2].length; k++){
            if(filtered.has(data[i+2][k])){
                console.log(total)
                let code = data[i+2][k].charCodeAt(0)-96
                total += code > 0? code: code + 58
                break
            }
        }
        
        i +=3
    }
    console.log(total)
    return total

}

mainp2(data)