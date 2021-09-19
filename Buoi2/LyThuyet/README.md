# Nội dung bài học
1. Các thẻ tạo bố cục (layout) trang web
1. Thẻ chèn hình ành
1. Thẻ tạo siêu liên kết
1. Các thẻ tạo mẫu biểu (FORM)
1. Các thẻ trình bày trang web

## [Link Demo chi tiết](https://hackmd.io/@RwPAdllKTDKuTHG115tIOw/SJiXdYVQY)


## CÁC THẺ TẠO BỐ CỤC TRANG WEB

### HTML cung cấp một số thẻ ngữ nghĩa để tạo bố cục trang web: 
* `<header>` dùng để tạo vùng chứa banner.
* `<nav>` dùng tạo vùng chứa menu.
* `<section>` dùng để tạo vùng chứa nội dung.
* `<article>` dùng để tạo vùng độc lập chứa nội dung xác định.
* `<footer>` dùng để chứa footer cho trang web.

![This is a alt text.](https://bridgesystem.me/wp-content/uploads/2017/10/layouts.jpg "This is a sample image.")


## THẺ CHÈN HÌNH ẢNH
* Thẻ` <img>` dùng để chèn ảnh vào tài liệu HTML. Cú pháp của thẻ `<img>`
như sau:
`<img src=“url” alt = “some_text”>`
*  Ngoài 2 thuộc tính bắt buộc là `src` và `alt` thì thẻ `<img>` còn có một số thuộc
tính sau:

    * `width = “number”`: Xác định chiều rộng của ảnh.
    * `height = “number”`: Xác định chiều cao của ảnh.
    * `align = “left|right”`: Xác định vị trí của ảnh (Không hỗ trợ trong HTML5. Sử dụng CSS thay cho thuộc tính này).
    * Thuộc tính usemap của thẻ <img> dùng kết hợp với thẻ `<map>` và `<area>`.
    * Ví dụ minh họa chèn ảnh và sử dụng usemap:

```html
    <img src=“pic_mountain.jpg” height=“200” width=“300” usemap=“#imagemap” alt=“This is mountain”>
    <map name=“imagemap”>
        <area shape=“rect” coords=“0,0,200,200” href=“vd1.htm”>
        <area shape=“circle” coords=“250,100,50” href=“ex1.htm”>
    </map>
```

## THẺ TẠO SIÊU LIÊN KẾT
* Siêu liên kết là liên kết từ trang web này sang trang web khác
hoặc từ phần này sang phần khác của cùng một trang web.
* Để tạo siêu liên kết chúng ta sử dụng thẻ `<a>`
* Cú pháp của thẻ `<a>`

```html
    <a href=“url” rel=“nofollow” title=“text” tabindex=“n” accesskey=“character” target=“_blank|_parent|_seft|_top”>text</a>
```

* `href=“url”`: chỉ ra đích của liên kết. Nó có thể là địa chỉ của một
trang web hoặc là một bookmark.
* `rel=“nofollow”`: Báo cho bộ máy tìm kiếm của Google là không
đi theo liên kết này.
* `title=“text”`: Hiển thị dòng văn bản text khi di chuyển chuột vào
liên kết.
* Tạo liên kết đến địa chỉ email.

```html
    <a href=“mailto:someone@example.com”>
    Gửi mail
    </a>
```

* Tạo liên kết đến địa chỉ phone:

```html
    <a href="tel:123-456-7890">CLICK TO CALL</a>
```

## THẺ `<FORM>`
* Được sử dụng để tạo form trong HTML cho người sử
dụng nhập dữ liệu.
* Cú pháp của thẻ form

```html
    <form action=“url” method=“post|get” enctype=“multipart/form-data|text/plain”>
        <input ...>
        <input ...>
    </form>
```

* `<input>` là thành phần được sử dụng thông dụng nhất. Tùy thuộc vào giá trị của thuộc tính `type` mà nó có chức năng và cách hiển thị khác nhau.
* `<label>` là thành phần được sử dụng để tạo nhãn cho một số thành phần khác của form. Thuộc tính for của thẻ `<label>` phải trùng với giá trị thuộc tính id của thành phần cần đặt nhãn.

Ví dụ:

```html
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname">
    <br><br>
    <input type="submit" value="Submit">
```

<br>

* `<select>` kết hợp với `<option>` dùng để tạo danh sách đổ xuống (drop - down list).

Ví dụ:

```html
    <label for="cars">Choose a car:</label>
    <select id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select>
```

<br>

* `<textarea>` dùng để tạo vùng nhập văn bản có nhiều dòng.

Ví dụ:

* `<textarea>` dùng để tạo vùng nhập văn bản có nhiều dòng.
Ví dụ:

```html
    <textarea name="message" rows="10" cols="30">
        Toàn dân phòng chống dịch covid 19.
    </textarea>
```


* `<button>` dùng để tạo nút lệnh.

```HTML
    <button type="button">Click Me!</button>
```

* `<fieldset>` và `<legend>` dùng để nhóm các thành phần có liên quan của form thành nhóm và tạo chú thích cho nó.

```HTML
    <fieldset>
        <legend>Personalia:</legend>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
    </fieldset>
```

* `<datalist>` dùng để định nghĩa sẵn một danh sách các giá trị cho thành
phần `<input>`. Thuộc tính list của `<input>` phải trùng với id của `<datalist>`.

Ví dụ:

```html
    <input list="browsers">
        <datalist id="browsers">
            <option value="Internet Explorer">
            <option value="Firefox">
            <option value="Chrome">
            <option value="Opera">
            <option value="Safari">
    </datalist>
```
 
<br>

## CÁC LOẠI (TYPE) INPUT CHÍNH

* `<input type=“text”>` dùng để tạo hộp nhập văn bản 1 dòng

Ví dụ:

```html
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname">
```
 
<br>

* `<input type=“password”>` dùng để tạo hộp nhập password.

Ví dụ: 

```html
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username"><br>
    <label for="pwd">Password:</label><br>
    <input type="password" id="pwd" name="pwd">
```
 
<br>

* `<input type=“submit”>` dùng để tạo nút submit form

Ví dụ: 

```html
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
```

<br>

* `<input type=“reset”>` dùng để tạo nút reset các thành phần của form về giá trị mặc
định.

Ví dụ:

```html
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
    <input type="reset">
```
 
<br>

* `<input type=“button”>` dùng để tạo nút lệnh.

Ví dụ

    <input type="button" onclick="alert('Hello World!')" value="Click Me!">
 
<br>

* `<input type=“radio”>` dùng để tạo nút radio (đài).

```html    
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label><br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label><br>
    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Other</label>
```

<br>

* `<input type=“checkbox”>` dùng để tạo nút checkbox (hộp kiểm).
 Ví dụ

```html
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> I have a bike</label><br>
    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
    <label for="vehicle2"> I have a car</label><br>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
    <label for="vehicle3"> I have a boat</label>
```
 
<br>

* `<input type=“color”>` dùng để tạo hộp nhập màu.
 
 Ví dụ

```html
    <label for="favcolor">Select your favorite color:</label>
    <input type="color" id="favcolor" name="favcolor">
    <input type="submit" value="Submit">
```
 
<br>

* `<input type=“email”>` dùng để tạo hộp nhập email, một số trình duyệt sẽ validate dữ liệu email khi submit form.
 
 Ví dụ

```html
    <label for="email">Enter your email:</label>
    <input type="email" id="email" name="email">
    <input type="submit" value="Submit">
```
 
<br>

* `<input type=“file”>` dùng lựa chọn file với nút duyệt Choose File để chọn file cần upload.
 
 Ví dụ
 
 ```html
    <label for="myfile">Select a file:</label>
    <input type="file" id="myfile" name="myfile"><br><br>
   <input type="submit" value="Submit">
```

<br>

* `<input type=“date”>` dùng để tạo hộp nhập ngày. Có thể dùng thuộc tính min và max để hạn chế khoảng thời gian.

 Ví dụ

```html
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday">
    <input type="submit" value="Submit">  
```

<br>

* `<input type=“month”>` dùng để nhập tháng và năm.
 
 Ví dụ

```html
    <label for="bdaymonth">Birthday (month and year):</label>
    <input type="month" id="bdaymonth" name="bdaymonth">
    <input type="submit" value="Submit">
```
 
<br>

* `<input type=“time”>` dùng để nhập thời gian
 
Ví dụ
  
```html
    <label for="appt">Select a time:</label>
    <input type="time" id="appt" name="appt">
    <input type="submit" value="Submit">  
```
 
<br>

* `<input type=“week”>` cho phép người dùng chọn nhập tuần và năm.
 
 Ví dụ
 
```html
    <label for="week">Select a week:</label>
    <input type="week" id="week" name="week">
    <input type="submit" value="Submit">
```
 
<br>


* `min=“m”, max=“n”` dùng để xác định giá trị nhỏ nhất và lớn nhất cho trường nhập liệu. 

```html
        <label for="datemax">Enter a date before 1980-01-01:</label>
        <input type="date" id="datemax" name="datemax" max="1979-12-31"><br><br>
        <label for="datemin">Enter a date after 2000-01-01:</label>
        <input type="date" id="datemin" name="datemin" min="2000-01-02"><br><br>
        <label for="quantity">Quantity (between 1 and 5):</label>
        <input type="number" id="quantity" name="quantity" min="1" max="5">
```

<br>

* `value=“xyz”` dùng để khởi tạo giá trị ban đầu cho trường input.
 
 Ví dụ

```html 
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
```

<br>


* readonly dùng để thiết lập trường input chỉ đọc.

* size=“n” dùng để xác định độ rộng của trường nhập liệu. Giá trị mặc định của thuộc tính này là 20. 
 Ví dụ

```html  
        <input type="text" id="fname" name="fname" value="John" readonly>
        <input type="text" id="fname" name="fname" size="50">
```

<br>

* `maxlength=“n”`  dùng để xác định số kí tự tối đa có thể nhập cho trường input.
 Ví dụ

```html
        <input type="text" id="pin" name="pin" maxlength="4" size="4">
```

<br>

* `pattern=“biểu thức chính quy”`  dùng để xác định khuôn mẫu của trường nhập dữ liệu.
 
 Ví dụ

```html
    <input type="text" id="country_code" name="country_code"
    pattern="[A-Za-z]{3}" title="Three letter country code">
    placeholder=“abc” dùng gợi ý cho trường nhập dữ liệu. 
    <input type="tel" id="phone" name="phone"
    placeholder="123-45-678"
    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
```


<br>

* `pattern=“biểu thức chính quy”`  dùng để xác định khuôn mẫu của trường nhập dữ liệu.

 Ví dụ

```html
    <input type="text" id="country_code" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code">
    placeholder=“abc” dùng gợi ý cho trường nhập dữ liệu.
    <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
```


<br>


* `<input type=“url”>` dùng để nhập địa chỉ url. Một số trình duyệt sẽ kiểm tra tính hợp lệ của url khi submit form.
 
 Ví dụ

```html 
    <label for="homepage">Add your homepage:</label>
    <input type="url" id="homepage" name="homepage">
    <input type="submit" value="Submit">
```

<br>

* autocomplete=“on|off” dùng để xác định trường nhập dữ liệu có được trình duyệt gợi ý điền bằng những giá trị đã nhập trước đó hay không. 

Ví dụ

```html
    <input type="email" id="email" name="email" autocomplete="off">
    <input type="email" id="email" name="email" autocomplete="on">
```

<br>



