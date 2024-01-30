
// *** Template Literals (Template string) ***

// Cách thông thường, toán tử +
const courseName = 'JavaScript';
const description = 'Course name: ' + courseName;

console.log(description);

// Template Literals (Template string)
const courseName1 = 'JavaScript 1';
const description1 = `Course name: ${courseName1}`

console.log(description1);


// Muốn viết các ký tự: \, ${}, ...
const courseName2 = 'JavaScript 2';

// ==> có thể in ra \
const description2 = `\\`

// thêm dấu "\" sẽ in ra được ${}
const description3 = `In ra cap ky tu Template String: \${}`


console.log(description2);
console.log(description3);




// *** Multi-line String ***

// Cách thông thường "\n" để xuống dòng
const lines = 'Line 1\nLine 2'
console.log(lines);


// Use Template string
const lines1 = `Line 1
Line 2
Line 3`

console.log(lines1);


