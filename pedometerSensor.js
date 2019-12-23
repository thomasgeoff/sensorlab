var pedometerRateEl;
var steps;
var step_status;
var pedometer_Capability = tizen.systeminfo.getCapability('http://tizen.org/feature/sensor.pedometer');

function getPedometer(){
	if (pedometer_Capability === true) {
		/* Device supports the pedometer sensor */
		console.log("Device supports the pedometer sensor");
		tizen.humanactivitymonitor.start('PEDOMETER', pedometer_onchangedCB);
}	
}
function pedometer_onsuccessCB(pedometerInfo)
{ 
  step_status = pedometerInfo.stepStatus;
  steps = pedometerInfo.cumulativeTotalStepCount;
  console.log("Step status: " + pedometerInfo.stepStatus);
  console.log("Cumulative total step count: " + pedometerInfo.cumulativeTotalStepCount);
  pedometerRateEl.innerHTML= '';
  pedometerRateEl.innerHTML= "Status: "+ pedometerInfo.stepStatus +"<br>"+"Steps:" + pedometerInfo.cumulativeTotalStepCount;
}

function pedometer_onerrorCB(error)
{
  console.log("Error occurs, name: " + error.name + ", message: " + error.message);
}

function pedometer_onchangedCB(pedometerInfo)
{
  console.log("From now on, you will be notified when the pedometer data changes");
  tizen.humanactivitymonitor.getHumanActivityData("PEDOMETER", pedometer_onsuccessCB, pedometer_onerrorCB);
  pedometerRateEl.innerHTML= '';
  pedometerRateEl.innerHTML= "Status: "+ pedometerInfo.stepStatus +"<br>"+"Steps:" + pedometerInfo.cumulativeTotalStepCount;
}

function stopPedometer(){
	tizen.humanactivitymonitor.stop('PEDOMETER');
}