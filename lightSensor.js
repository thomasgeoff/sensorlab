//Value variable for Light sensor
var light=0;
//Light sensor instance
var lightSensor;
//Html element variable
var lightRateEl;
//Light sensor capability variable	
var lightCapability = tizen.systeminfo.getCapability('http://tizen.org/feature/sensor.photometer');
//Function to start the lightsensor
function getLight(){
//Display all avaialable sensors	
var sensors = tizen.sensorservice.getAvailableSensors();
console.log('Available sensor: ' + sensors.toString());
//Check if light sensor is supported
if (lightCapability === true) {
	/* Device supports the light sensor */
	console.log("Device supports the light sensor");
	lightSensor = tizen.sensorservice.getDefaultSensor('LIGHT');
}
//start the light sensor	
lightSensor.start(light_onsuccessCB);
}
//Function to get the light sensor hardware information
function getLightInfo(){
//Check if light sensor is supported
if (lightCapability === true) {
	/* Device supports the light sensor */
	console.log("Device supports the light sensor");
	lightSensor = tizen.sensorservice.getDefaultSensor('LIGHT');
}
//Get the light sensor hardware information	
lightSensor.getSensorHardwareInfo(light_onsuccessCB_hwInfo, light_onerrorCB);
}
//Function called to get the light sensor value
function light_onsuccessCB()
{
  console.log("Light sensor started succesfully");
  //If light sensor started successfully, then return light value else error
  lightSensor.getLightSensorData(light_onGetSuccessCB, light_onerrorCB);
}
//Function called to get the light sensor hardware information
function light_onsuccessCB_hwInfo(hwInfo) {
    //Display all harware information in emulator mode
    console.log("Light Sensor Hardware Information");
    console.log('name: ' + hwInfo.name);
    console.log('type: ' + hwInfo.type);
    console.log('vendor: ' + hwInfo.vendor);
    console.log('minValue: ' + hwInfo.minValue);
    console.log('maxValue: ' + hwInfo.maxValue);
    console.log('resolution: ' + hwInfo.resolution);
    console.log('minInterval: ' + hwInfo.minInterval);
    console.log('maxBatchCount: ' + hwInfo.maxBatchCount);
}
//Function called when light sensor started successfully
function light_onGetSuccessCB(sensorData) {
    console.log('light level: ' + sensorData.lightLevel);
    //Assign Light variable with light value
    light = sensorData.lightLevel;
    //Pass the light value to the Frontend/ html file
    lightRateEl.innerHTML = '';
    lightRateEl.innerHTML = "Light:" + ((light/65536)*100).toFixed(1)+"%";
    //Check if light value change
    lightSensor.setChangeListener(light_onchangedCB);
}
//Fucntion called if light value changes
function light_onchangedCB(sensorData) {
    console.log('Light sensor data: ' + sensorData.lightLevel);
    //Assign Light variable with the new light value
    light = sensorData.lightLevel;
    //Pass the new light value to the Frontend/ html file
    lightRateEl.innerHTML = '';
    lightRateEl.innerHTML = "Light:" + ((light/65536)*100).toFixed(1)+"%";
    console.log('light value updated');
}
//Fucntion called when an error occurs
function light_onerrorCB(error) {
    console.log("Light Sensor Error name:"+error.name + ", message: "+error.message);
}
//Fucntion called to stop the light sensor
function stopLight(){
	//Stop the light sensor
	lightSensor.stop();
	//Erase the old light value from Frontend/Html file
	lightRateEl.innerHTML = '';
}
