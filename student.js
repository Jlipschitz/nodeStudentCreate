var prompt = require("prompt");

var Student = function(name, gender, grade, GPA, detentions,
    sleepingInClass, catchPhrase) {
    this.name = name;
    this.gender = gender;
    this.grade = grade;
    this.GPA = GPA;
    this.detentions = detentions;
    this.sleepingInClass = sleepingInClass;
    this.catchPhrase = catchPhrase;
    this.canStudentHaveFun = function() {
        if (Student.GPA > 2 && Student.detentions < 10) {
            console.log("student can have fun");
        }
    }
}

module.exports = Student;
