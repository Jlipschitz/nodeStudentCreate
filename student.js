var Student = function (name, gender, grade, GPA, detentions,
    sleepingInClass, catchPhrase) {
    this.name = name;
    this.gender = gender;
    this.grade = grade;
    this.GPA = GPA;
    this.detentions = detentions;
    this.sleepingInClass = sleepingInClass;
    this.catchPhrase = catchPhrase;
    this.canStudentHaveFun = function () {
        if (this.GPA > 2 && this.detentions < 10) {
            console.log("student can have fun");
        } else {
            console.log("student cannot have fun");
        }
    }
}

module.exports = Student;
