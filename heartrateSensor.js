var heartRateEl;

var heart_Rate;

var peak_interval;

function getHeartrate(){
	tizen.humanactivitymonitor.start('HRM', hrm_onchangedCB);
}

function hrm_onchangedCB(hrmInfo) {
	heart_Rate = hrmInfo.hearRate;
	peak_interval = hrmInfo.rRInterval;
	console.log('Heart Rate: ' + hrmInfo.heartRate);
	console.log('Peak-to-peak interval: ' + hrmInfo.rRInterval + ' milliseconds');
    heartRateEl.innerHTML= '';
    heartRateEl.innerHTML=  hrmInfo.heartRate+"BPM";
}

function stopHeartrate(){
	tizen.humanactivitymonitor.stop('HRM');
}