/* Biography */
var bio = {
	"name" : "Alexander Ramos",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "aramos72@gmail.com",
		"github" : "aramo011",
		"location" : "Miami"
	},	
	"picture" : "images/fry.jpg",
	"welcomeMsg" : "Welcome",
	"skills" : [
		"HTML", " CSS", " JavaScript"
	]
};

/* Work Experience*/
var work = {
	"jobs" : [
		{
			"employer" : "AT&T",
			"title" : "Electronic Technician",
			"location" : "Miami, FL",
			"dates" : "2000-present",
			"description" : "Installation, configuration, and maintenance of communication equipment"
		},
		{
			"employer" : "CompuLab",
			"title" : "Network Support",
			"location" : "Miami, FL",
			"dates" : "6/2000-10/2000",
			"description" : "Installation, configuration, and maintenance of network elements"
		},
		{
			"employer" : "DISAIC",
			"title" : "Network Administrator",
			"location" : "Havana, Cuba",
			"dates" : "9/1997-9/1999",
			"description" : "Installation, configuration, and maintenance of network server and terminals"
		}
	]
};

/* Projects */
var project = {
	"projects" : [
		{
			"title" : "Mockup",
			"dates" : "4/2015",
			"description" : "Design a web page based on a mockup",
			"images" : ["www.github.com/aramo011"]
		},
		{
			"title" : "Resume",
			"dates" : "5/2015",
			"description" : "Build a resume web page",
			"images" : ["www.github.com/aramo011"]
		},		
		{
			"title" : "Arcade Game",
			"dates" : "7/2015",
			"description" : "Build a javascript-based game",
			"images" : ["www.github.com/aramo011"]
		}
	]
};

/* Education */
var education = {
	"schools" : [ 
		{
			"name" : "Florida International University",
			"location" : "Miami, FL",
			"degree" : "BA",
			"majors" : ["Computer Science"],
			"dates" : "2006-Present",
			"url" : "http://www.fiu.edu"
		},
		{
			"name" : "Jose A. Echeverria",
			"location" : "Havana, Cuba",
			"degree" : "BA",
			"majors" : ["Automation"],
			"dates" : "1997",
			"url" : "http://cujae.edu.cu/en"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Web Development",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
};

/* Biography */
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedPic);
	$("#header").append(formattedWelcome);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
	}

	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedlocation);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedlocation);
};

/* Work Experience */
work.display = function() {
	for (index in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$("#workExperience").append(HTMLworkStart); //create new div for work experience
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
};

/* Projects */
project.display = function() {
	for (var index in project.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[index].title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.projects[index].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[index].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (project.projects[index].images.length > 0) {
			for (imgIndex in project.projects[index].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", project.projects[index].images[imgIndex]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

/* Education */
education.display = function() {
	for (var index in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", education.schools[index].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
		
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);

		for (var majorsIdx in education.schools[index].majors) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].majors[majorsIdx]);
			$(".education-entry:last").append(formattedMajor);
		}
	}

	/* Online Courses */
	$("#education").append(HTMLonlineClasses);
	for (var onlineIndx in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineIndx].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineIndx].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineIndx].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineIndx].url);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

bio.display();
work.display();
project.display();
education.display();

/* Adding a button for name change to the page */
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

function inName(name) {
	var arrOfStr = name.split(" ");
	var firstName = arrOfStr[0].charAt(0).toUpperCase() + arrOfStr[0].slice(1);
	var lastName = arrOfStr[1].toUpperCase();
	var internationalizedName = firstName + " " + lastName;
	return internationalizedName;
}
