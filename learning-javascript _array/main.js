
/* -------------------**** MẢNG (ARRAY) _ IMPORTANT ****-------------------
*/

var languagess = [
    'Javascript',               //  0
    'PHP',                      //  1
    'Ruby',                     //  2
    null,
    undefined,
    function() {

    },
    {},
]; 

console.log(languagess)
// Kiểm tra biến có phải array hay ko
console.log(Array.isArray(languagess))

// Truy xuất mảng
// Xem độ dài
console.log(languagess.length)

// lấy giá trị index 
console.log(languagess[2])      //  [2] => Ruby


//  Làm việc với mảng
/*
    1.  To String
    2.  Join
    3.  Pop
    4.  Push
    5.  Shift
    6.  Unshift
    7.  Splicing
    8.  Concat
    9   Slicing

 */

var programLanguges = [
    'Javascript',               
    'PHP',                      
    'Ruby',
    '.NET',
];
console.log('Mang ban dau:',programLanguges)

//  1.  To String
console.log(programLanguges.toString())

//  2.  Join
console.log(programLanguges.join(' - '))     // join('[dấu ngăn cách phần tử]')

//  3.  Pop: Xóa phần tử cuối mảng => trả về phần tử đã xóa
console.log(programLanguges.pop())
//  In ra mảng ban đầu => phần tử cuối đã bị xóa
console.log(programLanguges)

//  4.  Push: Thêm 1 hoặc nhiều phần tử vào cuối mảng
console.log(programLanguges.push('Dart', 'Java'))
console.log(programLanguges)

//  5. Shift: Xóa phần tử ở đầu mảng => trả về phần tử đã xóa
console.log(programLanguges.shift())
console.log(programLanguges)

//  6. Unshift: Thêm phần tử ở đầu mảng => trả về phần tử đã xóa
console.log(programLanguges.unshift('C#', 'C++'))
console.log('Mang dung cho muc 7:',programLanguges)

//  7.  Splicing: Xóa phần tử bất kỳ trong mảng && Chèn phần tử mới vào mảng
//  Chọn phần tử thứ i của mảng
//  splice(2) => (2) đặt con trỏ vào i = 2 của mảng
//  splice(2,3) =>(2,3) từ vị trí thứ 2 đã chọn ở trên 
//      => xóa thêm 3 phần tử bắt đầu từ 2
//  splice(2, 3, 'SQL') => chèn SQL vào ngay vị trí con trỏ

//  splice([vị trí con trỏ - i], [xóa n phần tử], [phần tử cần chèn])
programLanguges.splice(2, 3, 'SQL','Oracle')
console.log('Mang dung cho muc 8:',programLanguges)


//  8.  Concat: Nối mảng
var programLanguges2 = [
    'C',
    'CSS',
];
//  Nối mảng
//  [Mảng gốc].concat([Mảng nối])
console.log('Mang dung cho muc 9:', programLanguges.concat(programLanguges2))

//  9.  Slicing: Cắt phần tử của mảng
//  slice(1, 5) => trỏ chuột vị trí i = 1, cắt đến đầu vị trí i = 5 (không cắt i = 3)
//  slice(1) => cắt từ vị trí 1 đến hết mảng
console.log(programLanguges.slice(1, 5))
// Lấy phần tử cuối
console.log(programLanguges.slice(-1))








