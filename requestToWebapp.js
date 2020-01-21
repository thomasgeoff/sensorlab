var HttpAgentGet, HttpAgentPost, HttpAgentPut;

var v1,v2,v3;

function postWebapp(value1, value2, value3){
	HttpAgentPost = new XMLHttpRequest();
	var data = { };
	data.temperature = value1;
	data.humidity = value2;
	data.brightness = value3;
	data = JSON.stringify(data);
	console.log(data);
	var url = "http://gtsensorlab.herokuapp.com/api/data";
	HttpAgentPost.open("POST", url, true);
	HttpAgentPost.setRequestHeader('Content-Type','application/json;charset=utf-8');
	HttpAgentPost.onload = function () {
		console.log("POST Request Reponse Text:"+HttpAgentPost.responseText);
		console.log("POST Request Ready State:"+HttpAgentPost.readyState);
		console.log("POST Request Status:"+HttpAgentPost.status);
	};
	HttpAgentPost.send(data);
}
function getWebapp(){
	console.log("GET request to Webapp fucntion called");
	
	HttpAgentGet = new XMLHttpRequest();
	HttpAgentGet.open("GET", "http://gtsensorlab.herokuapp.com/api/data",true);
	HttpAgentGet.onload  = function() {
			   var jsonResponse = JSON.parse(HttpAgentGet.responseText);
			   console.log("GET Request Reponse Text:"+HttpAgentGet.responseText);
			   console.log("GET Request Ready State:"+HttpAgentGet.readyState);
			   console.log("GET Request Status:"+HttpAgentGet.status);
			   //Note: the webapp was initially designed for temperature, humidity and brightness
			   v1 = jsonResponse[jsonResponse.length-1].temperature;//Value1
			   v2 = jsonResponse[jsonResponse.length-1].humidity;//Value2
			   v3 = jsonResponse[jsonResponse.length-1].brightness;//Value3
			   console.log("Value1:"+v1);
			   console.log("Value2:"+v2);
			   console.log("Value3:"+v3);
			   
			};
	HttpAgentGet.send();
}
function putWebapp(color_code){
	HttpAgentPut = new XMLHttpRequest();
	var data = { };
	data.lightColor = color_code;
	data = JSON.stringify(data);
	console.log(data);
	var url = "http://gtsensorlab.herokuapp.com/api/settings";
	HttpAgentPut.open("PUT", url, true);
	HttpAgentPut.setRequestHeader('Content-Type','application/json;charset=utf-8');
	HttpAgentPut.onload = function () {
		console.log("PUT Request Reponse Text:"+HttpAgentPut.responseText);
		console.log("PUT Request Ready State:"+HttpAgentPut.readyState);
		console.log("PUT Request Status:"+HttpAgentPut.status);
	};
	HttpAgentPut.send(data);	
}
