const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address:"East 68th Street and Lexington Avenue"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address:"Massachusetts Hall Cambridge, MA 02138"
	});

	const dummy_student = await Student.create({
	firstname: "Joe",
      lastname: "Shmo",
	  email: "abc@abc.com",
	  gpa: '4'
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;