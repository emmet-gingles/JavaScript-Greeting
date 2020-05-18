// Function that makes the menu appear on page
function showMenu() {	
	var menu = document.getElementById("menu-border");
	// Shows the menu by setting its display property to block
	menu.style.display = "block";
}

// Function that closes the menu 
function closeMenu() {
	var menu = document.getElementById("menu-border");
	// Hides the menu by setting its display property to none
	menu.style.display = "none";
}

// Called anytime a click event occurs
window.onclick = function() {
	var menu = document.getElementById("menu-border");
	// If user click outside of the menu then close it
	if(event.target == menu) {
		closeMenu();
	}
}

// Function that shows a greeting		
function showGreeting() {
	// Prevent form from reloading page 
	event.preventDefault();
	
	// Get the values of the name entered and the language selected, save to variables
	var name = document.getElementById("name").value;
	var language = document.getElementById("language").value;
	
	// Check that name is not empty
	if(name == "") {
		document.getElementById("errorMsg").innerHTML = "Please enter a name";
	}
	else {
		// Close menu
		closeMenu();
		// Variable to store the greeting
		var greeting;
		// Get the current date
		var date = new Date();
		// Get the current hour
		var hour = date.getHours();
		// Depending on the time of day, a different greeting will be called
		if(hour >= 0 && hour < 12) {
			greeting = translateMorningGreeting(language, name, date);	
			// Set background colour to light blue
			document.body.style.backgroundColor = '#66ffff';					
		}
		else if(hour >= 12 && hour < 18) {
			greeting = translateAfternoonGreeting(language, name, date);
			// Set background colour to green
			document.body.style.backgroundColor = '#66ff66';
		}
		else {
			greeting = translateEveningGreeting(language, name, date);
			// set background colour to purple
			document.body.style.backgroundColor = '#ff66cc';
		}
		// Set the text of HTML element to the greeting
		document.getElementById("greeting").innerHTML = greeting;
	}			
}

// Function that shows the morning greeting in the selected language		
function translateMorningGreeting(language, name, date) {
	// Switch statement uses the language to determine the greeting
	switch(language) {
		case 'English':
			greeting = "Good morning, " + name + ". How are you? <br/> The current time is ";
			break;
		case 'French':
			greeting = "Bonjour, " + name + ". Comment ça va? <br/> L'heure actuelle est ";
			break;
		case 'German':
			greeting = "Guten Morgen, " + name + ". Wie geht es dir? <br/> Die aktuelle Zeit ist ";
			break;
		case 'Italian':
			greeting = "Buongiorno, " + name +  ". Come stai? <br/> L'ora attuale è ";
			break;
		case 'Spanish':
			greeting = "Buenos días, " + name + ". ¿Cómo estás? <br/> La hora actual es ";
			break;	
	}
	// Concatenate the time to the greeting
	greeting = greeting + displayTime(date)
	return greeting
}
	
// Function that shows the afternoon greeting in the selected language		
function translateAfternoonGreeting(language, name, date) {			
	switch(language) {
		case 'English':
			greeting = "Good afternoon, " + name + ". How are you? <br/> The current time is ";
			break;
		case 'French':
			greeting = "Bonne après-midi, " + name + ". Comment ça va? <br/> L'heure actuelle est ";
			break;
		case 'German':
			greeting = "Guten Tag, " + name + ". Wie geht es dir? <br/> Die aktuelle Zeit ist ";
			break;
		case 'Italian':
			greeting = "Buon pomeriggio, " + name +  ". Come stai? <br/> L'ora attuale è ";
			break;
		case 'Spanish':
			greeting = "Buenas tardes, " + name + ". ¿Cómo estás? <br/> La hora actual es ";
			break;
	}
	greeting = greeting + displayTime(date)
	return greeting
}
		
// Function that shows the evening greeting in the selected language	
function translateEveningGreeting(language, name, date) {
	switch(language) {
		case 'English':
			greeting = "Good evening, " + name + ". How are you? <br/> The current time is ";
			break;
		case 'French':
			greeting = "Bonsoir, " + name + ". Comment ça va? <br/> L'heure actuelle est ";
			break;
		case 'German':
			greeting = "Guten Abend, " + name + ". Wie geht es dir? <br/> Die aktuelle Zeit ist ";
			break;
		case 'Italian':
			greeting = "Buonasera, " + name +  ". Come stai? <br/> L'ora attuale è ";
			break;
		case 'Spanish':
			greeting = "Buena noches, " + name + ". ¿Cómo estás? <br/> La hora actual es ";
			break;
	}
	greeting = greeting + displayTime(date)
	return greeting
}

// Function that shows the time in a string format	
function displayTime(date) {
	// Variables to store each part of the time
	var hours = date.getHours();
	var mins = date.getMinutes();
	var secs = date.getSeconds();
	// If any numbers are less than 10 then place a zero before them
	if(hours < 10) {
		hours = "0" + hours;
	}
	if(mins < 10) {
		mins = "0" + mins;
	}
	if(secs < 10) {
		secs = "0" + secs;
	}
	// Return the hours, minutes and seconds seperated by colons
	return hours+":"+mins+":"+secs;
}