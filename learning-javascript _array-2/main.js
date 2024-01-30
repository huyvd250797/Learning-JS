
/* -------------------**** MẢNG (ARRAY) P2 _ IMPORTANT ****-------------------
*/
// Các phương thức (Array method)
/*
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
 */


    //  mảng dùng ví dụ
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 300
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 250
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0 
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 5,
        name: 'C++',
        coin: 0
    },
    {
        id: 6,
        name: 'ReactJS',
        coin: 700
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 150
    },

];

//  forEach() : duyệt qua các phần tử của mảng
console.log('---------- forEach() ----------');

courses.forEach(function(course, index) {
    console.log(index, course)
});

//  every(): kiểm tra xem tất cả phần tử của mảng 
//  có đúng với 1 điều kiện cho trước
//  KHÔNG DUYỆT TOÀN BỘ PHẦN TỬ


// ******  Đúng thì duyệt mảng tiếp -> Sai thì ngừng *****
console.log('---------- every() ----------');

var isFree = courses.every(function(course, index) {
    //  kiểm tra xem tất cả các coin trong course có = 0 hay không
    return course.coin === 0;
});

console.log(isFree)

//  some(): kiểm tra xem 1 phần tử của mảng đúng với điều kiện

// ****** Sai thì duyệt mảng tiếp -> Đúng thì ngừng *****

console.log('---------- some() ----------');

var isFree1 = courses.some(function(course, index) {
    //  kiểm tra xem tất cả các coin trong course có = 0 hay không
    return course.coin === 0;
});

console.log(isFree1)


//  Tìm giá trị của các phần tử trong mảng
//  nếu có => giá trị phần tử đó -> kết thúc
//  nếu không -> NULL

//  => KẾT QUẢ TRẢ VỀ CHỈ 1 PHẦN TỬ KHI TRUE
console.log('---------- find() ----------');

var course1 = courses.find(function(course, index) {
    //  kiểm tra xem tất cả các name trong course có = Ruby hay không
    return course.name === 'Ruby';
});

console.log(course1)



//  Giống find()
//  => KẾT QUẢ TRẢ VỀ TẤT CẢ PHẦN TỬ TRONG MẢNG
console.log('---------- filter() ----------');
var course2 = courses.filter(function(course, index) {
    //  kiểm tra xem tất cả các name trong course có = Ruby hay không
    return course.name === 'Ruby';
});

console.log(course2)


console.log('********* Bài tập*********')
console.log('Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.')


const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport() {
    return sports.filter(function(sport) {
        return sport.like > 5;
    })
}

console.log(getMostFavoriteSport(sports))


//  Muốn thay đổi những element của 1 array
console.log('---------- map(): very important ----------');

//  thay đổi: 
//  thêm từ "Khóa học" & thêm 1 key "coinText: 'Gia: [giá trị của coin]'"
//  trong các phần tử của mảng coures

function courseHandler(course3, index) {
    return {
        id: course3.id,
        name: `Khóa học: ${course3.name}`,
        coin: course3.coin,
        coinText: `Giá: ${course3.coin} `,
        index: index,
        originArray1: courses
    }
}

var newCourses = courses.map(courseHandler);

console.log(newCourses)

console.log('** Lấy ra tên khóa học và đưa vào 1 mảng mới')

function courseHandler1(course4, index) {
    return course4.name
}

var newCourses1 = courses.map(courseHandler1)
console.log(newCourses1)


//  Khi muốn nhân về 1 giá trị duy nhất
console.log('---------- reduce(): very important ----------');
//  Tính tổng số coin của mảng course

console.log('*** Không dùng reduce()')

var totalCoin = 0;
for (var course5 of courses) {
    totalCoin += course5.coin;
}
console.log(totalCoin)

console.log('*** Khi Dùng reduce()')

var i = 0;
//  accumulator: biển lưu trữ (sẽ được gán giá trị lưu trữ ở dưới)
//  currentValue: Giá trị hiện tại trong mảng
//  currentIndex: Giá trị vị trí hiện tại trong mảng
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;

    var total = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue.coin,
        'Tích trữ được: ': total,
    })  

    return total;
}

