// Callback ?

// Là hàm (function) được truyển qua đối số
// khi gọi hàm khác

// Thỏa 2 điều kiện:
//  I. là hàm
//  II. được truyển qua đối số
//  III. được gọi lại trong hàm nhận đối số

console.log('---------- CALL BACK 1 ----------')


//  3. Hàm myCallback được gán vào param => gọi param là gọi hàm myCallback
function myFunction(param) {
    //  Kiểm tra nếu param là function thì mới thực thi
    if (typeof param === 'function') {
        param(100);
    }
}

// 1. hàm myCallback
function myCallback(value) {
    console.log('This is my Callback: ', value);
}

// 2. gọi hàm myFunction với đối số là hàm myCallback
myFunction(myCallback);    // được truyển qua đối số -> param



console.log('**** Bài tập *****')

function sumCb(a, b) {
    return a + b;
}

function subCb(a, b) {
    return a - b;
}

function multiCb(a, b) {
    return a * b;
}

function divCb(a, b) {
    return a / b;
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
console.log(caculate(1, 2, sumCb)) // Output: 3
console.log(caculate(1, 2, subCb)) // Output: -1
console.log(caculate(1, 2, multiCb)) // Output: 2
console.log(caculate(3, 1, divCb)) // Output: 3


console.log('---------- CALL BACK 2 ----------')

/*



//  Tạo hàm mapMaker
Array.prototype.mapMaker = function(Callback) {
    //  Định nghĩa ra 1 mảng trống
    var output = [];
    //   this ở đây là thằng nào mà gọi phương thức mapMaker
    //  hiện tại ở đây là mảng fruits
    var arrayLength = this.length;

    for (var i = 0; i < arrayLength; i++) {
        //  gán kết quả chạy được cho biến result
        var result = Callback(this[i], i);

        //  Đẩy phần tử đã lấy được ở result vào array output rỗng bên trên
        output.push(result)
    }

    //  return mảng output đã được đẩy phần tử vào
    return output;
}


var fruits = [
    'Mango',
    'Apple',
    'straberry',
    'orange'
];
//  Cách viết 1
// fruits.map(function(fruits) {
//     console.log(fruits)
// })

//  Cách viết 2
// function myFruits(fruits) {
//     console.log(fruits)  
// }

console.log('_____ Phương thức "map" mặc định _____')

var htmls = fruits.map(function(fruits) {
    return `<h2>${fruits}</h2>`;
});

console.log(htmls.join());


//  viết hàm mapMaker thay thế hàm map trên
console.log('_____ Phương thức "mapMaker" được định nghĩa _____')

var htmls2 = fruits.mapMaker(function(fruits) {
    return `<h2>${fruits}</h2>`;
});

console.log(htmls2.join());





console.log('**** Bài tập *****')

Array.prototype.myMap = function(cb) {
    var output2 = [];
    var arrLength = this.length;
    for (var i = 0; i < arrLength; i++) {
        var resultCal = cb(this[i], i);
        output2.push(resultCal);
    }
    return output2;

}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]




 */


console.log('___ Viết các phương thức Maker cho: forEach, reduce, find, filter, some, every ___')

var sports = [
    'Soccer',
    'Swim',
    'Baseball',
    'basketball'
];

//  Gán cho độ dài mảng sports = 10
sports.length = 10;

//  Dùng for ... in để lặp qua những phần tử thực, 
//  ko lặp qua những phần tử empty (phần tử trống)
for (var index1 in sports) {
    console.log(sports[index1]);
}

console.log("                                              ");
console.log("*** ---  ___ forEachMaker Function ___ --- ***")

Array.prototype.forEachMaker = function(callbackDevice) {
    for (var indexDevice in this) {
        //  Sử dụng hasOwnProperty để lấy những phần tử gần nhất trong mảng
        //  không lấy những phần tử trong __proto__
        if( this.hasOwnProperty(indexDevice)) {
            callbackDevice(this[indexDevice], indexDevice, this)
        }
    }
}

var appleDevices = [
    'iPhone',
    'Apple Watch',
    'iPad',
    'Air pod',
    'Macbook'
];

//  *** ForEach
//  Không cần RETURN
//  kHÔNG Lặp qua phần tử EMPTY => dùng For / in để tạo ForEachMarker
console.log("       ___ Dùng ForEach ___");
appleDevices.forEach(function(appleDevice, iDevice, arrayDevice) {
    console.log(appleDevice, iDevice, arrayDevice);
})

//  *** ForEachMaker
console.log("       ___ Dùng ForEachMarker ___")
appleDevices.forEachMaker(function(appleDevice, iDevice, arrayDevice) {
    console.log(appleDevice, iDevice, arrayDevice);
})

console.log("                                              ");
console.log("*** ---  ___ filterMaker Function ___ --- ***");

Array.prototype.filterMaker = function(callbackComputer) {
    var outputComputer = [];
    for (var indexComputer in this) {
        if (this.hasOwnProperty(indexComputer)) {
            //  Đặt cho callback 1 cái biến
            var resultComputer = callbackComputer(this[indexComputer], indexComputer, this)
            //  nếu điều kiện biến đúng 
            if (resultComputer) {
                //  thêm phần tử được filter vào mảng rổng ban đầu
                outputComputer.push(this[indexComputer]);
            }
        }
    }
    return outputComputer;
}

var computers = [
    {
        name: 'Acer',
        price: '370'
    },
    {
        name: 'Asus',
        price: '400'
    },
    {
        name: 'Samsung',
        price: '335'
    },
    {
        name: 'Dell',
        price: '390'
    },
];
console.log("       ___ Dùng filter ___");
//  kHÔNG Lặp qua phần tử EMPTY => dùng For / in để tạo filterMaker 

var filterComputer = computers.filter(function(computers, iComputer, arrayComputer) {
    return computers.price > 380;
})

console.log(filterComputer);

console.log("       ___ Dùng filterMaker ___");

var filterComputer = computers.filterMaker(function(computers, iComputer, arrayComputer) {
    return computers.price > 380;
})

console.log(filterComputer);

console.log('_________ Bài tập nhỏ: Viết hàm myFilter ______________')

Array.prototype.myFilter = function(cb) {
    var outputCb = [];
    for (var indexCb in this) {
        if (this.hasOwnProperty(indexCb)) {
            var resultCb = cb(this[indexCb], indexCb, this);
            if (resultCb) {
                outputCb.push(this[indexCb]);
            }
        }
    }
    return outputCb;
}




const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (numberCb) {
    return numberCb % 2 === 0;
})); 
//  Output: [2, 4]

