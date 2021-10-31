const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const a3 = [3, 'a', 2, 4, 9];
let arrTemp = [];
// const k;

for (let val of a3) {
    let count = 0;
    for (let val1 of arr1) {
        if (val1 == val) {
            count++;
        }
    }
    arrTemp.push(count);
    // console.log("  " + val + " xuất hiện " + count + " lần.");
}

const max = Math.max(...arrTemp);
const indexMax = arrTemp.indexOf(max);
console.log( a3[indexMax] + ' ( ' + max + ' times )');