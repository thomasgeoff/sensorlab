var heartRateEl;

function getHeartrate(){
	tizen.humanactivitymonitor.start('HRM', hrm_onchangedCB);
}

function hrm_onchangedCB(hrmInfo) {
    console.log('Heart Rate: ' + hrmInfo.heartRate);
    console.log('Peak-to-peak interval: ' + hrmInfo.rRInterval + ' milliseconds');
   heartRateEl.innerHTML= '';
   heartRateEl.innerHTML=  hrmInfo.heartRate+"BPM";
}