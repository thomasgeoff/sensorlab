var pedometerRateEl;
var steps;
var step_status;

function getPedometer(){
	tizen.humanactivitymonitor.start('PEDOMETER', pedometer_onchangedCB);
}

function pedometer_onsuccessCB(pedometerInfo)
{ 
  step_status = pedometerInfo.stepStatus;
  steps = pedometerInfo.cumulativeTotalStepCount
  console.log("Step status: " + pedometerInfo.stepStatus);
  console.log("Cumulative total step count: " + pedometerInfo.cumulativeTotalStepCount);
  pedometerRateEl.innerHTML= '';
  pedometerRateEl.innerHTML= "Status: "+ pedometerInfo.stepStatus +"<br>"+"Steps:" + pedometerInfo.cumulativeTotalStepCount;
}

function pedometer_onerrorCB(error)
{
  console.log("Error occurs, name: " + error.name + ", message: " + error.message);
}

function pedometer_onchangedCB(pedometerdata)
{
  console.log("From now on, you will be notified when the pedometer data changes");
  tizen.humanactivitymonitor.getHumanActivityData("PEDOMETER", onsuccessCB, onerrorCB);
  pedometerRateEl.innerHTML= '';
  pedometerRateEl.innerHTML= "Status: "+ pedometerInfo.stepStatus +"<br>"+"Steps:" + pedometerInfo.cumulativeTotalStepCount;
}

function stopPedometer(){
	tizen.humanactivitymonitor.stop('PEDOMETER');
}