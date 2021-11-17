function myFunction() {
    const num = document.getElementById('number').value;
    let sum = 0;
    console.log(num);

    for (let i = 6; i <= num; i++) {
        if (check(i)) {
            sum += i;
        }
    }

    document.getElementById('result').value = sum;
}

function check(n) {
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0)
            sum += i;
    }
    if (sum == n) return true; 
    return false;
}