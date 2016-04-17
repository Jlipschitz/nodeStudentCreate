	var prompt = require("prompt")
	var Bus = require("./bus.js");


	prompt.start();
	var myNewBus = new Bus("Joseph", "Yellow", 15);

	prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions',
	    'sleepingInClass', 'catchPhrase'
	], function(err, result) {

	    myNewBus.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result.detentions,
	        result.sleepingInClass, result.catchPhrase);
	 
	    myNewBus.studentsOnTheBus[0].canStudentHaveFun();
	    myNewBus.attendance(); //calls bus chatter if # students on bus are equal to or greater than twenty
	});