//  reduce([function], [giá trị khởi tạo])
//  giá trị khởi tạo sẽ được gán cho lượt chạy đầu tiên của accumulator
var totalCoin1 = courses.reduce(coinHandler, 0);

console.log(totalCoin)

//  Tại SEA GAMES 31 vừa qua, 
//  đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương
//  Hãy tạo hàm getTotalGold có 1 tham số là mảng.
//  Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được 
//  trong kỳ SEA Game lần này.
console.log('**** Bài tập reduce()')
var seagameSports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(arr) {
    return arr.reduce(function getTotalGold(a, cv) {
        return a + cv.gold;
    }, 0) // initial value
}


// Expected results:
console.log(getTotalGold(seagameSports)) // Output: 23


//  Trường hợp có thể bỏ initial value
var numbers = [300,250,0, 500,0,700,150];

var totalNumber = numbers.reduce(function(total, number1) {
    return total + number1
},0)
//  khi nào không cần biến initial value mà vẫn chạy đúng => không cần truyển
//  nếu không truyển initial value, khi chạy reduce sẽ lấy giá trị đầu tiền trong mảng
//  và sẽ trả về loại định dạng đó. 
// => Muốn hàm reduce trả về loại gì thì, gắn initial value loại đó
console.log(totalNumber)

console.log('---------- Bài tập về reduce() P2 ----------')
console.log('** Flat - "Làm phẳng" mảng từ Depth Array - "Mảng sâu" **')
console.log('** Cho mảng: [1, 2, [3, 4], 5, 6, [7, 8, 9]] **')

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    //  concat: nối mảng
    return flatOutput.concat(depthItem)
}, [])

console.log(flatArray)

console.log('---------- Bài tập về reduce() P3 ----------')
console.log('** Lấy ra các khóa học, đưa vào mảng mới **')

var topics = [
    {
        topic: 'Front-End',
        info: [
            {
                id: 1,
                titile: 'HTML, CSS'
            },
            {
                id: 2,
                titile: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-End',
        info: [
            {
                id: 1,
                titile: 'PHP'
            },
            {
                id: 2,
                titile: 'NodeJS'
            }
        ]
    }
]

var bestCourses = topics.reduce(function(info, topic) {
    return info.concat(topic.info)
}, [])

console.log(bestCourses)

//  thêm các kết quả của mảng vào 1 mảng htmls
var htmls = bestCourses.map(function(info) {
    return `
    <div>
        <h2>${info.titile}</h2>
        <p>ID: ${info.id}</p>
    </div>
    `;
})

console.log(htmls);
//  từ mảng html trên => xuất ra được mã html
console.log(htmls.join(''));



console.log('---------- Bài tập về reduce() P4 ----------')

var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];

function calculateRating(value) {
    //  lọc ra được film của đạo diễn Chris
    var films = value.filter(function(director) {
        return director.Director === 'Christopher Nolan'
    });
    //  tính tổng điểm IBDM
    var totalIBDM = films.reduce(function(point, film) {
        //  String => Number
        return point + film.imdbRating*1;
    }, 0)
    //  lấy tổng chia chiều dài mảng đã lọc (trung bình)
    return totalIBDM/films.length;
}

console.log("Điểm IBDM trung bình:",calculateRating(watchList))


console.log('---------- String/Array includes() method ----------')

//  includes method / 
console.log('** Dùng với String')
var text = 'Responsive web design';

//  trong chuỗi của biến text có chữ 'web', nên consolo trả về TRUE
console.log(text.includes('web', 1))    // 1: là vị trí số 1 là chữ 'e'

console.log('** Dùng với Array');

var fruit = [
    'apple',
    'orange',
    'straw berry',
    'mango'
]
//  tìm orange có trong mảng fruit không?
console.log(fruit.includes('orange', 2))    
// truyển số âm sẽ = độ dài mảng + số âm, VD: 4 +(-2) => tìm tự vị trí 2
