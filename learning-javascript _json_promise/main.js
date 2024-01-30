//  I. JSON
//      1. JSON là gì?
//          ➜ Là định dạng dữ liệu (chuỗi)

//      2. JSON là JavaScript Object Notation
//      3. JSON: Number, String, Boolean, NULL, Array, Object
//          Mã hóa (Encode) / Giải mã (Decode)

//          ** Stringify: Từ JavaScript types ➜ JSON
//          ** Parse: Từ JSON ➜ JavaScript types

console.log('                                  ');
console.log('******* ⏩ I. JSON ⏪ *******');

//  JSON thể hiện kiểu dữ liệu Number
var json = '1';

//  JSON thể hiện kiểu dữ liệu Boolean
var json = 'true';

//  JSON thể hiện kiểu dữ liệu Array
var json = '["Javascript","PHP"]';

//  JSON thể hiện kiểu dữ liệu Object
var json = '{"name":"Huy Vo","age":25}';



//  *******  JSON ➜ JavaScript types *******

//  Chuyển từ JSON ➜ JavaScript types (Number)
var a = '1';
console.log(JSON.parse(a));

//  Chuyển từ JSON ➜ JavaScript types (Boolean)
var a = 'true';
console.log(JSON.parse(a));

//  Chuyển từ JSON ➜ JavaScript types (String)
var a = '"ABC"';
console.log(JSON.parse(a));

//  Chuyển từ JSON ➜ JavaScript types (Array)
var a = '["Javascript","PHP"]';
console.log(JSON.parse(a));

//  Chuyển từ JSON ➜ JavaScript types (Object)
var a = '{"name":"Huy Vo","age":25}';
console.log(JSON.parse(a));

var result = JSON.parse(a);
console.log('Result:',result);


//  ******* JavaScript types ➜ JSON *******

//  Chuyển từ JavaScript types ➜ JSON (Number)
console.log(JSON.stringify(1));

//  Chuyển từ JavaScript types ➜ JSON (Boolean)
console.log(JSON.stringify(true));


//  Chuyển từ JavaScript types ➜ JSON (Array)
console.log(JSON.stringify([
    'Javascript',
    'PHP'
]));

//  *** Typeof: để kiểm tra kiểu dữ liệu
console.log(typeof JSON.stringify([
    'Javascript',
    'PHP'
]));

//  Chuyển từ JavaScript types ➜ JSON (Object)
console.log(JSON.stringify({
    name: 'Huy Vo',
    age : 26
}));



//  ___________________________________________________________________

//  II. Promise (sync, async)

console.log('                                  ');
console.log('******* ⏩ II. Promise ⏪ *******');


//  --------------------------------------------------------------------

//      II.1. Promise (sync, async)
console.log('                                  ');
console.log('******* ⏩ II.1 Promise (sync, async) ⏪ *******');

//      Sync: Đồng bồ
//      Async: Bất đồng bộ
//      Pain: Nối đau
//      Lý thuyết, cách hoạt động
//      Thực hành, ví dụ

//      Sync / Async

console.log(1);
console.log(2);
//  Sync:
//  Thằng nào viết trước - chạy trước
//  Thằng nào viết sau - chạy sau
//  ➜ in ra 1 2 ➜ Sync


//  Chạy đoạn này xong ngủ (sleep 1s) - sau đó chạy tiếp
//  chứ ko phải là ko chay ➜ vẫn là sync
//  Nhưng nếu set Timeout như vậy thì khi in ra sẽ in 4 trước ➜ Async

// setTimeout(function () {
//     console.log(3);
// }, 1000);

console.log(4);

//  Những trường hợp gây Async
//  setTimeout, setInterval, Fetch, XMLHttpRequest
//  file reading, request animation frame


//  --------------------------------------------------------------------


//      II.2. Promise (sync, async)
console.log('                                  ');
console.log('******* ⏩ II.2 Promise (pain) ⏪ *******');

//  Nõi đau khi sử dụng callback vào async
//  callback hell 
//  Pyramid of Doom


//  Callback Hell
console.log('                                  ');
console.log('******* ⚡Callback Hell⚡ *******');

//  Bài toán : Không được dùng SetInterval
//  sau 1s in ra số 1
//  sau 1s tiếp theo in ra số 2
//  sau 1s tiếp theo in ra số 3
//  ...

// setTimeout(function () {
//     console.log('Start callback hell:',1)      // việc 1
//     setTimeout(function () {
//         console.log(2)      // việc 2
//         setTimeout(function () {
//             console.log(3)      // việc 3
//             setTimeout(function () {
//                 console.log('End callback hell:',4)      // việc 4
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


//  --------------------------------------------------------------------


