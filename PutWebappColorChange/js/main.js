var color_codeEl;

window.onload = function () {
	//color_code Html element is connected to the front-end html file
	color_codeEl = document.getElementById('textbox');
	//publishToWebapp () function is called every 1000 milliseconds
	setInterval(publishToWebapp, 2000);
	//Creates an eventlistener to close the application when back button is pressed 
	backButton();
};
//Function which makes the smart watch vibrate if light value < 10
function publishToWebapp(){
	console.log("publishToWebapp function called...");
	//Generate random Hexadecimal color code
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	//Change the color of the Html element
	color_codeEl.style.color = "#"+randomColor;
	//Replace the text of the Html element
	color_codeEl.innerHTML = "";
	color_codeEl.innerHTML = "ColorChange";
	console.log("Color_code:"+randomColor);
	//GET request to webapp & add internet privelege
	putWebapp(randomColor);//randomColor is a String
		
	}
	
