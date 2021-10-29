# Bài 7: Xủ lý sự kiện và biểu thức chính quy

# Nội dung bài học
1. PHẦN 1: XỬ LÝ SỰ KIỆN
1. PHẦN 2: BIỂU THỨC CHÍNH QUY

# [Link tài liệu + video: ](https://drive.google.com/drive/folders/1dEZ3YwIp_Qr2tsPIkagR9ymN468ic-jr?usp=sharing)

# PHẦN 1: GIỚI THIỆU VỀ ĐỐI TƯỢNG
## 1. Khái niệm sự kiện
* Sự kiện xuất hiện khi người sử dụng tương tác với trang web.Hầu hết cac sự kiện được tạo ra khi có thao tác với chuột hay bàn phím.
* Mỗi sự kiện được kết hợp với một đối tượng Sự kiện (Event). Đối tượng Event cung cấp thông tin về:
    * Kiểu sự kiện
    * Vị trí của con trỏ tại thời điểm xảy ra sự kiện
* Quá trình điều khiển sự kiện được gọi là xử lý sự kiện, xử lý sự kiện được thực thi ngay khi sự kiện được kích hoạt bởi các trình xử lý sự kiện.
* Trình xử lý sự kiện có thể là đoạn mã javascript viết trực tiếp hoặc một hàm viết sẵn. 

## 2. Chu trình sống của sự kiện
* Chu trình sống của sự kiện thông thường bao gồm các bước:
    * Hành động của người sử dụng hoặc một điều kiện tương ứng khi sự kiện xảy ra
    * Đối tượng Event được cập nhật ngay lập tức để phản ánh sự kiện
    * Phát sinh sự kiện 
    * Trình xử lý sự kiện tương ứng được gọi 
    * Trình xử lý sự kiện thực hiện các hành động và trả về kết quả
* Nổi bọt sự kiện: khi một sự kiện xuất hiện ở thành phần bên trong của một thẻ thì sự kiện đó tiếp tục xuất hiện ở thẻ bao bên ngoài nó. Ví du: nếu sự kiện onclick (sự kiện kích chuột) được đặt trong thẻ form và đồng thời trong thẻ button của form thì: khi sự kiện onlick kích hoạt trên button thì nó cũng tiếp tục kích hoạt trên form, khi đó trình xử lý sự kiện onlick trên button và trên form cùng được thực thi

## Điều khiển sự kiện
Cú pháp: 
* Trình điều khiển sự kiện như là thuộc tính của thẻ HTML:
```js
    <TAG eventHandler="JavaScript Code"> 
```
* Trình điều khiển sự kiện như là thuộc tính của đối tượng:
```js
    object.eventhandler = function; 
```

## Các sự kiện bàn phím
Sự kiện bàn phím xuất hiện khi phím trên bàn phím được nhấn hoặc thả ra.
 
Một số sự kiện bàn phím:
* `onKeyDown`: Xuất hiện khi nhấn phím xuống.
* `onKeyUp`: Xuất hiện khi nhả phím ra.
* `onKeyPress`: Xuât hiện sau khi phím đã được nhả ra

