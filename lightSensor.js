
var light=0;

var lightSensor;

var lightRateEl;
	
var lightCapability = tizen.systeminfo.getCapability('http://tizen.org/feature/sensor.photometer');

function getLight(){
	
var sensors = tizen.sensorservice.getAvailableSensors();
console.log('Available sensor: ' + sensors.toString());

if (lightCapability === true) {
	/* Device supports the light sensor */
	console.log("Device supports the light sensor");
	lightSensor = tizen.sensorservice.getDefaultSensor('LIGHT');
}
	
lightSensor.start(light_onsuccessCB);

}

function getLightInfo(){

if (lightCapability === true) {
	/* Device supports the light sensor */
	console.log("Device supports the light sensor");
	lightSensor = tizen.sensorservice.getDefaultSensor('LIGHT');
}
	
lightSensor.getSensorHardwareInfo(light_onsuccessCB_hwInfo, light_onerrorCB);

}
	
function light_onsuccessCB()
{
  console.log("Light sensor started succesfully");
  
  lightSensor.getLightSensorData(light_onGetSuccessCB, light_onerrorCB);
  
}

function light_onsuccessCB_hwInfo(hwInfo) {
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

function light_onGetSuccessCB(sensorData) {
    console.log('light level: ' + sensorData.lightLevel);
	light = sensorData.lightLevel;
	lightRateEl.innerHTML = '';
    lightRateEl.innerHTML = "Light:" + ((light/65536)*100).toFixed(1)+"%";
    lightSensor.setChangeListener(light_onchangedCB);
}

function light_onchangedCB(sensorData) {
    console.log('Light sensor data: ' + sensorData.lightLevel);
    light = sensorData.lightLevel;
    lightRateEl.innerHTML = '';
    lightRateEl.innerHTML = "Light:" + ((light/65536)*100).toFixed(1)+"%";
    console.log('light value updated');
}

function light_onerrorCB(error) {
    console.log("Error name:"+error.name + ", message: "+error.message);
}

function stopLight(){
	lightSensor.stop();
	lightRateEl.innerHTML = '';
}

