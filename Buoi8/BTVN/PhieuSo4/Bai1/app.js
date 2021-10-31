const array1 = [1, 2, 3, 4, 1, 2, 2, 1];
const array2 = [];
const array3 = [];
const array4 = [];

array1.sort();
for (let val of array1) {
    if (array2.indexOf(val) == -1) {
        array2.push(val);
        array3.push(array1.lastIndexOf(val) - array1.indexOf(val) + 1)
    }
}

// console.log(array2);
// console.log(array3);

const valMax = Math.max(...array3);
// console.log(valMax);

for (let i = 0; i < array3.length; i++) {
    let val = array3[i];
    if (val == valMax) {
        array4.push(array2[i]);
    }
}

console.log(array4);