// *** Enhanced object literals ***

// Xử lý được các việc sau:
//  1. Định nghĩa key: value cho object
//  2. Định nghĩa method cho object
//  3. Định nghĩa key cho object dưới dạng biến


var name = 'Javascript';
var price = 1000;



//  *** 1. Định nghĩa key: value cho object

// cách viết thông thường
var course = {
    name: name,
    price: price
}

console.log(course)


// Enhanced object literals 
var course1 = {
    name,
    price
}
console.log(course1)



//  *** 2. Định nghĩa method cho object

// cách viết thông thường
var course2 = {
    name,
    price,
    // getName function
    getname: function() {
        return this.name;
    }
}
// show name
console.log(course2.getname())


// Enhanced object literals 
var course3 = {
    name,
    price,
    // getName function
    getname() {
        return this.name;
    }
}
// show name
console.log(course3.getname())



//  *** 3. Định nghĩa key cho object dưới dạng biến

var fieldName = 'name';
var fieldPrice = 'price';

const course4 = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
}

console.log(course4)