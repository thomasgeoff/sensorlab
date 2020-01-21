window.onload = function () {
    //Accelerometer sensor Html element is connected to the front-end html file
	accelerometerRateEl = document.getElementById('textbox');
	//Function called to start the accelerometer sensor
	getAccelerometer();
	//publishToWebapp() function is called every 5000 milliseconds
	setInterval(publishToWebapp, 5000);
	//Creates an eventlistener to close the application when back button is pressed 
	backButton();
};
//Function which makes the smart watch vibrate if light value < 10
function publishToWebapp(){
	console.log("publishToWebapp function called...");

	//POST request to webapp with accelerometer value & add internet privelege
	postWebapp(ax,ay,az);
	
	//GET request to webapp & add internet privelege
	getWebapp();
		
	}
	
