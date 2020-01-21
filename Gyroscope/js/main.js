
window.onload = function () {
    //Light sensor Html element is connected to the front-end html file
	gyroscopeRateEl = document.getElementById('textbox');
	//Function called to start the light sensor
	getGyroscope();	
	//Creates an eventlistener to close the application when back button is pressed 
	backButton();
};
