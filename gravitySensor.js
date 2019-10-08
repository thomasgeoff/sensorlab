var gx,gy,gz = 0;

var gyroscopeSensor;
	
var gyroRateEl;

var gyroscopeCapability = tizen.systeminfo.getCapability('http://tizen.org/feature/sensor.gravity');

function getGyroscope(){

if (gyroscopeCapability === true) {
	/* Device supports the gyroscope sensor */
	console.log("Device supports the gyroscope sensor");
	gyroscopeSensor = tizen.sensorservice.getDefaultSensor('GRAVITY');
}
	
gyroscopeSensor.start(gyroscope_onsuccessCB);


}

function getGyroscopeInfo(){

if (gyroscopeCapability === true) {
	/* Device supports the gyroscope sensor */
	console.log("Device supports the gyroscope sensor");
	gyroscopeSensor = tizen.sensorservice.getDefaultSensor('GRAVITY');
}
	
gyroscopeSensor.getSensorHardwareInfo(gyroscope_onsuccessCB_hwInfo, onerrorCB);

}
	
function gyroscope_onsuccessCB()
{
  console.log("Gyroscope sensor started succesfully");
  
  gyroscopeSensor.getGravitySensorData(gyroscope_onGetSuccessCB, gyroscope_onerrorCB);
  
}

function gyroscope_onsuccessCB_hwInfo(hwInfo) {
	
	console.log("Gyroscope Sensor Hardware Information");
    console.log('name: ' + hwInfo.name);
    console.log('type: ' + hwInfo.type);
    console.log('vendor: ' + hwInfo.vendor);
    console.log('minValue: ' + hwInfo.minValue);
    console.log('maxValue: ' + hwInfo.maxValue);
    console.log('resolution: ' + hwInfo.resolution);
    console.log('minInterval: ' + hwInfo.minInterval);
    console.log('maxBatchCount: ' + hwInfo.maxBatchCount);

}

function gyroscope_onGetSuccessCB(sensorData) {
	
	gx = (sensorData.x).toFixed(2);
	gy = (sensorData.y).toFixed(2);
	gz = (sensorData.z).toFixed(2);
    console.log("######## Get gyroscope sensor data ########");
    console.log("gx: " + sensorData.x);
    console.log("gy: " + sensorData.y);
    console.log("gz: " + sensorData.z);
  
    gyroscopeSensor.setChangeListener(gyroscope_onchangedCB);
}

function gyroscope_onchangedCB(sensorData) {
	
	gx = sensorData.x.toFixed(2);
	gy = sensorData.y.toFixed(2);
	gz = sensorData.z.toFixed(2);
	
	gyroRateEl.innerHTML = '';
    gyroRateEl.innerHTML = "GX:" + gx+"<br>"+"GY:" + gy+"<br>"+"GZ:" + gz;
    
	console.log("######## Get gyroscope sensor data ########");
	console.log("gx: " + sensorData.x);
	console.log("gy: " + sensorData.y);
	console.log("gz: " + sensorData.z);
    
}

function gyroscope_onerrorCB(error) {
    console.log("Error name:"+error.name + ", message: "+error.message);
}

function stopGyroscope(){
	gyroscopeSensor.stop();
}

