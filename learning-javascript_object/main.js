
/* -------------------**** Đối tượng (Object) _ IMPORTANT ****-------------------
*/
var keyID = 'ID';

var myInfo = {
    firstName: 'Huy',
    lastName: 'Vo',
    age: 25,
    address: 'TPHCM, VN',
    // thêm key bằng biến đã tạo trước
    [keyID]: '024683579',
    //  tạo key là 1 function
    getName: function() {
        return this.firstName;  // "this" ở đây là myInfo
    }
};

//  Thêm Key + value sau khi object được tạo
myInfo.email = 'huyads257@gmail.com';

//  thêm khi có ký tự đặc biệt
myInfo['cell-phone'] = '0123456789';

//  Lấy Value
//  Cách 1:
console.log(myInfo.firstName);
//  Cách 2:
console.log(myInfo['lastName']);

console.log(myInfo);

// Yêu cầu lấy ra được value của address bên trên (TPHCM, VN) dựa vào
// 2 biến myInfo & myKey
var myKey = 'address';
console.log(myInfo[myKey]);

//  Xóa value trong Object
delete myInfo.age;
console.log(myInfo);

//  lấy key là 1 function
console.log(myInfo.getName())
//  Khi tạo key trong Object
//  Function => Phương thức (method)
//  Others  => Thuộc tính (property)


//  ------------------------- Object constructor -------------------------
//                            Xây dựng đối tượng

//  Object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    //  Phương thức (function) lấy full name
    this.getName = function() {
        //  this ở đây chỉ sử dụng trong function getName này
        return `${this.firstName} ${this.lastName}`
    }
};

//  Tạo 2 đối tượng có chung trường dữ liệu
//  truyền dữ liệu theo tham số tương ứng

//  Đối tượng 1
var author = new User('Huy', 'Vo', 'avatar');
//  Đối tượng 2 
var user = new User('Iron', 'Man', 'avatar');

console.log('Doi tuong:', author)
console.log('Doi tuong:', user)
//  In ra constructor của đối tượng
console.log(author.constructor)

//  thêm thuộc tính cho đối tượng được chỉ định
author.title = 'GVCH';
user.comment = 'ABCXYZ';

//  In ra fullname với phương thức (function) getName()
console.log('Doi tuong:', author.getName())
console.log('Doi tuong:', user.getName())



//  ------------------------- Object prototype -------------------------
//  what's this? => khuôn mẫu để tạo nên đối tượng

//  tạo 1 thuôc tính mới vào 2 đối tượng trên (author & user)
//  và thuộc tính này sẽ nằm ở phần Prototype của object constructor

//  tạo thuộc tính className
User.prototype.className = 'New Class';

//  tạo phương thức 
User.prototype.getClassName = function() {
    return this.className;
}

console.log(author.className)
console.log(author.getClassName())
console.log(user.className)



//  ------------------------- Đối tượng Date -------------------------

//  type of : object (sử dụng cách này mới truy xuất được date)
var date = new Date();

//  type of : string
// var date = Date();

var year = date.getFullYear();
//  mặc định tháng 1 hàm month sẽ in ra là 0 - 12 => 11
// nên +1 để hợp lý hơn
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var minutes = date.getMinutes();
var second = date.getSeconds();



console.log('Today:',`${day}/${month}/${year}`)
console.log('Now:', `${hour}:${minutes}:${second}`)


//  ------------------------- Math Object -------------------------
/*
    - Math.PI
    - Math.round()
    - Math.abs()
    - Math.ceil()
    - Math.floor()
    - Math.random()
    - Math.min()
    - Math.max()
 */
//  Số PI
console.log(Math.PI)

//  Làm tròn số
console.log(Math.round(1.5))    // 1.3 => 1, 1.5 => 2

//  Trị tuyệt đối
console.log(Math.abs(2.1))

//  Làm tròn trên
console.log(Math.ceil(4.1))     //  4.1 => 5, 4.000001 => 5

//  Làm tròn dưới
console.log(Math.floor(4.99999999))       //  4.9 => 4, 4.99999999 => 4

//  số < 1 - random
console.log(Math.random())

var random = Math.floor(Math.random() * 100)
if (random < 5) {
    console.log('Success')
} else {
    console.log('Fail')
}

console.log(Math.min(50, -1, -1000, 40, 200))
console.log(Math.max(50, -1, -1000, 40, 200))




//  ------------------------- IF __ ELSE -------------------------

var date = 2;
if (date === 2) {
    console.log('Today is Monday')
} else if (date === 3) {
    console.log('Today is Tuesday')
} else if (date === 4) {
    console.log('Today is Wednesday')
}



//  --------------------- Câu lệnh rẽ nhánh - Switch ---------------------
//  Example 1
var date = 2;
switch(date) {
    case 2:
        console.log('Hom nay la thu 2');
        break;
    case 3:
        console.log('Hom nay la thu 2');
        break;      // Nếu không có break, gặp case đúng nó sẽ chạy hết
                    // những case dưới đó cho đến khi gặp break
    case 4:
        console.log('Hom nay la thu 2');
        break;
}

//  Example 2
var value = 9;
switch(value) {
    case 2:
    case 3:
    case 4:
        console.log('Hom nay la thu 2, 3, 4');
        break;
    case 5:
        console.log('Hom nay la thu 5');
        break;
    //  Những trường hợp khác ở trên
    default: 
        console.log('Unknown');
}





//  --------------------- Toán tử 3 ngôi ---------------------
//  --------------------- Ternary Operator ---------------------

var course = {
    name: 'Javascript',
    coin: 250
}

// if (course.coin > 0) {
//     console.log(`${course.coin} coins`)
// } else {
//     console.log('Miễn phí')
// }

//  viết lại code trên bằng toán tử 3 ngôi
            // if DK      =>    kết quả DK đúng      => kết quả DK sai
var result = course.coin > 0 ? `${course.coin} coins` : 'Miễn phí'
console.log(result)

// Example
var a = 1;
var b = 2;
//  a > 0 thì lấy giá trị a, ngược lại lấy giá trị của b
var c = a > 0 ? a : b;
console.log(c)

// exercise
// tạo hàm getCanVoteMessage, hàm này có 1 tham số là age. 
// Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu, 
// ngược lại hàm trả về Bạn chưa được bỏ phiếu.
// Làm bài
function getCanVoteMessage(age) {
    return age > 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu'
}

// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'