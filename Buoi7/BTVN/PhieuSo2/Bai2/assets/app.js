const checks = document.getElementsByClassName("check");
const checkAll = document.getElementById("checkAll");
const val1 = document.getElementById('value1').value;
const val2 = document.getElementById('value2').value;
const result = document.getElementById('result');

checkAll.addEventListener('click', function () {
    if (checkAll.checked == true) {
        for (let i = 0; i < checks.length; i++) {
            checks[i].checked = true;
        }
    } else {
        for (let i = 0; i < checks.length; i++) {
            checks[i].checked = false;
        }
    }
})

function Reset() {
    checkAll.checked = false;
    for (let i = 0; i < checks.length; i++) {
        checks[i].checked = false;
    }
}

let count = 0;
checks[0].addEventListener('click', function () {
    if (checks[0].checked) {
        count++;
        if (count == checks.length) {
            checkAll.checked = true;
        }
    } else {
        checkAll.checked = false;
        count--;
        // sum -= val1;
    }
})
checks[1].addEventListener('click', function () {
    if (checks[1].checked) {
        count++;
        if (count == checks.length) {
            checkAll.checked = true;
        }
    } else {
        checkAll.checked = false;
        count--;
    }
})

function Update() {
    let sum = "";
    if (checks[1].checked && checks[2].checked) {
        sum += parseInt(val1) + parseInt(val2);
    } else  if (checks[1].checked) {
        sum += parseInt(val1);
    } else if (checks[2].checked) {
        sum += parseInt(val2);
    }
    console.log(sum);
    // Chưa hoàn thiệN
}
