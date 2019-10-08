var pressure=0;

var pressureSensor;

var pressureRateEl;
	
var pressureCapability = tizen.systeminfo.getCapability('http://tizen.org/feature/sensor.barometer');

function getPressure(){
	
var sensors = tizen.sensorservice.getAvailableSensors();
console.log('Available sensor: ' + sensors.toString());

if (pressureCapability === true) {
	/* Device supports the light sensor */
	console.log("Device supports the pressure sensor");
	pressureSensor = tizen.sensorservice.getDefaultSensor('PRESSURE');
}
	
pressureSensor.start(pressure_onsuccessCB);

}

function getPressureInfo(){

if (pressureCapability === true) {
	/* Device supports the light sensor */
	console.log("Device supports the pressure sensor");
	pressureSensor = tizen.sensorservice.getDefaultSensor('PRESSURE');
}
	
pressureSensor.getSensorHardwareInfo(pressure_onsuccessCB_hwInfo, pressure_onerrorCB);

}
function pressure_onsuccessCB()
{
  console.log("Pressure sensor started succesfully");
  
  pressureSensor.getPressureSensorData(pressure_onGetSuccessCB, pressure_onerrorCB);
  
}	
function pressure_onGetSuccessCB(sensorData)
{
  console.log("Pressure: " + sensorData.pressure);
  pressure = parseInt(sensorData.pressure);
  pressureSensor.setChangeListener(pressure_onchangedCB);
}

function pressure_onsuccessCB_hwInfo(hwInfo) {
	console.log("Pressure Sensor Hardware Information");
    console.log('name: ' + hwInfo.name);
    console.log('type: ' + hwInfo.type);
    console.log('vendor: ' + hwInfo.vendor);
    console.log('minValue: ' + hwInfo.minValue);
    console.log('maxValue: ' + hwInfo.maxValue);
    console.log('resolution: ' + hwInfo.resolution);
    console.log('minInterval: ' + hwInfo.minInterval);
    console.log('maxBatchCount: ' + hwInfo.maxBatchCount);
}

function pressure_onchangedCB(sensorData) {
	
	pressure = parseInt(sensorData.pressure);
    pressureRateEl.innerHTML = '';
    pressureRateEl.innerHTML = pressure+"pa";
    
}

function pressure_onerrorCB(error) {
    console.log("Error name:"+error.name + ", message: "+error.message);
}

function stopPressure(){
	pressureSensor.stop();
	pressureRateEl.innerHTML = '';
}
