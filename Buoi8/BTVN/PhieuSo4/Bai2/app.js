// const code = [
//     { iCode: 0, vCode: 'a'},
//     { iCode: 1, vCode: 'b'},
//     { iCode: 2, vCode: 'c'},
//     { iCode: 3, vCode: 'd'},
//     { iCode: 4, vCode: 'e'},
//     { iCode: 5, vCode: 'f'},
//     { iCode: 6, vCode: 'g'},
//     { iCode: 7, vCode: 'h'},
//     { iCode: 8, vCode: 'i'},
//     { iCode: 9, vCode: 'j'},
//     { iCode: 10, vCode: 'k'},
//     { iCode: 11, vCode: 'l'},
//     { iCode: 12, vCode: 'm'},
//     { iCode: 13, vCode: 'n'},
//     { iCode: 14, vCode: 'o'},
//     { iCode: 15, vCode: 'p'},
//     { iCode: 16, vCode: 'q'},
//     { iCode: 17, vCode: 'r'},
//     { iCode: 18, vCode: 's'},
//     { iCode: 19, vCode: 't'},
//     { iCode: 20, vCode: 'u'},
//     { iCode: 21, vCode: 'v'},
//     { iCode: 22, vCode: 'w'},
//     { iCode: 23, vCode: 'x'},
//     { iCode: 24, vCode: 'y'},
//     { iCode: 25, vCode: 'z'}
// ];

// console.log(code);

const code = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

console.log(code);


function Encrypt() {
    const valN = document.getElementById('valNumber').value;
    const valT = document.getElementById('valText').value;
    const result = document.getElementById('result');
    let text;
    console.log(valN);
    console.log(valT);
    console.log(parseInt(code.indexOf(valT[0])) + parseInt(valN));
    // text += parseInt(code.indexOf(valT[0])) + parseInt(valN) + "";
    result.innerHTML = code[(parseInt(code.indexOf(valT[0])) + parseInt(valN))%26];
}



