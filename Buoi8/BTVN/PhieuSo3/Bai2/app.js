let str1 = "abcd";
let str2 = "cbad";
let str = "";
let flag = true;

let temp1 = str1.split("").sort();
let temp2 = str2.split("").sort();

if (temp1.length != temp2.length) {
    console.log(false);
}

for (let i = 0; i < temp1.length; i++) {
    if (temp1[i] != temp2[i]) {
        flag = false;
        break;
    }
    str += temp1[i].toString();
}

if (flag) {
    console.log(flag + " " + str + ", " + str);
}