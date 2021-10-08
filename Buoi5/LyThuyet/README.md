# Bài 5: Giới thiệu cơ bản về Javascript

# Nội dung bài học
1. PHẦN 1: GIỚI THIỆU VỀ JAVASCRIPT
1. PHẦN 2: CÚ PHÁP TRONG JAVASCRIPT
1. PHẦN 3: BIẾN, KIỂU DỮ LIỆU, HÀM TRONG JAVASCRIPT
1. PHẦN 4: CÁC CÂU LỆNH TRONG JAVASCRIPT



## Phần 1: TỔNG QUAN VỀ CSS
### Javascript là gì?
* Ngôn ngữ thông dịch, mã nguồn của nó được nhúng hoặc tích hợp trực tiếp vào các tập tin HTML. Khi trang web được tải xong, trình duyệt sẽ thông dịch và thực hiện các mã lệnh này
* Ngôn ngữ được cung cấp hoàn toàn miễn phí

### Javascript có thể làm được gì?
* Giúp cho trang HTML trở nên sinh động hơn
* Thực hiện một công việc với sự kiện nào đó từ phía người dùng
* Có thể thay đổi giá trị thuộc tính của thẻ HTML
* Có thể thay đổi CSS của trang HTML
* Có thể ẩn các thành phần của trang HTML
* Kiểm tra tính chính xác của dữ liệu
* Phát hiện các loại trình duyệt khác nhau
* Tạo các tập tin cookie lưu trữ và truy xuất thông tin trên máy tính của người truy cập website
* ...

### Sử dụng Javascript như thế nào?

* Các câu lệnh JavaScript phải được chèn trong thẻ `<script>` và `</script>` và có thể đặt trong phần head hoặc body của trang web hoặc để trong file riêng.
* Ví dụ: [Tại W3](https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto)
```html
    <!DOCTYPE html>
    <html>
    <body>

        <h2>JavaScript in Body</h2>

        <p id="demo"></p>

        <script>
            document.getElementById("demo").innerHTML = "My First JavaScript";
        </script>

    </body>
    </html>
```

