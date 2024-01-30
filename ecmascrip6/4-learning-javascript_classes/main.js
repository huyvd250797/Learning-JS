// *** Classes ***

// Constructor function
function Course(name, price) {
    this.name = name;
    this.price = price;
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('Javascript', 2000);

console.log(phpCourse);
console.log(jsCourse);

// Classes
class Course1 {
    constructor(name, price) {
        this.name = name;
        this.price = price
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}