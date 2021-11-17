function myFunction() {
    const name = document.getElementById('name');
    const address = document.getElementById('address');

    // name = name.trim();
    console.log(FormString(name.value));
    console.log(FormString(address.value));

    name.value = FormString(name.value);    // Tiện tay, chuẩn hoá luôn
    address.value = FormString(address.value);
    
}

function FormString(str) {
    let strNew = str;

    strNew = strNew.trim();
    strNew = strNew.toLowerCase();
    strNew = strNew.replace(/ +/g, ' ');

    let arrWords = strNew.split(' ');
    strNew = "";
    for (const word of arrWords) {
        if (word.trim().length > 0) {
            let string = word + '';
            if (string == ',' || string == '.') {
                strNew += string;
            }
            else {
                string = string.charAt(0).toUpperCase() + string.slice(1);
                strNew += ' ' + string;
            }

        }
    }

    strNew = strNew.trim();

    return strNew;
}

function titleCase(str) {
    var convertToArray = str.toLowerCase().split(' ');
    var result = convertToArray.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });

    return result.join(' ');
}