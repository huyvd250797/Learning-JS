
/** I. hàm built-in
    1. alert
    2. console
    3. confirm -> Xác nhận VD: xác nhận độ tuổi
    4. prompt -> input nhập giá trị
    5. set Timeout -> cho 1 đoạn code chạy sau 1 khoản thời gian (ms)
    6. setInterval ->  cho 1 đoạn code chạy cứ sau 1 khoản thời gian (ms)
 */ 

// confirm('Xac nhan do tuoi');
// prompt('Xac nhan do tuoi');

// sau 1000ms (1s) thì hiện thông báo alert
// setTimeout(function() {
//     console.log('Thong bao')
// },1000)

// cứ mỗi 1000ms (1s) thì hiện thông báo alert
// setInterval(function() {
//     console.log('Thong bao')
// }, 1000);

/* II. Toán tử
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison
    4. Toán tử logic - Logical
 */    

// // VD: 1. Toán tử số học - Arithmetic
// var a = 1 + 2;
// console.log(a)

// // VD: 2. Toán tử gán - Assignment
// var fullName = 'Vo Duc Huy'

// // VD: 3. Toán tử so sánh - Comparison
// var a = 1;
// var b = 2;

// if(a == b) {
//     console.log('TRUE');
// }

// // VD: Toán tử logic - Logical
// var a = 1;
// var b = 2;

// if (a > 0 && b > 0) {
//     console.log('a & b > 0')
// }

/*  1. Toán tử số học - Arithmetic

+       ->       Cộng
-       ->       Trừ
*       ->       Nhân
**      ->       Lũy thừa
/       ->       Chia
%       ->       Chia lấy dư
++      ->       Tăng giá trị lên 1 số
--      ->       Giảm giá trị đi 1 số

var a = 4;
var b = 3;
var c = a % b;

a++;    
console.log(a)
*/

/* 2. Toán tử gán - Assignment

=       x = y       x = y
+=      x += y      x = x + y
-=      x -= y      x = x - y
*=      x *= y      x = x * y
/=      x /= y      x = x / y
**=     x **= y     x = x ** y

var x = 4;
var y = 2;

x += y;
console.log(x)
*/

/* Toán tử ++ --
    Prefix (tiền tố - tính trước, chạy sau) 
    & 
    Postfix (hậu tố - chạy trước, tính sau)


var a = 6;

//  Việc 1: + 1 cho a, a = a + 1 => a = 7
//  Việc 2: Trả về a sau khi được + 1
// var output = ++a;
// console.log('output: ', output);

// Việc 1: `a copy`, `a copy` = 6
// Việc 2: trừ 1 của a, a = a - 1 => a = 5
// Việc 3: Trả về biến `a copy` 
// var output = a--;
// console.log(output);

var number = 6;
var numbers = 6;

var output = number++ + --number
//             6      +     7-1

var outputs = ++numbers * 2 - numbers-- *    2
//              7      * 2 -     7      * 2
console.log(outputs)
 */

/*  Toán tử nối chuỗi - String operator
  
var firstName = 'Huy';
    var lastName = 'Vo';
    
    console.log(firstName + ' ' + lastName);
    
    var myName = 'Huy';
    
    // myName = myName + 'Vo';
    myName += 'Vo'
    
    console.log(myName);
*/

/*  3. Toán tử so sánh
==      ->      Bằng
!=      ->      Không bằng
>       ->      Lớn hơn
<       ->      Nhỏ hơn
>=      ->      Lớn hơn hoặc bằng
<=      ->      Nhỏ hơn hoặc bằng


var a = 1;
var b = 2;

if (a == b) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}
 */

/* Boolean


var a = 1;
var b = 2;

var isSuccess = a > b;
console.log(isSuccess);
*/

/* If - Else
    Các giá trị FALSE
    -   0
    -   false
    -   '' - ""
    -   undefined
    -   NaN
    -   null
    var fullName = 'HuyVo';
    
    if (fullName) {
        console.log('TRUE');
    } else {
        console.log('FALSE');
    }
 */

/* 4. Toán tử logic
    && - And
    || - or
    ! -
 */

/* ------------ KIỂU DỮ LIỆU JS ------------
    1. Dữ liệu nguyên thủy - Primitive Data
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
    2. Dữ liệu phức tạp - Complex Data
        - Function
        - Object
    // Number
    var a = 1;
    var b = 1.5;
    
    // String
    var fullName = 'Huy Vo';
    // tạo dấu nháy đơn hoặc kép
    var fullName = 'Huy \'Vo'; 
    var fullName = "Huy 'Vo"; 
    var a = '1';
    
    // Boolean
    var isSuccess = true;
    
    // Undefined type
    var age;
    
    // NULL
    var  isNull = null;
    
    // symbol
    var id = Symbol('id') // unique
    
    // Function
    var myFunction = function() {
        console.log('Hello World');
    }
    
    // Gọi function
    myFunction();
    
    // Object types
    
    var myObject = {
        name: 'Huy Vo',
        age: 25,
        address: 'TPHCM',
        myFunction: function() {
    
        }
    };
    
    console.log('myObject: ', myObject)
    
    // Array
    var myArray = [
        'Javascript',
        'PHP',
        'ReactJS'
    ];
    console.log(myArray)
    
    // Cách xem kiểu dữ liệu
    console.log('typeof: ',typeof isSuccess)
 */

/* Toán tử so sánh 2
    ===
    !==
    // sử dụng == : chỉ quan tâm so sánh value
    // sử dụng === : so sánh cả data type, (bằng tuyệt đối)
    // sử dụng !== : tương tự - ngược lại
    
    var a = 1;
    var b = '1';
    console.log(a === b)
 */


