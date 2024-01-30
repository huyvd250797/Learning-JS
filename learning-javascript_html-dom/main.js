//  I. DOME là gì?

    //  *** DOM có 3 thành phần:

        //  1. Element (phần tử) : 
        //      Là các thẻ tag (<html>, <head>, <body>, <a>, <h1>, ...)
        //      VD: <html>  </html>

        //  2. Attribute (thuộc tính) :
        //      Là các thuộc tính nằm trong thẻ (class, id, href, title)
        //      VD: <a href="">

        //  3. Text : chữ
        //      Là các ký tự, chữ viết 
        //      <h1> HELLO WORLD <h1/>

    //  *** Node: là những vị trí xuất hiện các thành phần trên


//  *** II. HTML DOM & DOM API
//  Javascript: Browser | Server (NodeJS)

//  Browser: HTML -> DOM -> WEB API

//  *** III. Document Object
console.log(document)
//document.write("Hello World")

//  IV. Get Element methods
    //  - Get id, class, tag, CSS selector, HTML collection

//  1. Get element by ID
    console.log('*** Get element by ID')
    var getId = document.getElementById('heading');
    console.log(getId);
    console.log({
        name: getId,
    })

//  2. get element by classname
    console.log('*** Get element by ClassName')
    var getClasses = document.getElementsByClassName('heading-class')
    console.log(getClasses)

//  3. get element by tagname
    console.log('*** Get element by Tagname')
    var getTagname = document.getElementsByTagName('h1')
    console.log(getTagname)

//  4. get element by CSS Selector
    console.log('*** Get element by CSS Selector')
    //  Mặc định khi viết như vậy => Chỉ lấy phần tử đầu tiên
    var getCssSelector = document.querySelector('.heading-class')
    console.log(getCssSelector)

    //  Lấy tất cả
    console.log('Get ALL ')
    var getCssSelector2 = document.querySelectorAll('.box-1 .heading-class')
    console.log(getCssSelector2)
    //  Lấy phần tử vị trí bất kỳ. VD: vị trí thứ 2
    console.log(getCssSelector2[2])

//  5. get element by HTML Collection
    //  Khi selector vào form không cần phải get by id
    //  các thẻ được quy thành HTML Collection : <img>, <from>, <a>,
    //  vị trí 0-1-2,...
    console.log(document.forms[0])
    //  Hoặc truyển thẳng ID
    console.log(document.forms['form-1'])
    //  Hoặc đặt ID không có ký tự
    console.log(document.forms.form3)


console.log('Trả về thẻ a có thuộc tính name ')
console.log(document.anchors)

console.log('*** BÀI TẬP ***')
var productsListElement = document.getElementsByClassName('products-list');
console.log(productsListElement[0])
var firstProductElement = document.querySelector('.products-list .product:first-child')
var buttonElements = document.querySelectorAll('button')





//  ----------------------------------- MỞ RỘNG 1 -----------------------------------
console.log('                                  ')
console.log('******* ⏩ Mở rộng 1 ⏪ *******')

console.log('- Yêu cầu 1: Lấy được thẻ li trong fruits-1')
console.log('  + Cách 1:')
console.log("     var listFruits1 = document.querySelectorAll('.fruits-1 li');")
var listFruits1 = 
    document.querySelectorAll('.fruits-1 li');

console.log(listFruits1);

console.log('  + Cách 2:');
console.log("     var fruitsNode1 = document.querySelector('.fruits-1');");
console.log("     console.log(fruitsNode1);");
console.log("     console.log(fruitsNode1.querySelectorAll('li'));");
console.log("     Hoặc");
console.log("     console.log(fruitsNode1.getElementsByTagName('li'));");


var fruitsNode1 = 
    //  Lấy được tất cả element thuộc attribute class: fruits-1
    document.querySelector('.fruits-1');

    //  công việc 1: sử dụng tới `fruitsNode1`
    console.log(fruitsNode1);

    //  công việc 2: sử dụng tới các li elements
    //  là con của fruits-1
    console.log(fruitsNode1.querySelectorAll('li'));