//      II.3. Promise (concept)
console.log('                                  ');
console.log('******* ⏩ II.3 Promise (concept) ⏪ *******');

//  Cách tạo ra promise
//  1. new Promise
//  2. Executor

//  Các trạng thái:
//  -   Pending: Chờ
//  -   Fulfilled: Thành công
//  -   Rejected: Thất bại
var promise = new Promise(
    //  Executor
    function(resolve, reject) {        //  resolve: thành công - reject : thất bại
        // Logic
        //  Thành công: resolve()
        //  Thất bài: reject()

        //  VD: Fake call API
        resolve([
            {
                id: 1,
                name: 'Javascript'
            }
        ]);
        
        // reject('Lỗi');
    }
);

// promise
//     //  resolve sẽ gọi hàm này
//     .then(function () {
//         console.log('Successfully!')
//     })

//     //  reject sẽ gọi hàm này
//     .catch(function () {
//         console.log('Fairlure!')
//     })

//     //  1 trong 2, hàm này luôn được gọi
//     .finally(function () {
//         console.log('Done!')
//     })

// promise
//     .then(function (course) {
//         console.log(course);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function () {
//         console.log('Done!')
//     })


//  Các câu hỏi về Promise
//  -   Em có nắm khái niệm Promise không?
//  1. Khái niệm sinh ra giúp xử lý bất đồng bộ
//     Trước khii có Promise dùng call back -> dễ xảy ra callback hell, code khó nhìn, khó hiểu



//  --------------------------------------------------------------------


//      II.4. Promise (chain)
console.log('                                  ');
console.log('******* ⏩ II.4 Promise (chain) ⏪ *******');


var promise2 = new Promise(
    function(resolve, reject) {
        resolve();
    }
);

// promise2
//     //  Kết quả trước sẽ là tham số cho function sau
//     //  Nếu thằng đâu tiên không return ra bất cứ gì
//     //  Sẽ chạy thẳng vào thằng tiếp theo (liền sau)
//     .then(function() {
//         // return 1;
//         //  settimeout thì vẫn chạy trước bao giờ xong -> resolve thì mới chạy thằng tiếp theo
//         return new Promise(function(resolve) {
//             setTimeout(function() {
//                 resolve([1,2,3]);
//             }, 1000);
//         });
//     })
//     .then(function(data) {
//         console.log(data);
//     })
    // .then(function(data) {
    //     console.log(data);
    //     return 3;
    // })
    // .then(function(data) {
    //     console.log(data);
    // })
    // .catch(function() {
        
    // })
    // .finally(function() {
    //     console.log('Done !')
    // })

//  Giải quyết bài toán sau 1s in ra 1 số 
// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms)
//     });
// }

// sleep(2000)
// //  Sau 100ms sẽ được chạy
//     .then(function() {
//         console.log('Start Promise:',1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(4);
//         return sleep(1000);
//     })



//  --------------------------------------------------------------------


//      II.5. Promise methods (resolve, reject, all)
console.log('                                  ');
console.log('******* ⏩ II.5. Promise methods (resolve, reject, all) ⏪ *******');

// function sleep1(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms)
//     });
// }

// sleep1(2000)
// //  Sau 2000ms sẽ được chạy
//     .then(function() {
//         console.log('Start Promise:',1);
//         return sleep1(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject('Error !!!');
//         })
//     })
//     .then(function() {
//         console.log(3);
//         return sleep1(1000);
//     })
//     .then(function() {
//         console.log(4);
//         return sleep1(1000);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })

//  --------------------------------------------------------------------


//      II.6. Promise.resolve
console.log('                                  ');
console.log('******* ⏩ II.6. Promise.resolve ⏪ *******');

//  Tạo 1 Promise Resolve
var promiseResolveEx = new Promise(function(resolve, reject) {
    resolve('Success !');
});

promiseResolveEx
    .then(function(resultResolve) {
        console.log(resultResolve);
    })
    .catch(function(errResolve) {
        console.log(errResolve);
    })

//  *** Promise.resolve() => Luôn trả về Resolve
var promiseResolve = Promise.resolve('Success !!')

promiseResolve
.then(function(result) {
    console.log('Result:',result);
})
.catch(function(err) {
    console.log('Result:',err);
})


//  --------------------------------------------------------------------


//      II.7. Promise.reject
console.log('                                  ');
console.log('******* ⏩ II.7. Promise.reject ⏪ *******');

//  *** Promise.reject() => Luôn trả về Reject
var promiseReject = Promise.reject('Error !!')

promiseReject
    .then(function(result) {
        console.log('Result:',result);
    })
    .catch(function(err) {
        console.log('Result:',err);
    })


