# Bài 7: Mảng và chuỗi

# Nội dung bài học
1. PHẦN 1: Mảng trong Javascript
1. PHẦN 2: Chuỗi trong Javascript

# [Link tài liệu + video: ](https://docs.google.com/presentation/d/1H-xrp45sEgTboZiLtLOcp5-7qtzw-R3G/edit?usp=sharing&ouid=115508379644976569332&rtpof=true&sd=true)

# PHẦN 1: MẢNG
## 1. Khái niệm sự kiện
Mảng là tập hợp các giá trị được lưu trữ liên tiếp trong bộ nhớ

Các giá trị mảng này được tham chiếu bằng một tên mảng chung và Các giá trị của biến mảng phải có cùng kiểu dữ liệu. Tuy nhiên trong javascript thì các phần tử có thể có các kiểu khác nhau

Các phần tử có thể được truy cập bằng cách sử dụng chỉ số con hoặc chỉ mục.

Chỉ mục xác định vị trí của một phần tử trong danh sách mảng và bắt đầu bằng 0

## 2. Cú pháp
```js
var  tenMang= [Danh sach gia tri];
var tenMang= new Array(Danh sach gia tri)
var tenMang =new Array(size)
```
* Ví dụ:
```js
var  cars1 = ["BMV", "HonDa","Toyota"];
var cars2 = new Array("BMV","HonDa","Toyota");
var cars3 = new Array(3);
cars3[0]="BMV"; cars3[1]="HonDa"; cars3[2]="Toyota"; 
```

## 3. Truy xuất các phần tử của mảng
tenMang[index] trong đó index bắt đầu từ 0 đến n-1 với n là số lượng phần tử của mảng
Ví dụ:
```js
var cars = new Array(3);
cars[0]="BMV"; cars[1]="HonDa"; cars[2]="Toyota"; 
```

## 4. Truy xuất bằng vòng lặp
* Các phần tử của mảng có chỉ số bắt đầu là 0 và mảng có thuộc tính length trả về số lượng các phần tử mảng
* JavaScript cung cấp vòng lặp for in để duyệt qua mảng

* Ví dụ: [tại w3](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_loop)
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
```

## 5. Các phương thức của mảng
Khi xử dụng đối tượng Array để tạo mảng ta có đối tượng mảng, ngoài thuộc tính length trả về độ dài mảng, Array có các phương thức sau

| Tên hàm   | Tác dụng |
| ---       | --- |
| [concat](https://www.w3schools.com/jsref/jsref_concat_array.asp)    | Nối các mảng thành một mảng |
| [join](https://www.w3schools.com/jsref/jsref_join.asp)      | Nối các thành phần của mảng thành một chuỗi |
| [pop](https://www.w3schools.com/jsref/jsref_pop.asp)       | Trả về phần tử cuối cùng trong mảng |
| [push](https://www.w3schools.com/jsref/jsref_push.asp)      | Thêm phần tử vào cuối mảng |
| [sort](https://www.w3schools.com/jsref/jsref_sort.asp)      | Sắp xếp các phần tử mảng theo chiều tăng dần |

##  10 Array method trong JavaScript Coder cần biết
### 1. forEach()
forEach là một phương thức có sẵn của array được JavaScript cung cấp.. Phương pháp này có thể giúp bạn lặp qua các item trên array.

* Ví dụ:
```js
let arr = [1, 2, 3, 4, 5, 6];
 
arr.forEach(item => {
console.log(item); // output: 1 2 3 4 5 6
});
```

### 2. includes()
Method này giúp các bạn check sự tồn tại của item nào trong array, Nó dạng như điểm danh vậy. Khi hô "Luân" có mặt hay không thì dùng method này. Nhanh chóng và tiện lợi.

* Ví dụ:
```js
let arr = ['Tùng', 'Luân', 'Hoà', 'Châu', 'Hoàng', 'Kiều Anh'];
 
arr.includes('Luân'); // output: true
arr.includes('Nhật'); // output: false
```

### 3. filter()
Khi bạn muốn lọc array theo 1 điều kiện cụ thể, filter sẽ giúp bạn làm điều đó.

Method này nhằm tạo 1 array mới với các điều kiện mà các lập trình viên ai ai cũng biết.

* Ví dụ:
```js
let arr = [1, 2, 3, 4, 5, 6];
 
// thằng nào lớn hơn 2 thì lấy
let filtered = arr.filter(num => num > 2);
console.log(filtered); // output: [3, 4, 5, 6]
```

### 4. map()
Nhìn qua, bạn sẽ thằng này có vẻ hao hao giống thằng filter() bên trên? Nhưng không nhé, 2 thằng này hoàn toàn khác nhau.

Hãy nhìn kỹ và xem xét nó. Map() nó tạo ra một array mới bằng việc ta xử lý những item của array cũ bằng phương thức của chúng ta xử lý.

* Ví dụ:
```js
const arr = [1, 2, 3, 4, 5, 6];
 
// bonus cho mỗi item trong arr thêm 1 đơn vị
const oneAdded = arr.map(num => num + 1);
console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]
 
