const st = "học Java thật vi diệu";

const temp = st.split("").sort();
// console.log(temp);

const countH = temp.lastIndexOf('h') - temp.indexOf('h') + 1;
const countA = temp.lastIndexOf('a') - temp.indexOf('a') + 1;

if ( countH == countA) {
    console.log(`h xuất hiện ${countH} lần, a xuất hiện ${countA} lần. Vậy số lượng bằng nhau`);
} else if ( countH < countA) {
    console.log(`h xuất hiện ${countH} lần, a xuất hiện ${countA} lần. Vậy số lượng kí tự a nhiều hơn số lượng kí tự h`);
} else {
    console.log(`h xuất hiện ${countH} lần, a xuất hiện ${countA} lần. Vậy số lượng kí tự h nhiều hơn số lượng kí tự a`);
}