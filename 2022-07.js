const fs = require('fs');
let data = fs.readFileSync("inputs/day7.txt", 'utf-8').split('\r\n').map((row)=>{
    if(row[0] == '$'){
        row = row.slice(2).split(' ')
    } else {
        row = row.split(' ')
    }
    return row
})

//console.log(data);

function Dirfile(val,parent) {
    this.val = (val===undefined ? 0 : val)
    this.parent = (parent===undefined ? null : parent)
}

let sysdict = {}
let files = {}

const mainp1 = function(data){
    sysdict["/"] =  new Dirfile(0)
    let currparent = sysdict["/"]
    
    //build directory
    for (let i = 1; i<data.length; i++){
        console.log(data[i]);
        
        if (data[i][0] == 'cd'){
            if (data[i][1] == '..'){
                currparent.parent.val += Number(currparent.val)
                currparent = currparent.parent
            } else {
                currparent = sysdict[data[i][1]]
            }
        } else if (data[i][0] == 'dir'){
            sysdict[data[i][1]] = new Dirfile(0, currparent)
        } else if (data[i][0] != 'ls'){
            currparent.val += Number(data[i][0])
            files[data[i][1]] = new Dirfile(Number(data[i][0]), currparent)
        }
    }

    //find directories that have less than 100k
    let total = 0 //totals less than 100k
    for(let dir in sysdict){
        if(sysdict[dir].val < 100000){
            total+= sysdict[dir].val
        }
    }

    console.log(sysdict, files, total);
}
mainp1(data)