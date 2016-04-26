var prompt = require("prompt")
var Bus = require("./bus.js");
prompt.start();

//create a bus constructor
var myNewBus = new Bus("Joseph", "Yellow", 15);
//input object for console logs
var input = {
	addQuestion: function () { console.log("Type \"delete\" to remove student from bus. Type \"append\" to add student to the bus.") },
	askAgain: function () { console.log("The bus driver did not understand your command. Type \"append\" or \"delete\".") },
	repeatInitialQ: false,
	removeDialog: function () { console.log("Type the name of the student you wish to remvoe from the bus.") }
}
//add student to our bus
function takeInStudent() {
	prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions',
		'sleepingInClass', 'catchPhrase'
	], function (err, result) {
		//pass values in our bus constructor once we gather input from our prompts and create a new student
		myNewBus.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result.detentions,
			result.sleepingInClass, result.catchPhrase);
		
		myNewBus.studentsOnTheBus[0].canStudentHaveFun();
		myNewBus.attendance(); 
		startInput(); 
	});
}
//remove student from our bus
function takeOutStudent() {
	input.removeDialog();

	prompt.get(['remove'], function (err, result) {
		myNewBus.removeStudent(result.remove);
		startInput();
	});
}
//initial function that callsback takeOutStudent() or takeInStudent()
function startInput() {
	if (input.repeatInitialQ === false) {
		input.addQuestion();
	}
	prompt.get(['action'], function (err, result) {
		if (result.action === "append") {
			input.repeatInitialQ = false;
			takeInStudent();
		} else if (result.action === "delete") {
			input.repeatInitialQ = false;
			takeOutStudent();
		} else {
			input.askAgain();
			input.repeatInitialQ = true;
			startInput();
		}
	});
}
startInput();
