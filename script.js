/* ------------------- v1.0 -------------------- */
var ivan = {
    name: 'Ivan', 
    lastName: 'Stoyanov',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Lily', 'Peter', 'Gosho'],
    calculateAge: function() {                //function expression
        return 2016 - this.yearOfBirth;
    }
};

console.log(ivan);
console.log(ivan.family[2]);
console.log(ivan.calculateAge());

var age = ivan.calculateAge();
ivan.age = age;

console.log(ivan);

/* ------------------- v2.0 -------------------- */

var ivan = {
    name: 'Ivan', 
    lastName: 'Stoyanov',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Lily', 'Peter', 'Gosho'],
    calculateAge: function() {                // this is a method (function expression)
        //return 2016 - this.yearOfBirth;
        this.age = 2016 - this.yearOfBirth;  //(.this) refers to ivan's obejct
    }
};

ivan.calculateAge();
console.log(ivan);
