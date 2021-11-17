let st = "I love You";

function myFunction() {
    let result = "";
    for (let i = 0; i < st.length; i++) {
        if (st[i] >= 'A' && st[i] <= 'Z') {
            result += st[i].toLowerCase();
        } 
        if (st[i] >= 'a' && st[i] <= 'z') {
            result += st[i].toUpperCase();
        } else {
            result += st[i];
        }
    }
    return result;
}

// st = myFunction();
console.log(myFunction());