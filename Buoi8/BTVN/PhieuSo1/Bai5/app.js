let str = "hello world";
arr = str.split(" ");

function myToUpperCase() {
    let result = "";
    for (let val of arr) {
        result += val.replace(val.charAt(0), val.charAt(0).toUpperCase()) + " ";
    }
    result = result.trim();
    return result;
}

str = myToUpperCase();
console.log(str);
