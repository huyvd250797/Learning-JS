/* ------------- LOOP - Vòng Lặp -------------+
    for: lặp với điều kiện đúng
    for/in: lặp qua key đối tượng
    for/of: lặp qua value của đối tượng
    while: Lặp khi điều kiện đúng
    do/while: Lặp ít nhất 1 lần, sau đó lặp khi đk đúng
 */


/*  FOR
 */
console.log('------------- For -------------')

//  in ra con số tăng dần từ 1-1000
// for (var i = 1; i <= 1000; i++) {
//     console.log(i)
// }

/* 1. Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. 
Hàm này sẽ trả về một mảng gồm length phần tử, 
các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ 
min tới max.

Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
 */

function getRandNumbers(min, max, length) {
    //  biến array là 1 mảng
    var array = [];
    for(var i = 1; i < length ; i++) {
        array[i] = Math.random() * (max - min) + min
    }
    return array;
}
getRandNumbers(5,100,3);


/*  2. Cho trước mảng numbers, 
hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
 */

function getTotal(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

// Expected results
console.log(getTotal([1, 2, 3])) // Output: 6
console.log(getTotal([4, 5, -3])) // Output: 6
console.log(getTotal([4, 5, 3, 5])) // Output: 17


/*  3. lấy các phần tử của mảng
*/
var myArray = [
    'PHP',
    'Javascript',
    'Ruby',
    'Java',
    'Python'
];

//  khai báo biến arrLength là độ dài mảng myArray
var arrLength = myArray.length;

for (var i = 0; i < arrLength; i++) {
    console.log(myArray[i])
}

/*
Cho trước mảng orders là danh sách chứa các khóa học, 
các mặt hàng này được thể hiện dưới dạng object 
và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.

Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị 
của đơn hàng.
*/

console.log('bai tap 3')
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

//  Tạo hàm tham số arr
function getTotal(arr) {
    //  tạo biến gắn length arr
    var arrLength = arr.length
    var total = 0;
    for (var i = 0; i < arrLength; i++) {

        total += arr[i].price;
    }
    return total;
}


// Expected results:
console.log(getTotal(orders)) // Output: 8700000




/* ------------- FOR / IN -------------
lấy ra Key của đổi tượng
 */
console.log('------------- For / IN -------------')

console.log('----- OBJECT -----')
var myInfo = {
    name: 'Huy Vo',
    age: 25,
    address: 'TPHCM'
}

//  object có bao nhiêu key sẽ chạy bấy nhiêu lần
for (var key in myInfo) {
    //  Lấy key của object
    // console.log(key)

    // lấy value của object
    console.log(myInfo[key])
}

console.log('----- ARRAY -----')
var languages = [
    'Javascript',
    'Java',
    'PHP',
    'C++'
];

for (var keys in languages) {
    //  lấy key của array sẽ là vị trí phần tử 0,1,2...
    // console.log(keys)

    //  lấy value của array
    console.log(languages[keys])
}

console.log('----- STRING -----')

var languages1 = 'Javascript'   

for (var key1 in languages1) {
    //  lấy key là các vị trí phần tử trong chuỗi, 0,1,2...
    // console.log(key1)

    //  lấy value của chuỗi
    console.log(languages1[key1])
}

console.log('** Bai tap **')
//Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

function run(object) {
    var arr = [];
    for (var key in object) {
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));



/* ------------- FOR / OF ------------- 
*/
console.log('------------- For / OF -------------')


console.log('----- ARRAY -----')
var programLanguage = [
    'Javascript',
    'PHP',
    'Ruby',
    'Java'
];

for (var value of programLanguage ) {
    //  Lấy ra được giá trị của mảng
    console.log(value)
}


console.log('----- STRING -----')
var programLanguage1 = 'Javascript';

for (var value1 of programLanguage1 ) {
    //  Lấy ra được giá trị của mảng
    console.log(value1)
}


console.log('----- OBJECT -----')
console.log('**Lưu ý: Không sử dụng cách như Array, String được **')

var myInfo1 = {
    name: 'HuyVo',
    age: 25,
    address: 'TPHCM'
}

// Sử dụng for of với Object

//  Lấy key của Object myInfo1 => sẽ biến object này thành mảng
console.log(Object.keys(myInfo1))

//  Lấy value của Object myInfo1 => sẽ biến object này thành mảng
console.log(Object.values(myInfo1))

//  Sau khi đã thành mảng => xử lý như cách làm việc với mảng
for (var value2 of Object.keys(myInfo1)) {
    //  Lấy key
    // console.log(value2)

    //  Lấy value
    console.log(myInfo1[value2])
}




console.log('------------- While -------------')

var myArray1 = [
    'Javascript',
    'PHP'
]

var arrayLength = myArray1.length;

var i = 0;

while (i < arrayLength) {
    console.log(myArray1[i])
    i++;
}


console.log('------------- DO WHILE -------------')
// Lần đầu tiên chay không cần DK
// áp dụng điều kiện ở lần chạy thứ 2
var i = 0;

do {
    i++;
    console.log(i)
} while (i < 10)


// VÍ DỤ
var isSuccess = false;
var i = 0;

do {
     i++;
     console.log('Thử lại lần ' + i);

     // thành công
     if (false) {
        isSuccess = true;
     }
} while (!isSuccess && i < 3)


console.log('------------- BREAK & CONTINUE -------------')


console.log('----- BREAK -----')
for (var i = 0; i < 10; i++) {
    console.log(i);

    //  nếu chạy tới giá trị i >= 5 thì sẽ thoát vòng lặp
    if (i >= 5) {
        break;
    }
}

console.log('----- CONTINUE -----')
for (var i = 0; i < 10; i++) {
    //  lấy những giá trị là số chẵn
    //  Nếu i/2 dư khác giá trị 0 thì tiếp tục tăng giá trị i (skip)
    //  và chạy tiếp cho đến khi i%2 = 0 thì mới chạy xuống dưới 
    if(i%2 !== 0) {
        continue;
    }
    console.log(i);
}


console.log('----- NESTED LOOP (VÒNG LẶP LỒNG NHAU) -----')

console.log('Cho 1 mảng chứa 3 mảng con [1,2], [3,4], [5,6]')
console.log('Mong muốn: in ra mảng [1,2,3,4,5,6]')
var myArray2 = [
    [1, 2],
    [3, 4],
    [5, 6]
]

var myArray2Length = myArray2.length;

for (var i = 0; i < myArray2Length; i++) {
    //  j phải nhỏ hơn độ dài mảng con :  myArray[i].length
    for (var j = 0; j < myArray2[i].length; j++) {
        //  mảng con myArray2[i], muốn lấy giá trị của mảng => 
        // biến[biến tăng dần] VD: myArray[i]
        // => mảng con hiện tại là myArray2[i], lấy giá trị thì thêm [j]
        console.log(myArray2[i][j])
    }
}


// console.log('------------- MORE LOOPS -------------')

// console.log('Muốn xuất ra danh sách từ 100 -> 0')
// for (var i = 100; i >= 0; i--) {
//     console.log(i)
// }

// console.log('Muốn xuất ra danh sách từ 0 - 100 cách nhau 5 giá trị (0 -> 5 -> 15)')

// for (var i = 0; i <= 100; i += 5) {
//     console.log(i)
// }


console.log('------------ RECURSION (ĐỆ QUY) ------------')

console.log("['a', 'b', 'c', 'a', 'b', 'c']")
console.log("Yêu cầu xuất ra mảng ['a', 'b', 'c']")

var ar = ['a', 'b', 'c', 'a', 'b', 'c'];

console.log('***** Không dùng đệ quy *****')
//  Set: những element, value của Set là UNIQUE (DUY NHÂT)
console.log(new Set(ar)) // output => {'a', 'b', 'c'}
//  ... : sẽ loại bỏ các dạng, dấu ngoặc hiện tại là ngoặc {}
//  [...] : sau khi được loại bỏ ngoặc {}, ta thêm [] ở 2 đầu
//  => output : ['a', 'b', 'c']
console.log([...(new Set(ar))])

console.log('***** Dùng đệ quy *****')

function loop(start, end, callback) {
    if (start <= end) {
        callback(start);
        return loop(start + 1, end, callback)
    }
} 

var arrayDQ = ['Javascript', 'PHP', 'Ruby' ]
loop(0, arrayDQ.length - 1, function(index) {
    console.log(arrayDQ[index])
})





console.log('----- ĐỆ QUY -----')
//  1. Xác định điểm dừng
//  2. Logic Handle => để tạo ra điểm dừng

console.log('Create ứng dung countdown, 10,9,8,...1,0')
function countDown(num) {
    if (num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}

countDown(10);



console.log('** Tính giai thừa của một số')


console.log('- Sử dụng vòng lặp')
function giaiThualoop(number) {
    var output = 1;
    for (var i = number; i > 0; i--) {
        output = output * i
    }
    console.log(number + '! = ', output)
}

giaiThualoop(4);


console.log('- Sử dụng đệ quy')
function giaiThuaDQ(number1) {
    if (number1 > 0 ) {
        return number1 * giaiThuaDQ(number1 - 1);
    }
    return 1;
}

console.log(giaiThuaDQ(3));










