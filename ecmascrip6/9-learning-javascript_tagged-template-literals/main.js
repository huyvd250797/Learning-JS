function highlight([first, ...strings], ...values) {
    // console.log('first: ', first);
    // console.log('strings: ', strings);
    // console.log('values: ', values);
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    )
    .join('');

}

// Mong muốn: Học lập trình <span>Javascript</span> tại <span>F8</span> nhé!

var brand = 'F8';
var course = 'Javascript';

// Cú pháp
// bold text
const html = highlight`Học lập trình ${course} tại ${brand} nhé!`;

console.log(html);