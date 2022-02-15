///////////////////
// Using constructor function

const Person = function (fname, byear) {
    this.fname = fname;
    this.byear = byear;
};

Person.prototype.calcAge = function () {
    console.log(2022 - this.byear);
};

const Student = function (fname, byear, course) {
    Person.call(this, fname, byear);
    this.course = course;
};

// We should add it here only
// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.fname}`);
};

const ajith = new Student("ajith", 2001, "computer science");

console.log(ajith);
ajith.introduce();

console.log(ajith.__proto__);
console.log(ajith.__proto__.__proto__);

console.log(ajith instanceof Student);
console.log(ajith instanceof Person);
console.log(ajith instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////
// Using class

class PersonCl {
    constructor(fname, byear) {
        this.fname = fname;
        this.byear = byear;
    }
}

class StudentCl extends PersonCl {
    constructor(fname, byear, course) {
        // Always needs to happen first.
        // This will make access to this keyword
        super(fname, byear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fname}`);
    }
}

const stark = new StudentCl("stark", 2001, "cs");
stark.introduce();

//////////////////////////////
// Object.create()

const PersonProto = {
    calcAge() {
        console.log(2022 - this.byear);
    },

    init(fname, byear) {
        this.fname = fname;
        this.byear = byear;
    },
};

// const tony = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (fname, byear, course) {
    PersonProto.init.call(fname, byear);
    this.course = course;
};

const tony = Object.create(StudentProto);
tony.init("tony", 2001, "cs");
