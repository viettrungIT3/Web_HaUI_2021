const array1 = [1,0,2,3,4];
const n = array1.length;
const array2 = [3,5,6,7,8,13];
const m = array2.length;
const a3 = [];

if ( n < m) {
    for (let i = 0; i < n; i++) {
        a3.push(array1[i] + array2[i]);
    }
    for (let i = n; i < m; i++) {
        a3.push(array2[i]);
    }
} else {
    for (let i = 0; i < m; i++) {
        a3.push(array1[i] + array2[i]);
    }
    for (let i = m; i < n; i++) {
        a3.push(array1[i]); 
    }
}

console.log(a3);