	var prompt = require("prompt")
	var Bus = require("./bus.js");
	prompt.start();

	var myBus = new Bus("Sam", "color", 4)

	prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 
		'sleepingInClass', 'catchPhrase'], function(err, result) {
			
	    myBus.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result.detentions,
	        result.sleepingInClass);

	});

	