//  -> Giải thích: đúng từ fruitsNode1 gọi querySelectorAll tới li
//  Hoặc
    console.log(fruitsNode1.getElementsByTagName('li'));






//  ----------------------------------- MỞ RỘNG 2 -----------------------------------

    console.log('                                  ')
console.log('******* ⏩ Mở rộng 2 ⏪ *******')
//  Chỉ có 2 loại lấy thẳng element:
    //  1. getElementById
    //  2. querySelector
//  Còn lại lấy được NodeList, List, HTML collection (như mảng - array)

var fruitsNode2 = 
    //  Lấy được thẳng từng phần tử nhờ vòng lặp
    document.querySelectorAll('.fruits-2');
for (var indexFruits2 = 0; indexFruits2 < fruitsNode2.length; fruitsNode2++) {
    console.log(fruitsNode2[indexFruits2]) ;
}

//  console.write() : sau khi đọc -> ghi ra ngay lập tức
//  Trường hợp DOM được tải xong, mà sử dụng console.write() -> nội dung console.write() sẽ ghi đè toàn bộ






//  ----------------------------------- Attribute node & Text node -----------------------------------
console.log('                                  ');
console.log('******* ⏩ Attribite node ⏪ *******');

console.log('➜ <h1 [id="att-node" class="att-node" title="Att-node"] <- This is Attribute ! >This is box-3</h1>');
console.log('⚡Attribute is: id, class, title,...⚡');


console.log('                                  ');
console.log('******* ⏩ Text node ⏪ *******');
console.log('➜ <h1 id="att-node" class="att-node" title="Att-node"> [This is box-3] <- This is Text! </h1>');
console.log('⚡Text here is: This is box-3⚡');




//  ----------------------------------- DOM Attribute-----------------------------------
console.log('                                  ');
console.log('******* ⏩ DOM Attribite ⏪ *******');

var domAttribute = 
document.querySelector('h3');

console.log("⚡ Thêm Attribute vào Element bằng JS ⚡");
console.log("➜ domAttribute.id = 'domAtt';")
console.log("➜ domAttribute.ClassName = 'domAtt';")
console.log("➜ domAttribute.title = 'DomAtt';")
domAttribute.id = 'domAtt';
domAttribute.className = 'domAtt';
domAttribute.title = 'DomAtt';

console.log(domAttribute);



var domAttribute1 = 
document.querySelector('a');
domAttribute1.href = 'domAtt-link';

console.log(domAttribute1);



//  Set Any Attribute for Element
console.log('⚡Muốn thêm Attribute bất kỳ vào Element⚡');
console.log('⚡VD: thêm Att "href" vào thẻ <h1>⚡');
console.log("➜ domAttribute.setAttribute('href','href-for-h1-link');");

//domAttribute.setAttribute('id','id-for-h1');
domAttribute.setAttribute('href','href-for-h1-link');
console.log(domAttribute);

//  Get Attribute of Element
console.log('⚡Lấy Attribute của Element⚡');
console.log("➜ domAttribute.getAttribute('href')")
console.log('- id:',domAttribute.getAttribute('id'));
console.log('- class:',domAttribute.getAttribute('class'));
console.log('- href:',domAttribute.getAttribute('href'));

console.log('                                  ');

// Nếu thuộc tính hợp lệ ➜ sử dụng thẳng Att mà không cần dùng getAttribute()\
console.log('⚡Nếu thuộc tính hợp lệ ➜ sử dụng thẳng Att mà không cần dùng getAttribute()⚡');
console.log('➜ domAttribute.title');
console.log("- Att hợp lệ (title của <h1>):",domAttribute.title);

console.log('                                  ');

//  Tạo ra chữ có màu
console.log('⚡Dùng setAtt để set cho domAttribute class và set màu cho nó⚡')
console.log("➜ domAttribute.setAttribute('class','set-color');")
console.log("➜ domAttribute.setAttribute('style','color: brown');")
domAttribute.setAttribute('class','set-color');
domAttribute.setAttribute('style','color: brown');
console.log(domAttribute);


//  ----------------------------------- DOM TEXT-----------------------------------
//  --------------------------- InnerText & TextContent---------------------------
console.log('                                  ');
console.log('******* ⏩ InnerText & TextContent ⏪ *******');

