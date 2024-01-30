console.log('                                  ');
console.log('******* ⏩ DOM STYLE⏪ *******');

var boxElement =
    document.querySelector('.box');

boxElement.style.width = '200px';
boxElement.style.height = '100px';
boxElement.style.backgroundColor = 'blue';

//  Các viết rút gọn

var boxElement1 =
    document.querySelector('.box-1');

Object.assign(boxElement1.style, {
    width : '100px',
    height : '200px',
    backgroundColor : 'red',
})


//  get đối tượng CSS
console.log('⚡Get thuộc tính CSS⚡');
console.log(boxElement.style.backgroundColor);



console.log('                                  ');
console.log('******* ⏩ ClassList Psroperty ⏪ *******');


console.log('⏩ add ⏪ : ➜ Thêm class vào Element');
//  add class "red"

var addProEx =
    document.querySelector('.classList')

addProEx.classList.add('redColor', 'bgAqua');
//  *** Chú ý: nếu muốn thêm nhiều Class, phải cách nhau bằng dấu phẩy

console.log('⏩ contains ⏪ : ➜ Kiểm tra Class có nằm trong Element không?');

//  Kiểm tra có tồn tại class "redColor" không
console.log(addProEx.classList.contains('redColor'));

console.log('⏩ remove ⏪ : ➜ Xóa class khỏi Element');

//  Xóa class 
addProEx.classList.remove('redColor');

console.log('⏩ toggle ⏪ : ➜ Thêm/Xóa (dạng bật tắt) Class vào Element');

//  Nếu không có Class "redColor" ➜ Thêm vào
//  Nếu có Class "redColor" ➜ Xóa đi
addProEx.classList.toggle('redColor');

//  sau 100ms (1s) sẽ thực thì toggle
setInterval(() => {
    addProEx.classList.toggle('redColor');
}, 1000);


console.log('⏩ replace ⏪ : ➜ Thay thế Class cũ bằng class mới vào Element');

//  Thay thế claas bgAqua bằng bgPurple
addProEx.classList.replace('bgAqua', 'bgPurple');


console.log('                                  ');


var boxElement2 = 
    document.querySelector('.box-2');

console.log('⚡Nếu để class theo dạng class = "a b"⚡');
console.log('⚡Thì chỉ mục 1 là a (index = 0), b (index = 1 ) trong mảng⚡');
console.log(boxElement2.classList);
console.log('⚡index = 0 ➜ class: ',boxElement2.classList[0],'⚡');
console.log('Trả về dạng chuỗi: ',boxElement2.classList.value);

console.log('                                  ');
console.log('*** Bài tập')
//  comment các thẻ div khác để áp dụng cho BT

var boxElementAll = 
    document.querySelectorAll('div');

boxElementAll.forEach(function(boxElBT, index) {
    boxElBT.classList.add('boxBT')
});

console.log(boxElementAll);



console.log('                                  ');
console.log('******* ⏩ DOM Events ⏪ *******');

console.log('                                  ');
console.log('******* ⏩ Attribute Events ⏪ *******');



console.log('                                  ');
console.log('******* ⏩ Assign Event using the element node ⏪ *******');

var domEvents1 = 
    document.querySelectorAll('.exDOMEvent1');
//  Dùng All sẽ là node list nên phải duyệt qua để thành array
for (var i = 0; i < domEvents1.length; ++i) {
    //  Từng phần tử của node list sẽ nghe sự kiến onclick
    domEvents1[i].onclick = function (e) {
        //  target: trả về đúng cái element user click
        console.log(e.target);
    }
}
//  Lắng nghe sự kiện
// domEvents1.onclick = function(e) {
//     console.log(e.target);
// }


//  -----  Bài tập >>>>> CHANGE COLOR when Click -----
var changeColorBtn =
    document.querySelector('.btnChangeColor');

changeColorBtn.onclick = function () {
    //  khi click vào btn sẽ thêm 2 class css này vào
    changeColorBtn.classList.add('redColor', 'bgAqua');
    //  Khi click vào btn, trực tiếp đổi màu chữ thành red
    // changeColorBtn.style.color = 'red';
}

var toggleColorBtn =
    document.querySelector('.toggleChangeColor');

toggleColorBtn.onclick = function () {
    toggleColorBtn.classList.toggle('bgGreen');
    toggleColorBtn.classList.toggle('redColor');
}    


// EXAMPLE 1
//  1. Input / select
//  Lấy value của input
var inputElement =
    document.querySelector('input[type="text"]');

//  onchange: sẽ lấy giá trị sau khi bị thay đổi
inputElement.onchange = function (e) {
    console.log('onChange: ',e.target.value);
};

//  oninput: nhập tới đâu sẽ in ra tới đó (từng ra trị hiện tại)
//  VD: lần 1 gõ: 1 => in ra 1
//      lần 2 gõ thêm: 2 => in ra 12
//      lần 3 gõ thêm: 3 => in ra 123
inputElement.oninput = function (e) {
    console.log('onInput:', e.target.value);
    //  nếu muốn lưu vào 1 biến nào đó để khi chạy xong in ra biến
    // inputValue = e.target.value => console.log(inputValue) ở ngoài
};

console.log(inputElement);

//  checkbox có đang checked hay không?
var checkboxElement =
    document.querySelector('input[type="checkbox"]');

checkboxElement.onchange = function (e) {
    var checkInput = e.target.checked;
    
    //  Nếu checkInput = true thì "Checked" ngược lại "Uncheck"
    if (checkInput) {
        console.log('Checked');
    } else {
        console.log('Uncheck');
    }
}

//  select đang có giá trị bao nhiêu?
var selectElement =
    document.querySelector('select');
