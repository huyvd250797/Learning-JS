// Khác nhau giữa var/let const

// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let: Assignment

// Code block: if else, loop, {}, ...



// *** Scope ***
if (true) {
    // can't use let, const in here
    let example1 = 'JS'; 

    // just use var
    var example2 = 'JS';
}

console.log(example1);
console.log(example2);


// Use Let, Const

if (true) {
    
    let example3 = 'JS'; 
    {
        // can console.log
        console.log(example3);

    }
}


// *** Hosting ***
// Khai báo sẽ được nhấc lên trên đâu, 
// just for "var"
var a;
a = 1;

var a = 1;


// *** Assignment ***
var a = 1;
a = 2;

// let a = 1;
// a = 2;

// --- Const: sẽ không được gán lần thứ 2, gán lần đầu là sử dụng luôn 
// (nếu gán lại key của object thì vẫn được)

// const a = 1;
// a = 2;

// Ex:
// const a = {
//     name: 'JS'
// }

// a.name = 'PHP' ==> can change ==> name == 'PHP'

console.log(a)





// *** Tổng Kết ***
// Code thuần: var
// Babel: const, let
// - Khi định nghĩa biến và không gán lại biến đó thì dùng: Const
// - Khi cần gán lại giá trị biến thì dùng: Let