Ví dụ: 
```html
<!DOCTYPE html>
<html">
<body>
    <p>A function is triggered whenn the user is pressing a key in the input field.</p>

    <input type="text" onkeypress="myFunction()">

    <script>
        function myFunction() {
            alert("You pressed a key inside the input field");
        }
    </script>
</body>
</html>
```
Một số ví dụ thêm tại [w3schools.com](https://www.w3schools.com/js/js_events_examples.asp)
* [onkeydown](https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onkeydown)
* [onkeyup](https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onkeyup)
* [onkeypress](https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onkeypress)

## Các sự kiện chuột
Sự kiện chuột (Mouse) xuất hiện khi người xử dụng thao tác chuột trên thành phần của trang web

Môt vài sự kiện:
* `onMouseDown`: Xuất hiện khi phím chuột được nhấn xuống.
* `onMousUp`: Xuất hiện khi phím chuột được thả ra.
* `onClick`: xuất hiện sau khi hoàn thành nhấn chuột .
* `onDblClick`: xuất hiện khi nhấn đúp chuột 
* `onMouseOver` : xuất hiện khi di chuyển chuột qua vị trí của một thành phần web
* `onMouseOut`: xuất hiện khi di chuyển chuột dời khỏi vị trí của một thành phần web.

Ví dụ: [tại w3](https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_mouseover) 
```html
<!DOCTYPE html>
<html>

<body>

    <div onmouseover="mOver(this)" onmouseout="mOut(this)"
        style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
        Mouse Over Me</div>

    <script>
        function mOver(obj) {
            obj.innerHTML = "Thank You"
        }

        function mOut(obj) {
            obj.innerHTML = "Mouse Over Me"
        }
    </script>

</body>

</html>
```
Một số ví dụ thêm tại [w3schools.com](https://www.w3schools.com/js/js_events_examples.asp)
* [onmousedown](https://www.w3schools.com/jsref/event_onmousedown.asp)
* [onMousUp](https://www.w3schools.com/jsref/event_onmouseup.asp)
* [onClick](https://www.w3schools.com/jsref/event_onclick.asp)
* [onDblClick](https://www.w3schools.com/jsref/event_ondblclick.asp)
* [onMouseOver](https://www.w3schools.com/jsref/event_onmouseover.asp)
* [onMouseOut](https://www.w3schools.com/jsref/event_onmouseout.asp)

## Các sự kiện focus và selection
Sự kiện focus được kích hoạt khi một thành phần của form trở thành thành phần hoạt động hiện tại.

Sự kiện selection xuất hiện khi một thành phần được lựa chọn 
* `onFocus`: xuất hiện khi một thành phần trở thành thành phần hoạt động hiện tại
* `onBlur`: Xuất hiện khi thành phần hoạt động hiện tại không còn là thành phần hoạt động hiện tại nữa
* `onSelectStart`: xuất hiện khi hành động lựa chọn bắt đầu. 
* `onSelect`: Xuất hiện khi thay đổi thành phần được lựa chọn.

* Ví dụ sự kiện `focus`
```js
<!DOCTYPE html>
<html>

<body>
    Enter your name: <input type="text" onfocus="myFunction(this)">
    <p>When the input field gets focus, a function is triggerd which chanes the background-color.</p>
    
    <script>
        function myFunction(x) {
            x.style.background = "yellow";
        }
    </script>

</body>

</html>
```
Một số ví dụ thêm tại [w3schools.com](https://www.w3schools.com/js/js_events_examples.asp)
* [onfocus](https://www.w3schools.com/jsref/event_onfocus.asp)
* [onblur](https://www.w3schools.com/jsref/event_onblur.asp)
* [onSelectStart](#)
* [onselect](https://www.w3schools.com/Jsref/event_onselect.asp)

# PHẦN 2: BIỂU THỨC CHÍNH QUY
## 1. Khái niệm biểu thức chính quy
Biểu thức chính quy là một chuỗi các ký tự tạo thành một mẫu tìm kiếm.

Biểu thức chính quy có thể là một ký tự đơn hoặc một mẫu phức tạp hơn.

Biểu thức chính quy dùng mô tả những gì bạn đang tìm kiếm và có thể được sử dụng để thực hiện tất cả các hoạt động tìm kiếm văn bản và thay thế văn bản 

## 2. Cách tạo một biểu thức chính quy
Cách 1: biểu thức chính qui được viết trong căp //
```js
var rex = /exp/;
```
Cách 2: sử dụng đối tượng RegExp
```js
var rex = new RegExp("exp);
```

## 3. Các ký hiệu đặc biệt
![This is a alt text.](https://images.viblo.asia/fcaa9792-4ecb-4713-9932-b738f6be333e.png "This is a sample image.")

## 4. Làm việc với biểu thức chính quy
![This is a alt text.](https://images.viblo.asia/b4a97761-e3e9-414f-a88a-d9233c5443b6.png "This is a sample image.")


## 5. Ví dụ biểu thức chính quy
Kiểm tra độ mạnh mật khẩu:
```js
var rex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
```
Kiểm tra email:
```js
var rex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/;
```

[Tham khảo chi tiết tại viblo.asia](https://viblo.asia/p/bieu-thuc-chinh-quy-regex-trong-javascript-QpmleQ9mlrd)




