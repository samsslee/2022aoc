const fs = require('fs');
let data = fs.readFileSync("inputs/day4.txt", 'utf-8').split('\r\n')

const main = function(data){

    let contains = 0
    let overlap = 0

    for (let i=0; i<data.length; i++){
        let [one, two] = data[i].split(",")
        one = one.split("-")
        two = two.split("-")
        let onenum = one[0]-two[0]
        let twonum = one[1]-two[1]

        let val = Math.sign(onenum)+Math.sign(twonum)

        if(Math.abs(val) < 2){
            contains++
        } else {

            if (Math.sign(val) == 1 && Math.sign(two[1]-one[0])>=0){
                overlap ++
            } else if (Math.sign(val) == -1 && Math.sign(one[1]-two[0])>=0){
                overlap ++
            }

            console.log(onenum, twonum, val, one, two)
        }
    }
    // //part 1
    // return contains

    //part 2
    return overlap + contains

}

console.log(main(data))