// *** Destructuring (Phân rã), Rest ***


// *** ___ With ARRAY ___ ***
var array = ['Javascript', 'PHP','Ruby']


// Tạo ra 3 biến a, b, c lưu lần lượt phần tử của mảng trên vào

// Cách thông thường
var a = array[0];
var b = array[1];
var c = array[2];

console.log(a, b, c);


// *** Destructuring

var [a, b, c] = array;
console.log(a, b, c);

// without b
// var [a, , c] = array;
// console.log(a, c);


// *** Rest

// Get a
var [a] = array;
console.log(a);

// Get remain except a (lấy các phần tử còn lại khác a)
var [a, ...rest] = array;
console.log(rest);





// *** ___ With OBJECT ___ ***

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image',
    // object chứa object con
    children: {
        name: 'PHP'
    }
}

// *** Destructuring

// Lấy value của key
var { name, price } = course;
console.log(name, price)


// *** Rest

// Lấy value của key
var { name, ...rest } = course;
console.log(rest)

// Lấy name của object con
// Lấy value của key
// name: parentName => đổi name của object cha thành parentName
// children: { name } => object con => lấy name của object con
// var { name: parentName, children: { name } } = course;
var { name, children: { name } } = course;
// console.log(parentName)
console.log(name)


// Lấy ra value chưa được đỉnh nghĩa
// description = 'default desctription'  => gán giá trị default
var { name, description = 'default desctription' } = course;
console.log(description);


// *** Rest with distribute function

// function logger(a, ...params) => lấy phần tử còn lại trừ a
function logger(...params) {
    console.log(params);
}

// show array
// => a = 1 => lấy còn lại 2,..,8
console.log(logger(1,2,3,4,5,6,7,8));


// More....

// *** ___ WITH OBJECT ___ ***
// Cách viết thông thường
function logger(obj) {
    console.log(obj.name);
    console.log(obj.price);

}

logger({
    name: 'Javascript',
    price: 1000,
    description: 'Description content'
});


// *** Rest
function logger2({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);

}

logger2({
    name: 'Javascript',
    price: 1000,
    description: 'Description content'
});





// *** ___ WITH ARRAY ___ ***

// *** Rest
function logger3([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);

}

logger3([2, 3, 4, 5, 6]);

