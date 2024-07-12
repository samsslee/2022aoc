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


const main = function(data){
    let root =  new Dirfile(0)
    let curr = root
    
    for (let i = 1; i<data.length; i++){
        
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

    //scoot all the way back up to the beginning
    while (curr.parent !== null){
        curr.parent.val += Number(curr.val)
        curr = curr.parent
    }

    console.log("part 1: ", part1(root));
    console.log("part 2: ", part2(root, (70000000 - root.val)));

}

const part1 = function(node) {
    let tally = 0;

    const tallyUp = function(currentNode) {
        if (currentNode.val <= 100000) {
            tally += currentNode.val;
        }
        for (let child in currentNode.children) {
            tallyUp(currentNode.children[child]);
        }
    };

    tallyUp(node);
    return tally;
};

const part2 = function(node, unused){

    let deletedir = Infinity

    const searchForDelete = function(currentNode) {
        if (currentNode.val + unused >= 30000000) {
            deletedir = Math.min(currentNode.val, deletedir)
        }
        for (let child in currentNode.children) {
            searchForDelete(currentNode.children[child]);
        }
    };

    searchForDelete(node);
    return deletedir;

}
main(data)