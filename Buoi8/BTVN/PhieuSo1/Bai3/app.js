const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const a3 = [];
let index = 0;
let text = "";
// const k;

for (let val of arr1) {
    if ( a3.indexOf(val) == -1 && arr1.indexOf(val) != arr1.lastIndexOf(val)) {
        a3.push(val);
        // console.log(a3);
    }
}

a3.sort().reverse();
arr1.sort().reverse();

for (let val of a3) {
    text += val + "(";
    let count = arr1.lastIndexOf(val) - arr1.indexOf(val) + 1;
    text += count + "times), ";
    // console.log("  " + val + " xuất hiện " + count + " lần.");
}
console.log(text);