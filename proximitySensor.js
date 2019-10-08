
var light=0;

var lightSensor;

var lightRateEl;
	
var lightCapability = tizen.systeminfo.getCapability('http://tizen.org/feature/sensor.proximity');

function getLight(){
	
var sensors = tizen.sensorservice.getAvailableSensors();
console.log('Available sensor: ' + sensors.toString());

if (lightCapability === true) {
	/* Device supports the light sensor */
	console.log("Device supports the light sensor");
	lightSensor = tizen.sensorservice.getDefaultSensor('PROXIMITY');
}
	
lightSensor.start(onsuccessCB);

}

function getLightInfo(){

if (lightCapability === true) {
	/* Device supports the light sensor */
	console.log("Device supports the light sensor");
	lightSensor = tizen.sensorservice.getDefaultSensor('PROXIMITY');
}
	
lightSensor.getSensorHardwareInfo(onsuccessCB_hwInfo, onerrorCB);

}
	
function onsuccessCB()
{
  console.log("Light sensor started succesfully");
  
  lightSensor.getProximitySensorData(onGetSuccessCB, onerrorCB);
  
}

function onsuccessCB_hwInfo(hwInfo) {
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

function onGetSuccessCB(sensorData) {
    console.log('light level: ' + sensorData.proximityState);
	light = sensorData.proximityState;
	lightRateEl.innerHTML = '';
    lightRateEl.innerHTML = "Light:" + light;
    lightSensor.setChangeListener(onchangedCB);
    //return light;
}

function onchangedCB(sensorData) {
    console.log('Light sensor data: ' + sensorData.proximityState);
    light = sensorData.proximityState;
    //console.log('Light value2: ' + light);
    //return light;
    lightRateEl.innerHTML = '';
    lightRateEl.innerHTML = "Light:" + light;
    console.log('light value updated');
}

function onerrorCB(error) {
    console.log("Error name:"+error.name + ", message: "+error.message);
}

function stopLight(){
	lightSensor.stop();
	lightRateEl.innerHTML = '';
}