// Hiểu sâu hơn câu lệnh dk
/*

 
var a = 3;
var b = 2;
/**
 * 0
 * ''
 * null
 * undefined
 * NaN
 * false
 // &&: Đọc từ trái sang phải - gặp 1 trong 6 giá trị trên thì lấy 
 // đưa thẳng vào biến => false
 var result = 'A' && null && 'AA';
 
 
 if (result) {
     console.log('DUNG')
 } else {
     console.log('SAI')
 }
 
 // ||: Đọc từ trái sang phải - gặp các giá trị KHÁC 6 giá trị trên thì lấy
 // đưa thẳng vào biến => true
 */






 /* ----------------------- HÀM -----------------------
    Quy tắc đặt tên hàm
    a-z, A-Z, 0-9, _, $
    function showDialog() {
        alert('Hello')
    }
*/

/*

function writeLog(message, message2) {
    console.log(message)
    console.log(message2)
}

writeLog('text', 'text_2');

-----
function writeLog() {
    var myString = '';

    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}

writeLog('Log 1' ,'Log 2', 'Log 3',6 ,7)
 */

/* RETURN
 */
// var isConfirm = confirm('Message?');

// console.log(isConfirm)


// // VD tạo hàm + 2 số
// function add(a, b) {
//     return a + b;
// }

// var result = add(2, 8);
// console.log(result);

/* Các loại hàm
    1. Declaration function
    2. Expression function
    3. Arrow function

    // 1. Declaration function
    
    // host: có thể gọi hàm trước khi được định nghĩa
    showMessage();
    
    // Định nghĩa hàm showMessage
    function showMessage() {
        console.log('Declaration function');
    }
    
    // 2. Expression function
    // Không host
    var showMessage2 = function testName() {
        console.log('Expression function');
    }
    /* 
    setTimeout(function testName() {
    
    });
    
    var myObject = {
        myFunction: function testName() {
    
        }
    }
    
*/






/* -------------------- CHUỖI --------------------

// Có 2 cách tạo chuỗi
// 1.
var fullName = 'Huy Vo';
// 2.
var fullName = new String('Son Dang');

// trường hợ sử dụng backslash (\)
var fullName = 'Iron man is \'superhero\'';
//  tạo dâu backflash \
// var fullName = 'Day la dau \\';

// Xem độ dài chuỗi
console.log(fullName.length);

//Template string ES6
var firstName = 'Huy';
var lastName = 'Vo';
console.log('Toi la:', firstName + ' ' + lastName);
// code trên sẽ thành
console.log(`Toi la: ${firstName} ${lastName}`);
 */

/* Làm việc với chuỗi
    1. Length
    2. Find index
    3. Cut string
    4. Replace
    5. Convert to upper case
    6. Convert to lower case
    7. Trim
    8. Split
    9.Get a character by index
*/

var myString = ' Hoc  JS cung HVO! JS!';
//  1. Length
console.log(myString.length);

//  2. Find index
console.log(myString.indexOf('JS'));    // Tìm chuỗi JS tại vị trí
//  ký tự số là sau JS đầu tiên
console.log(myString.indexOf('JS',7));    // Tìm chuỗi JS tại vị trí sau JS đầu tiên
//  tìm vị trí chuỗi cuối cùng
console.log(myString.lastIndexOf('JS'));
// Tìm kiếm 
console.log(myString.search('JS'));

//  3. Cut string
// Cắt lấy chuỗi JS (trái sang phải)
console.log(myString.slice(4,6))        // slice(4,6) => slice(start, end)
// Cắt lấy chuỗi JS (phải sang trái)
console.log(myString.slice(-3,-1))        // slice(4,6) => slice(start, end)

//  4. Replace
// Replace JS
console.log(myString.replace('JS', 'Javascript'))

// Replace all JS
console.log(myString.replace(/JS/g, 'Javascript'))

//  5. Convert to upper case
console.log(myString.toUpperCase())
//  6. Convert to lower case
console.log(myString.toLowerCase())

// 7. Trim
console.log(myString.trim())

// 8. Split
//  tách chuỗi thành mảng
var laguages = 'JS, PHP, Ruby';

console.log(laguages.split(', '))

//  tách tất cả ký tự
console.log(laguages.split(''))

// 9.Get a character by index
const myString2 = 'Huy Vo';
console.log(myString2.charAt(2))
console.log(myString2[2])




/* ------------------- Kiểu dữ liệu số -------------------
 */
Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'




// ------------------- Làm việc với số -------------------

// Phép tính không hợp lệ
var result = 20 / 'ABC';
console.log(result)

// check NaN
console.log('NaN is', isNaN(result))

// làm việc với số
var age = 18;
var PI = 3.14;

var myString = age.toString();

console.log(myString)

// Làm tròn số
console.log(PI.toFixed(2))      //toFixed(2): Làm tròn 2 chữ số thập phân





// Tạo hàm isNumber, 
// hàm này dùng với mục đích kiểm tra xem một giá trị 
// có phải là 1 số hay không
// Hàm isNumber có 1 tham số, hãy đặt tên nó là value
// Khi value có kiểu số, hàm sẽ trả về true, ngược lại trả về false
// Expected results:
function isNumber(value) {
    return typeof value == 'number'
}
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false



// Như VD trên nhưng đảm bảo đối số NaN ko được trả về true
function isNumber(value) {
    if(isNaN(value)) {
        return false;
    } else {
        return typeof value == 'number';
    }
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false