* [Tham khảo thêm tại W3](https://www.w3schools.com/js/js_intro.asp)
* [Tham khảo thêm tại W3](https://www.w3schools.com/js/js_whereto.asp)

### Javascript thực thi lệnh khi nào?
* Trường hợp thứ nhất: Ngay khi trang web được tải về trình duyệt của người sử dụng.
* Trường hợp thứ hai: Thực hiện khi nhận được một tác động nào đó như nhất nút, di chuyển chuột, …
* Ví dụ: [Tại W3](https://www.w3schools.com/js/tryit.asp?filename=tryjs_output_dom)
```html
    <!DOCTYPE html>
    <html>
    <body>

        <h2>My First Web Page</h2>
        <p>My First Paragraph.</p>

        <p id="demo"></p>

        <script>
            document.getElementById("demo").innerHTML = 5 + 6;
        </script>

    </body>
    </html>
```

* Danh sách các sự kiện thông dụng của JavaScript

    | Tên | mô tả |
    |:---|:---|
    | `onclick` |	sự kiện xảy ra khi user nhấn chuột vào phần tử |
    | `ondblclick` |	sự kiện xảy ra khi người dùng click kép chuột vào phần tử |
    | `onmouseenter` |	sự kiện xảy ra khi người dùng di chuyển con trỏ vào phần tử |
    | `onmouseleave` |	sự kiện xảy ra khi user di chuyển con trỏ ra khỏi phần tử. |
    | `onkeydown` |	sự kiện xảy ra khi user vừa mới bấm một phím |
    | `onkeyup` |	event xảy ra khi người dùng nhả phím ra |
    | `oncopy` |	event xảy ra khi user copy content của phần tử |
    | `oncut` |	event xảy ra khi người dùng cắt nội dung của phần tử |
    | `onpaste` |	event xảy ra khi người dùng dán content vào phần tử |
    | `onchange` |	sự kiện xảy ra khi người dùng refresh trị giá của phần tử |

* [Tham khảo thêm tại W3](https://www.w3schools.com/js/js_output.asp)

### Vị trí của Javascript trong trang HTML?
* Đặt trong cặp thẻ <head> của trang HTML
* Đặt trong cặp thẻ <body> của trang HTML
* Đặt trong tập tin .js sau đó nhúng tập tin này vào trong HTML
* [Tham khảo thêm tại W3](https://www.w3schools.com/js/js_whereto.asp)

## Phần 2: CÚ PHÁP TRONG JAVASCRIPT
### Quy tắc sử dụng cú pháp lệnh

* Javascript phân biệt chữ hoa chữ thường
* Kết thúc câu lệnh của Javascript bằng dấu chấm phẩy “;”
* Một câu lệnh JavaScript có thể bao gồm:
    * `Giá trị`: có thể là hằng hoặc biến
    * `Toán tử (phép toán)`: Các phép toán số học (+, -, *, /, %, ++, --); các phép toán logic (&&, ||, !); các
    * `phép toán so sánh` (>, <, >=, <=, ==, !=); phép gán =
    * `Biểu thức`: Là sự kết hợp của hằng số, biến số, phép toán để tính toán ra một kết quả
    * `Từ khóa (keyword)`: là một từ hoặc một cụm từ được định nghĩa bởi ngôn ngữ Javascript

### Cú pháp lệnh cơ bản
* Hiển thị một dòng văn bản bằng câu lệnh `document.write`
* Ghi ra nội dung thẻ HTML sử dụng `innerHTML`
* Viết ra cảnh báo bằng cách sử dụng `window.alert()`
* Ghi vào bảng điều khiển của trình duyệt, sử dụng `console.log()`

[Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_output.asp)

## Phần 3: BIẾN, KIỂU DỮ LIỆU, HÀM TRONG JAVASCRIPT

### 1. Biến trong Javascript

* Được dùng để lưu trữ một giá trị nào đó có thể là một chuỗi, một con số, một mảng, một phép toán hoặc một đối tượng

* Cách khai báo trong Javascript theo cú pháp
```js
    let <tên_biến>;
    <tên_biến> = giá_trị;
```

* Ví dụ:
```js
    let x;
    x = 6;
```
* [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_variables.asp)
* [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_let.asp)
* [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_const.asp)

### 2. Kiểu dữ liệu trong Javascript

* Trong lập trình, kiểu dữ liệu là một khái niệm rất quan trọng. Các biến trong javascript có thể chứa nhiều kiểu dữ liệu khác nhau có thể là số, chuỗi, đối tượng …
* Tuy nhiên, Javascript vẫn có các kiểu dữ liệu cụ thể gồm: xâu, số, logic, đối tượng, mảng và không định nghĩa
```js
    let a = typeof "";  //Kiểu xâu kí tự
    let b = typeof "Thiết kế web";  //Kiểu xâu ký tự  
    let c = typeof 2020;    //Kiểu số
    let d = typeof true;    //Kiểu logic
    let f = typeof {name:"TKW", gender:"Nam", year:"2020"}; //Kiểu đối tượng
    let g = typeof undefined;   //Không định nghĩa
    let h = typeof ["Kế toán", "CNTT", "Du lịch"];  //Kiểu mảng
```

* Đặc biệt, trong Javascript có khả năng xác định kiểu dữ liệu động theo giá trị mà biến số được nhận về thông qua một phép gán
```js
    let x = "Volvo" + 16 + 4;   //Result: 20Volvo
```
* JavaScript đánh giá các biểu thức từ trái sang phải. Các trình tự khác nhau có thể tạo ra các kết quả khác nhau
```js
    let x = "Volvo" + 16 + 4;   //Result: Volvo164
```
[Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_datatypes.asp)

### 3. Hàm trong Javascript

* Hàm trong JavaScript là một khối lệnh được thiết kế để thực hiện một nhiệm vụ xác định
* Hàm được thực thi khi nó được gọi, hàm có thể được gọi khi:
* Một sự kiện xảy ra (khi người sử dụng kích chuột vào một nút lệnh).
    * Được gọi trọng đoạn mã JavaScript
    * Tự động gọi

* Cú pháp:
```js
    function name(parameter1, parameter2, parameter3) {
        // code to be executed
    }
```

* Ví dụ: [tại W3](https://www.w3schools.com/js/tryit.asp?filename=tryjs_functions)
```js
    function myFunction(p1, p2) {
        return p1 * p2;   // The function returns the product of p1 and p2
    }
```

[Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_functions.asp)

## Phần 4: CÁC CÂU LỆNH TRONG JAVASCRIPT
### 1. Giới thiệu các cấu trúc
* Cấu trúc tuần tự là các câu lệnh được theo trình tự xuất hiện của chúng
* Cấu trúc điều kiện là cấu trúc dùng để diễn đạt một việc sẽ được thực hiện khi một điều kiện cụ thể được thỏa mãn
* Cấu trúc lặp (Câu lệnh lặp) cho phép một lập trình viên xác định thứ tự thực thi các lệnh trong mỗi chương trình, thể hiện qua việc:
    * Bỏ qua một vài câu lệnh để thực thi các câu lệnh khác.
    * Lặp lại một hoặc khối lệnh trong khi điều kiện còn đúng.

### 2. Cấu trúc điều kiện
1. Cấu trúc `if ... else`
* Cú pháp: 
```js
    if (condition) {
        //  block of code to be executed if the condition is true
    } else {
        //  block of code to be executed if the condition is false
    }
```
* [Ví dụ tại W3:](https://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthenelse)
```js
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
```
* [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_if_else.asp)

2. Cấu trúc `switch ... case`
* Cú pháp: 
```js
    switch(expression) {
        case x:
            // code block
            break;
        case y:
            // code block
            break;
        default:
            // code block
    }
```
* [Ví dụ tại W3:](https://www.w3schools.com/js/tryit.asp?filename=tryjs_switch)
```js
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
```
* [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_switch.asp)


### 3. Các cấu trúc điều khiển
1. Cấu trúc lặp `for`
* Cú pháp: 
```js
    for (statement 1; statement 2; statement 3) {
        // code block to be executed
    }
    // Statement 1 is executed (one time) before the execution of the code block.
    // Statement 2 defines the condition for executing the code block.
    // Statement 3 is executed (every time) after the code block has been executed.
```
* [Ví dụ tại W3:](https://www.w3schools.com/js/tryit.asp?filename=tryjs_loop_for_ex)
```js
    for (let i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
    }
```
* [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_loop_for.asp)

2. Cấu trúc lặp `for in`: khi chúng ta muốn duyệt toàn bộ các thuộc tính của một đối tượng
* Cú pháp: 
```js
    for (key in object) {
        // code block to be executed
    }
```
* [Ví dụ tại W3:](https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_for_in)
```js
    const person = {fname:"John", lname:"Doe", age:25}; 

    let txt = "";
    for (let x in person) {
        txt += person[x] + " ";
    }

    //Result: John Doe 25
```
* [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_loop_forin.asp)

3. Cấu trúc lặp `for of`: câu lệnh lặp qua các giá trị của một đối tượng có thể lặp lại.
* Nó cho phép bạn lặp qua các cấu trúc dữ liệu có thể lặp lại như Mảng, Chuỗi, Bản đồ, Danh sách,...
* Cú pháp: 
```js
    for (variable of iterable) {
        // code block to be executed
    }
```
* [Ví dụ tại W3:](https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_for_of)
```js
    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
        text += x + " ";
    }

    //Result: BMW Volvo Mini
```
* [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_loop_forof.asp)

4. Cấu trúc lặp `while`: 
* Cú pháp: 
```js
    while (condition) {
        // code block to be executed
    }
```
* [Ví dụ tại W3:](https://www.w3schools.com/js/tryit.asp?filename=tryjs_while)
```js
    while (i < 10) {
        text += "The number is " + i;
        i++;
    }
```
* [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_loop_while.asp)

4. Cấu trúc lặp `do while`: 
* Cú pháp: 
```js
    do {
        // code block to be executed
    }
    while (condition);
```
* [Ví dụ tại W3:](https://www.w3schools.com/js/tryit.asp?filename=tryjs_dowhile)
```js
    do {
        text += "The number is " + i;
        i++;
    }
    while (i < 10);
```
* [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_loop_while.asp)

### 4. Các câu lệnh khác
* Lệnh `break` dùng để kết thúc sớm vòng lặp
    * [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_break.asp)
* Lệnh `continue` để bắt đầu một lần lặp mới
    * [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_break.asp)
* Câu lệnh `return`: kết thúc hàm, trả về một kết quả cho chương trình gọi nó
    * [Tham khảo chi tiết tại W3](https://www.w3schools.com/js/js_functions.asp)
* Câu lệnh `new`: khởi tạo cách thể hiện của một đối tượng
    * [Tham khảo thêm tại google]()



