console.log(numbers.myFilter(function (numberCb, iCb) {
    return iCb % 2 === 0;
})); 
// //  Output: [1, 3]

console.log(numbers.myFilter(function (numberCb, iCb, arrayCb) {
    return arrayCb.length % 2 === 0;
})); 
// //  Output: [1, 2, 3, 4]



console.log("                                              ");
console.log("*** ---  ___ someMaker Function ___ --- ***")
//  kHÔNG Lặp qua phần tử EMPTY => dùng For / in để tạo someMaker 

Array.prototype.somemaker = function(callbackTicket) {
    for (var indexTicket in this) {
        if (this.hasOwnProperty(indexTicket)) {
            //  Nếu như callbackTicket(this[indexTicket], indexTicket, this) đúng
            // return true
            if (callbackTicket(this[indexTicket], indexTicket, this)) {
                return true;
            }
        }
    }
    return false;
}

var tickets = [
    {
        name: 'Avenger',
        price: '80000',
        isSale: true,
    },
    {
        name: 'Black Panther',
        price: '100000',
        isSale: false,
    },
    {
        name: 'Avenger 2',
        price: '120000',
        isSale: false,
    },
];

console.log("       ___ Dùng some ___");


//  vé phim đã được bán cái nào hay chưa ?
//  kiểm tra trong tất cả các phim, nếu đã có isSale = true => true
var filmTicket = tickets.some(function(ticket, iTicket, arrayTicket ) {
    return ticket.isSale;
});

console.log(filmTicket);

console.log("       ___ Dùng someMaker ___");
var filmTicket = tickets.somemaker(function(ticket, iTicket, arrayTicket ) {
    return ticket.isSale;
});

console.log(filmTicket);



console.log("                                              ");
console.log("*** ---  ___ everyMaker Function ___ --- ***")

Array.prototype.everyMaker = function(callbackTicket2) {
    var outputTicket2 = true;
    for (var indexTicket2 in this) {
        if (this.hasOwnProperty(indexTicket2)) {
            var resultTicket2 = callbackTicket2(this[indexTicket2], indexTicket2, this)
            //  Nếu như có 1 lần sai => false => thoát loop
            if (!resultTicket2) {
                outputTicket2 = false;
                break;
            }
        }
    }
    return outputTicket2;
}

console.log("       ___ Dùng every ___");

var filmTicket = tickets.every(function(ticket, iTicket, arrayTicket) {
    return ticket.isSale;
})

console.log(filmTicket);


console.log("       ___ Dùng everyMaker ___");


var filmTicket = tickets.everyMaker(function(ticket, iTicket, arrayTicket) {
    
    return ticket.price > 70000;
})

console.log(filmTicket);