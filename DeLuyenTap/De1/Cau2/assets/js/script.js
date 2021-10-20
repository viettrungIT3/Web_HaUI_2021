
function myFunction() {
    let n = document.getElementById('valueN').value;
    let result;
    if (n <= 0) {
        alert("Không tồn tại")
        result = 0;
    } else {
        let sum = 0;
        let x = 2;
        let count = 0;
        while (count < n) {
            if (isPrime(x)) {
                sum += x;
                count++;
                console.log(x);
            }
            x++;
        }
        // alert(sum);
        result = sum;
    }
    
    document.getElementById("result").innerHTML = result;
}

function clearResult() {
    console.log("clear");
    document.getElementById("valueN").value = 0;
    document.getElementById("result").innerHTML = "0";
}

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}