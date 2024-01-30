// *** Spread ***


// Nối mảng
var array1 = ['Javascript', 'PHP', 'Ruby']

var array2 = ['ReactJS', 'Dart']

// Tạo array3 và nối 2 mảng trên lại, và mảng 2 đứng trước


// ...array2 => sẽ bỏ đi cặp dâu [] của array 2, chỉ còn những phần tử bên trong
var array3 = [...array2, ...array1];

// script trên sẽ tương tự như
// var array3 = ['ReactJS', 'Dart', 'Javasctip', 'PHP', 'Ruby'];


console.log(array3)



// Hợp nhất 2 object

var object1 = {
    name: 'Javascript'
};

var object2 = {
    price: 1000
};

var object3 = {
    ...object1,
    ...object2
};

console.log(object3)


// Example
var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other'
}

var exerciseConfig = {
    // thừa hưởng những thứ của defaultConfig
    ...defaultConfig,
    // api mới => khi 2 key trùng nhau, sẽ lấy key được định nghĩa sau
    api: 'https://domain-trang-bai-tap',
}

console.log(exerciseConfig)


// Spread truyền tham số cho hàm

var array = ['Javascript', 'PHP', 'Ruby']


function logger(a, b, c) {
    console.log(a, b, c)
}

// Cách thông thường
console.log(1, 2, 3)

// *** Spread
console.log(...array)

// Example 2
var arrayEx2 = ['ReacJS', 'AngularJS', 'NodeJS', 'Dart']

function logger2(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i])
    }
}

// *** Spread
console.log(...arrayEx2)