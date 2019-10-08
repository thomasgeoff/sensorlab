var ax,ay,az = 0;

var accelerometerSensor;

var accelerometerRateEl;
	
var accelerometerCapability = tizen.systeminfo.getCapability('http://tizen.org/feature/sensor.linear_acceleration');

function getAccelerometer(){

if (accelerometerCapability === true) {
	/* Device supports the accelerometer sensor */
	console.log("Device supports the accelerometer sensor");
	accelerometerSensor = tizen.sensorservice.getDefaultSensor('LINEAR_ACCELERATION');
}
	
accelerometerSensor.start(accelerometer_onsuccessCB);


}

function getAccelerometerInfo(){

if (accelerometerCapability === true) {
	/* Device supports the accelerometer sensor */
	console.log("Device supports the accelerometer sensor");
	accelerometerSensor = tizen.sensorservice.getDefaultSensor('LINEAR_ACCELERATION');
}
	
accelerometerSensor.getSensorHardwareInfo(accelerometer_onsuccessCB_hwInfo, accelerometer_onerrorCB);

}
	
function accelerometer_onsuccessCB()
{
  console.log("Accelerometer sensor started succesfully");
  
  accelerometerSensor.getLinearAccelerationSensorData(accelerometer_onGetSuccessCB, accelerometer_onerrorCB);
  
}

function accelerometer_onsuccessCB_hwInfo(hwInfo) {
	
	console.log("Accelerometer Sensor Hardware Information");
    console.log('name: ' + hwInfo.name);
    console.log('type: ' + hwInfo.type);
    console.log('vendor: ' + hwInfo.vendor);
    console.log('minValue: ' + hwInfo.minValue);
    console.log('maxValue: ' + hwInfo.maxValue);
    console.log('resolution: ' + hwInfo.resolution);
    console.log('minInterval: ' + hwInfo.minInterval);
    console.log('maxBatchCount: ' + hwInfo.maxBatchCount);

}

function accelerometer_onGetSuccessCB(sensorData) {
	
	ax = (sensorData.x).toFixed(2);
	ay = (sensorData.y).toFixed(2);
	az = (sensorData.z).toFixed(2);
    console.log("######## Get accelerometer sensor data ########");
    console.log("ax: " + sensorData.x);
    console.log("ay: " + sensorData.y);
    console.log("az: " + sensorData.z);
  
    accelerometerSensor.setChangeListener(accelerometer_onchangedCB);
}

function accelerometer_onchangedCB(sensorData) {
	
	ax = sensorData.x.toFixed(2);
	ay = sensorData.y.toFixed(2);
	az = sensorData.z.toFixed(2);
	
	accelerometerRateEl.innerHTML = '';
    accelerometerRateEl.innerHTML = "AX:" + ax+"<br>"+"AY:" + ay+"<br>"+"AZ:" + az;
    
	console.log("######## Get accelerometer sensor data ########");
	console.log("ax: " + sensorData.x);
	console.log("ay: " + sensorData.y);
	console.log("az: " + sensorData.z);
    
}

function accelerometer_onerrorCB(error) {
    console.log("Error name:"+error.name + ", message: "+error.message);
}

function stopAccelerometer(){
	accelerometerSensor.stop();
}

