var Student = require("./student.js")

var Bus = function(driverName, color, gas) {	
    this.studentsOnTheBus = [];
    this.driverName = driverName;
    this.color = color;
    this.gas = gas;
    this.studentEntersBus = function(name, gender, grade, GPA, deten,
        sleep, catch) {
        this.studentsOnTheBus.push(new Student(name, gender, grade,
            GPA, deten, sleep, catch));
        console.log(this.studentsOnTheBus)
    }
    this.busChatter = function() {
        for (var i = 0; i < studentsOnTheBus.length; i++) {
            studentsOnTheBus[i].canStudentHaveFun();
        }
    }
}

module.exports = Bus;