//  --------------------------------------------------------------------

// //      II.8 Promise.all
// console.log('                                  ');
// console.log('******* ⏩ II.8 Promise.all ⏪ *******');

// //  Nếu 2 việc, 2 promise không phụ thuộc nhau (cái sau phụ thuộc dữ liệu cái trước)
// //  thì dùng all, không nên dùng 2 promise như vậy sẽ tốn tài nguyên máy
// //  Không phụ thuộc nhau thì chạy song song đồng thời
// var promise3 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([1]);
//     }, 1000);
// });

// var promise4 = new Promise(function(resolve) {
//     setTimeout(function() {
//         resolve([2, 3]);
//     }, 2000);
// });

// //  Hợp nhất 2 mảng trên thành 1 mảng
// //  [1] và [2, 3] => [1, 2, 3]


// Promise.all([promise3, promise4])
//     //   Khi tất cả Promise chạy xong thì mới lọt vào đây
//     .then(function(resultAll) {
//         console.log('Promise.all:',resultAll);
//         var resultAll1 = resultAll[0];
//         var resultAll2 = resultAll[1];

//         //  concat: nối mảng
//         console.log(resultAll1.concat(resultAll2));
//     })

// //  Nếu có 1 thằng Reject, thì lọt vào catch và ngưng tất cả
// var promise5 = Promise.reject('ERROR !!!');

// Promise.all([promise4, promise5])
//     .then(function([resultAll2, resultAll3]) {
//         console.log(resultAll1.concat(resultAll2));
//     })
//     .catch(function(error) {
//         console.log(error);
//     })





//  --------------------------------------------------------------------

//      II.9 Promise EXAMPLE
console.log('                                  ');
console.log('******* ⏩ II.9 Promise EXAMPLE *******');

//  VÍ DỤ: Chức năng comment

//  Nơi lưu trữ user, lưu dạng mảng, vì có nhiều user
//  trong Array sẽ có nhiều Object, mỗi Object là 1 user
var users = [
    {
        id: 1,
        name: 'Thor'
    },
    {
        id: 2,
        name: 'Captain America'
    },
    {
        id: 3,
        name: 'Hulk'
    },
];

//  nơi lưu trữ comment
var comments = [
    {
        id: 1,
        //  foreign key
        user_id: 1,
        content: 'Give me Thanos'
    },
    {
        id: 2,
        //foreign key
        user_id: 2,
        content: 'Avenger Essemble!'
    },
    {
        id: 3,
        //foreign key
        user_id: 1,
        content: 'Woaaaaaaa!'
    },
];

//  1. Gọi API lấy comments
//  2. Từ comments lấy ra DS user (user_id)
//  3. Từ user_id lấy ra user tương ứng


//  Fake API (mô phỏng lấy API)
function getComments() {
    return new Promise(function(resolve) {
    //  mô phỏng internet chậm 1s
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    });
}

//  Đã có mảng user_id => lấy được user
function getUsersbyIds(userIds) {
    return new Promise(function(resolve) {
        //  filter: lọc ra những user nằm trong list id_user đã lấy được (thóa điều kiện includes)
        var resultUser = users.filter(function(user) {
            return userIds.includes(user.id);
        });
            setTimeout(function() {
                resolve(resultUser);
            }, 1000);
    })
}


getComments()
    .then(function(comments) {
        // //  lấy được comment
        // console.log(comment);

        //  map: lấy được user_id dưới dạng mảng
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        })
        // //  Nhận được mảng chứa user_id
        // console.log(userIds);
        //  get user
        return getUsersbyIds(userIds)  // userIds: list user_id lấy được bên trên
        .then(function(users) {
            // return users;
            //  return được object chứa user và comment
            return {
                users: users,
                comments: comments,
            }
        });
    })
    .then(function(data) {     //  từ cái return object trên truyền vào biến data
        var commentBlock = document.getElementById('comments-block');
        //  tạo chuỗi rỗng
        var html = '';
        //  Lặp qua các phần tử
        data.comments.forEach(function(comment) {
            //  find: tìm kiếm những user.id === comment.user_id
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            //  += VD: a+=1 <=> a=a+1
            //  Chuỗi rỗng html = html + `<li>${user.name}: ${comment.content}</li>`
            //  forEach sẽ lặp qua hết và sẽ ra được list danh sách
            html += `<li><b>${user.name}:</b> ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });

//  Phải nắm được các kiến thức:
//  1. Hiểu Array
//  2. Function, callback
//  3. Promise
//  4. DOM


//  Tự viết lại chức năng comment của user
//  start 21/12/2022
//  GET GO !!!!!!!!