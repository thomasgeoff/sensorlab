var grx,gry,grz = 0;

var gravitySensor;
	
var gravityRateEl;

var gravityCapability = tizen.systeminfo.getCapability('http://tizen.org/feature/sensor.gravity');

function getGravity(){

if (gravityCapability === true) {
	/* Device supports the gyroscope sensor */
	console.log("Device supports the gravity sensor");
	gravitySensor = tizen.sensorservice.getDefaultSensor('GRAVITY');
}
	
gravitySensor.start(gravity_onsuccessCB);


}

function getGravityInfo(){

if (gravityCapability === true) {
	/* Device supports the gravity sensor */
	console.log("Device supports the gravity sensor");
	gravitySensor = tizen.sensorservice.getDefaultSensor('GRAVITY');
}
	
gravitySensor.getSensorHardwareInfo(gravity_onsuccessCB_hwInfo, onerrorCB);

}
	
function gravity_onsuccessCB()
{
  console.log("Gravity sensor started succesfully");
  
  gravitySensor.getGravitySensorData(gravity_onGetSuccessCB, gravity_onerrorCB);
  
}

function gravity_onsuccessCB_hwInfo(hwInfo) {
	
	console.log("Gravity Sensor Hardware Information");
    console.log('name: ' + hwInfo.name);
    console.log('type: ' + hwInfo.type);
    console.log('vendor: ' + hwInfo.vendor);
    console.log('minValue: ' + hwInfo.minValue);
    console.log('maxValue: ' + hwInfo.maxValue);
    console.log('resolution: ' + hwInfo.resolution);
    console.log('minInterval: ' + hwInfo.minInterval);
    console.log('maxBatchCount: ' + hwInfo.maxBatchCount);

}

function gravity_onGetSuccessCB(sensorData) {
	
	grx = (sensorData.x).toFixed(2);
	gry = (sensorData.y).toFixed(2);
	grz = (sensorData.z).toFixed(2);
    console.log("######## Get gravity sensor data ########");
    console.log("grx: " + sensorData.x);
    console.log("gry: " + sensorData.y);
    console.log("grz: " + sensorData.z);
  
    gravitySensor.setChangeListener(gravity_onchangedCB);
}

function gravity_onchangedCB(sensorData) {
	
	grx = sensorData.x.toFixed(2);
	gry = sensorData.y.toFixed(2);
	grz = sensorData.z.toFixed(2);
	
	gravityRateEl.innerHTML = '';
    gravityRateEl.innerHTML = "GRX:" + grx+"<br>"+"GRY:" + gry+"<br>"+"GRZ:" + grz;
    
	console.log("######## Get gravity sensor data ########");
	console.log("grx: " + sensorData.x);
	console.log("gry: " + sensorData.y);
	console.log("grz: " + sensorData.z);
    
}

function gravity_onerrorCB(error) {
    console.log("Error name:"+error.name + ", message: "+error.message);
}

function stopGravity(){
	gravitySensor.stop();
}