console.log(arr); // output: [1, 2, 3, 4, 5, 6]
```

### 5. reduce()
Về cơ bản, method này giúp chúng ta có thể tính tổng các phần tử trong array. Còn về nâng cao, nó làm được khá như là:
+ Đếm các instances của các giá trị trong một đối tượng
+ Làm phẳng array.
+ Nhóm đối tượng theo thuộc tính.

Nhiều lắm đây là sơ bộ nói qua cho các bạn nắm thêm chứ mình dùng cũng chưa hết được :), bạn nào muốn tìm hiểu kỹ hơn thì đọc thêm nhé.

* Ví dụ về tính tổng:
```js
let arr = [1, 2, 3, 4, 5, 6];
 
let sum = arr.reduce((total, value) => total + value, 0);
console.log(sum); // 21
```

### 6. some()
Method này đơn giản hơn nhiều so với người anh em filter().

Dạng như là kiểm tra xem có ít nhất thằng nào trong array vượt qua được cuộc kiểm tra không. Giống như check xem có thằng nào thi trượt môn không vậy.

* Ví dụ:
```js
const arr = [3, 9, 7, 6];
 
// thằng nào điểm thi < 5 trượt 
const idiot = arr.some(num => num < 5);
console.log(idiot); // output: true // có thằng trượt :D
```

### 7. every()
Thằng method này lại ngược lại với người anh em họ hàng some().

Nó check hết item trong array thoả mãn điều kiện rồi trả về true or false.
* Ví dụ:
```js
const arr = [1, 2, 3, 4, 5, 6];
 
// check tất cả có > 4 không
const greaterFour = arr.every(num => num > 4);
console.log(greaterFour); // output: false sai rồi
 
// vậy thì nhỏ hơn 10 
const lessTen = arr.every(num => num < 10);
console.log(lessTen); // output: true đúng luôn
```

### 8. sort()
Method này ghi cho vui thôi chứ đã dùng quá nhiều rồi. nghe tên là biết rồi, sắp xếp luôn số và ký tự.
* Ví dụ:
```js
const arr = [1, 2, 3, 4, 5, 6];
const alpha = ['e', 'a', 'c', 'u', 'y'];
 
// sắp xếp theo thứ tự giảm dần
descOrder = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]
 
// sắp xếp theo thứ tự tăng dần
ascOrder = alpha.sort();
ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']
```

### 9. Array.from()
Cho phép bạn tạo các array từ một kiểu dữ liệu khác:
* Ví dụ:
```js
let name = 'hoangdt';
const nameArray = Array.from(name);
 
console.log(name); // output: hoangdt
console.log(nameArray); // output: ['h', 'o', 'a', 'n', 'g', 'd', 't'];

```
Hoặc có thể làm việc với DOM khi không có method nào support về điều này.
* Ví dụ:
```js
// tìm hết element li và đưa nó thành array
let list = document.querySelectorAll('li');
let listArray = Array.from(document.querySelectorAll('li'));
 
// ok chúng ta cùng check xem nó có là array hay không?
console.log(Array.isArray(list)); // output: false
console.log(Array.isArray(listArray));  // output: true
```


### 10. Array.of()
Có thể hiểu nôm na là khi truyền vào phần tử khi tạo array.
* Ví dụ:
```js
const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums); // output: [1, 2, 3, 4, 5, 6]
```

# PHẦN 2: CHUỖI(STRING)
## 1. Khái niệm
Chuỗi (String) trong JavaScript là tập các ký tự được viết trong cặp nháy đơn hoặc nháy kép. 

Đối tượng String dùng để chứa chuỗi trong javascript và cho phép thực thi các tác vụ về chuỗi. 

## 2. Cú pháp:
```js
var objectName = new String("strings");
var objectName ="string Value"
```
* Ví dụ:
```js
var name = new String("John Smith");
var name = "John Smith";
```

## 3. Thuộc tính và các phương thức cơ bản của String
Thuộc tính:
* `length`: Trả về số lượng ký tự trong chuỗi.

Phương thức:
* `chartAt()`: trả về ký tự tại vị trí xác định, vị trí này từ 0 đến length-1
* `concat()`: Nối hai chuỗi.
* `indexOf(`): trả về vị trí xuất hiện đầu tiên của một chuỗi trong một chuỗi khác tính từ trái
* `lastIndexOf()`: trả về vị trí xuất hiện đầu tiên của một chuỗi trong một chuỗi khác tính từ phải hay vị trí xuất hiện cuối cùng tình từ bên trái
* `match()`: hàm dùng trong biểu thức chính qui, kiểm tra một string với biểu thức chính qui và thay nó với một string khác.
* `search()`: tìm một chuỗi trong một chuỗi, có thể áp dụng với biểu thức chính qui
* `substring()`: lấy một phần của chuỗi trong một khoảng cách xác định
* `replace()`: thay thế một chuỗi bằng một chuỗi khác
* `split()`: cắt chuỗi thành n chuỗi dựa trên chuỗi nhận dạng
* `toLowerCase()`: Chuyển thành chữ thường
* `toUpperCase()`: chuyển thành chữ hoa


## 4. Bạn có thể tham khảo thêm tại W3school
* [JavaScript Strings](https://www.w3schools.com/js/js_strings.asp)
* [String Methods](https://www.w3schools.com/js/js_string_methods.asp)
* [String Search](https://www.w3schools.com/js/js_string_search.asp)
* [JavaScript Template Literals](https://www.w3schools.com/js/js_string_templates.asp)









