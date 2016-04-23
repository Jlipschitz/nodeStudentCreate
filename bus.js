var Student = require("./student.js")

var Bus = function (driverName, color, gas) {
    this.studentsOnTheBus = [];
    this.driverName = driverName;
    this.color = color;
    this.gas = parseInt(gas);
    this.studentEntersBus = function (name, gender, grade, GPA, deten,
        sleep, catchPhrase) {
        this.studentsOnTheBus.push(new Student(name, gender, grade,
            GPA, deten, sleep, catchPhrase));
        console.log(this.studentsOnTheBus)
    }
    //console logs all of the students catchphrases
    this.busChatter = function () {
        for (var i = 0; i < this.studentsOnTheBus.length; i++) {
            console.log(this.studentsOnTheBus[i].catchPhrase);
        }
    }
    //call our busChatter functon when the bus is > 19
    this.attendance = function () {
        if (this.studentsOnTheBus.length > 19) {
            this.busChatter();
        }
    }
    //sort through our students array and remove where it matches the name passed into our removeStudent function
    this.removeStudent = function (studentName) {
        for (var i = 0; i < this.studentsOnTheBus.length; i++) {
            if (this.studentsOnTheBus[i].name === studentName) {
                this.studentsOnTheBus.splice(i, 1);
            }
        }
        console.log(this.studentsOnTheBus);
    }
}

module.exports = Bus;