selectElement.onchange = function (e) {
    //  .value để get value
    console.log(e.target.value);
}

//  2. Key up / down

var keyboardElement =
    document.querySelector('input[type="text"]');

keyboardElement.onkeyup = function (e) {
    console.log('onKeyup: ', e.which)
    switch(e.which) {
        case 27: 
            console.log('You pressed "Escape"'); 
            break;

        case 13: 
            console.log('You pressed "Enter"'); 
            break;
    }
}


//  Lắng nghe toàn bộ document (cả website)
document.onkeyup = function (e) {
    console.log(e.which);
    switch(e.which) {
        case 27: 
        console.log('You pressed "Escape"'); 
        break;

        case 13: 
            console.log('You pressed "Enter"'); 
            break;

    }
}





//  2 phương thức đối tượng event

console.log('                                  ');
console.log('******* ⏩ PreventDefault ⏪ *******');
//  PreventDefault: Loại bỏ hành vi mặc định của trình duyệt trên 1 thẻ HTML

var aElements =
    document.querySelectorAll('a');
    // document.links; => lấy tấy cả thẻ a

for (var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function (e) {
        //  sratsWith: kiểm tra xem chuỗi có bắt đầu bằng chuỗi nào đó ko
        //  Kiểm tra nếu chuỗi href không chứa "https://www.google.com.vn" 
        //  thì không cho chuyển trang
        if (!e.target.href.startsWith('https://www.google.com.vn')) {
            //  e: event
            //  preventDefault: ngăn chặn hành vi mặc định của thẻ <a>
            e.preventDefault();
        }
    }
}


//  Example PreventDefault_2
//  Khi focus vào input "Tìm kiếm" thì mới hiện list ul
//  Nên sẽ không click vào thẻ li trong ul được, điều này sẽ không còn focus
//  và ul sẽ display: none
//  Sử dụng PreventDefault để ngăn chặn sự ẩn ul khi không focus

var ulElement =
    document.querySelector('ul');

//  lắng nghe sự kiến khi chuột dc click xuống (chưa nhấc lên)
ulElement.onmousedown = function (e) {
    e.preventDefault();
}

ulElement.onclick = function (e) {
    console.log(e.target);
}


console.log('                                  ');
console.log('******* ⏩ StopPropagation ⏪ *******');
//  loại bỏ sự kiện nổi bọt (thao tác vào lớp con nhưng vẫn ăn ra lớp cha, 
//  tất cả lớp chứa nó, nổi đến khi ra lớp ngoài cùng)

var divElement =
    document.querySelector('.exStopPropa');

divElement.onclick = function () {
    console.log('DIV');
}

var btnStopPropaElement =
    document.querySelector('.btnStopPropa');

    btnStopPropaElement.onclick = function (e) {
    //  stopPropagation(): ngăn chặn sự nổi bọt
    e.stopPropagation();
    console.log('Click me!');
}

//  Event Listener
console.log('                                  ');
console.log('******* ⏩ Event Listener ⏪ *******');

var btnEvLi1 =
    document.getElementById('btnEL1');


//  1. Xử lý nhiều việc khi 1 Event xảy ra
//  2. Lắng nghe / Hủy bỏ lắng nghe
//  Giữa DOM Event & Event Listener

//  ------ DOM EVENT -----


//  Mong muốn 3s đầu khi lick vào btn sẽ không có gì xảy ra
//  Sau 3s thì khi click sẽ chạy function
// setTimeout(function () {
//     btnEvLi.onclick = function () {
//         //  Việc 1
//         console.log('Việc 1');
    
//         //  Việc 2
//         console.log('Việc 2');
    
//         //  Việc 3
//         alert('Việc 3');
//     }
// }, 3000);



//  Sau 3s thì khi click sẽ không hoạt động
btnEvLi1.onclick = function () {

    //  1. Xử lý nhiều việc khi 1 Event xảy ra:
    //  nhiều việc trong 1 function

    //  Việc 1
    console.log('Việc 1');

    //  Việc 2
    console.log('Việc 2');

    //  Việc 3
    alert('Việc 3');
}


//  Hủy bỏ lắng nghe. gán 1 function rỗng -> sẽ ghi đè 
setTimeout(function () {
    btnEvLi1.onclick = function () {

    }
}, 3000);



//  ------ EVENT LISTENER -----

var btnEvLi2 =
    document.getElementById('btnEL2');


    //  1. Xử lý nhiều việc khi 1 Event xảy ra:
    //  addEvent nhiều lần

btnEvLi2.addEventListener('click', function (e) {
    console.log('Việc 1 - new');
})

btnEvLi2.addEventListener('click', function (e) {
    console.log('Việc 2 - new');
})

btnEvLi2.addEventListener('click', function (e) {
    console.log('Việc 3');
})

function viec4() {
    console.log('Việc 4');
}

function viec5() {
    console.log('Việc 5');
}

btnEvLi2.addEventListener('click', viec4);
btnEvLi2.addEventListener('click', viec5);


//  Hủy bỏ lắng nghe
setTimeout(function () {
    btnEvLi2.removeEventListener('click',viec4);
}, 3000)



//  TỔNG KẾT
//  DOM EVENT:
//      - Sử dụng cho các tường hợp đơn giản, muốn lắng nghe sự kiện nào đo
//      và không có nhu cầu gỡ bỏ lắng nghe

//  EVENT LISTENER:
//      - Khi xử lý nhiều việc, sẽ bóc tách các function
//      - Muốn hủy bỏ lắng nghe 1 sự kiện nào đó

//  Ưu điểm:
//  1. Có thể tách riêng function và add riêng function cho 1 event nào đó
//  2. có thể Remove lắng nghe event cho 1 function nào đó
