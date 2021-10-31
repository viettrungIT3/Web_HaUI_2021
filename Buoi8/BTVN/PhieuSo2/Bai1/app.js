let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let name = ["th","st","nd","rd"];

for (let index = 0; index < color.length; index++) {
    if ( index < 3) {
        console.log(`"${parseInt((index+1)) + name[index+1]} choice is ${color[index]}."`);
    } else {
        console.log(`"${parseInt((index+1)) + name[0]} choice is ${color[index]}."`);
    }
}