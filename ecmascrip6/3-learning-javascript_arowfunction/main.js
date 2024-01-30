
// Hàm thông thường

// Declaration Function
function logger(log) {
    console.log(log);
}

logger('Messenger...');


// Expression Function (anonymous function)
const logger1 = function(log1) {
    console.log(log1)
}

logger1('Messenger1 ...');



// *** Arrow Function ***

// Expression Function => Arrow function
const logger2 = (log2) => {
    console.log(log2)
}

logger2('Messenger2 ...');

// Cách viết ngắn gọn
const logger3 = log3 => console.log(log3)

logger3('Messenger3 ...')



// Ví dụ hàm cộng
const sum = (a, b) => {
    return a + b;
}

console.log(sum(2, 2));

// Cách viết ngắn gọn
const sum1 = (a, b) => a + b;

console.log(sum1(3, 7));

// Dùng cách viết ngắn gọn return thẳng ra 1 Object
// Cách viết arrow function bình thường
const sum2 = (a, b) => {
    return {
        a: a,
        b: b
    };
};

console.log(sum2(5, 8))

// Cách viết ngắn gọn
const sum3 = (a, b) => ({ a: a, b: b });

console.log(sum3(7, 9))

// Đặc tính Arrow Function

const course = {
    name: 'JavaScript basic!',
    getName: function() {
        // this ở đây gọi là context
        return this.name;    
    }
};

console.log(course.getName());

// => arrow function không có context của nó "this"

// Arrow function không thể dùng làm function constructer
const Course = function(name, price) {
    this.name = name;
    this.price = price;
}

const jsCourse = new Course('JavaScript!!!', 1000);

console.log(jsCourse);

// Can't run
// const Course = (name, price) => {
//     this.name = name;
//     this.price = price;
// }

// const jsCourse = new Course('JavaScript!!!', 1000);

// console.log(jsCourse);