var headingInnerText = 
    document.querySelector('.innerText');

console.log(headingInnerText.innerText);
console.log(headingInnerText.textContent);

console.log('⚡Ghi nội dung mới thay MỚI     cho nội dung ở class "innerText"⚡');
console.log("➜ headingInnerText.innerText = 'New heading';");
console.log("➜ headingInnerText.textContent = 'New heading';");
//  Gán nội dung mới
headingInnerText.innerText = 'New heading';

console.log('                                  ');
console.log('******* ⏩ InnerText ⏪ *******');
//  Nội dung lấy được sẽ giống như nội dung thấy trên trình duyệt
// VD: InnerText - Text node ➜ thấy được trên trình duyệt ➜ Lấy được nội dung đó

var headingInnerText = 
    document.querySelector('.innerText1');

console.log('innerText: ',headingInnerText.innerText);

console.log('                                  ');
console.log('******* ⏩ TextContent ⏪ *******');
//  Nội dung lấy được từ text thật nằm trong DOM 
// - lấy đúng vị trí trong HTML kể cả khoảng trống (giống như những gì ở HTML)
var headingInnerText = 
    document.querySelector('.innerText1');
    
console.log('textContent: ',headingInnerText.textContent);

console.log('⚡innerText là những thứ được nhìn thấy trên trang web');
console.log('⚡textContent là những thứ nhìn thấy trong html');




//  --------------------------- InnerHTML vs OuterHTML Property---------------------------

console.log('                                  ');
console.log('******* ⏩ InnerHTML vs OuterHTML Property ⏪ *******');

console.log('                                  ');
console.log('******* ⏩ InnerHTML ⏪ *******');
//  Thêm Element vào Element
var innerHtml = 
    document.querySelector('.innerHtml');

//  Thêm Element <h1> vào Element <div> có class = "inoutHTML"
//  Thêm text 'This is InnerHTML' vào <h1>
innerHtml.innerHTML = '<h1 class ="h1InnerHTML" style ="color: purple;">This is InnerHTML</h1>'

console.log(innerHtml);

//  get nội dung html trong element ➜ string
console.log(innerHtml.innerHTML);

//  Lấy ra text (innerText) từ element <h1> class = h1InnerHTML
console.log(document.querySelector('.h1InnerHTML').innerText);




console.log('                                  ');
console.log('******* ⏩ OuterHTML ⏪ *******');

var outerHtml = 
    document.querySelector('.outerHtml');

outerHtml.outerHTML = '<h2>Add Element h2 and text</h2>';

console.log(outerHtml.outerHTML);

console.log('⏩ Kết Luận ⏪')
console.log('GET')
console.log('⚡InnerHTML: Lấy bên trong của Element được get⚡')
console.log('⚡OuterHTML: Lấy cả Element được get⚡')

console.log('SET')
console.log('⚡InnerHTML: Thêm bên trong của Element được get, thay thế các element có sẵn⚡');
console.log('⚡OuterHTML: Thay thế cả Element được get⚡');


console.log('*** Bài tập 1 ***')
console.log('hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trước.');

function render(html) {
    var btinnerHtml = document.querySelector('.fnInner1');
btinnerHtml.innerHTML = html;
}
//  Call Function
render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`)


console.log('                                  ');
console.log('*** Bài tập 2 ***');
console.log('hàm render2 sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.');
console.log("Ví dụ: Với mảng var courses = '['ReactJS', 'AngularJS', 'VueJS']' sẽ thu được kết quả:");
console.log("- ReactJS");
console.log("- AngularJS");
console.log("- VueJS");

var coursesBT = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render2(courses) {
    var make_li = coursesBT.map(function(value, index) {
        return `<li>${value}</li>`
    });
    var strings = make_li.join('')
    document.querySelector('.courses-list').innerHTML = strings
}
// document.querySelector("ul").innerHTML = courses.map(course => `<li>${course}</li>`)

//  Call Function
render2(coursesBT);


console.log('                                  ');
console.log('******* ⏩ Node Propẻties ⏪ *******');
