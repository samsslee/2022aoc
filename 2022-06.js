const fs = require('fs');
let data = fs.readFileSync("inputs/day6.txt", 'utf-8').split('')

function main (data, part){
    let lp = 0
    let rp = part

    while (rp<data.length){
        let nset = new Set([...data.slice(lp,rp)])
        if (nset.size == part){
            return rp
        }
        lp++
        rp++
    }

    return null

}
let p1 = 4
let p2 = 14

console.log(main(data, p2))