const fs = require('fs');
let data = fs.readFileSync("inputs/day7.txt", 'utf-8').split('\r\n').map((row)=>{
    if(row[0] == '$'){
        row = row.slice(2).split(' ')
    } else {
        row = row.split(' ')
    }
    return row
})

// console.log(data);

function Dirfile(val,parent) {
    this.val = (val===undefined ? 0 : val)
    this.parent = (parent===undefined ? null : parent)
    this.children = {}
}


const mainp1 = function(data){
    let root =  new Dirfile(0)
    let curr = root
    
    //build directory
    for (let i = 1; i<data.length; i++){
        // console.log(data[i]);
        
        if (data[i][0] == 'cd'){
            if (data[i][1] == '..'){
                curr.parent.val += Number(curr.val)
                curr = curr.parent
            } else {
                curr = curr.children[data[i][1]]
            }
        } else if (data[i][0] == 'dir'){
            curr.children[data[i][1]] = new Dirfile(0, curr)
        } else if (data[i][0] != 'ls'){
            curr.val += Number(data[i][0])
        }
    }
    let tally = addValues(root)
    console.log(tally);

    return tally
    //find directories that have less than 100k
}

const addValues = function(node) {
    // Initialize tally at the top-level call
    let tally = 0;

    const recursiveTally = function(currentNode) {
        if (currentNode.val <= 100000) {
            tally += currentNode.val;
        }
        for (let child in currentNode.children) {
            recursiveTally(currentNode.children[child]);
        }
    };

    recursiveTally(node);
    return tally;
};
mainp1(data)