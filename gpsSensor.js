var latitude;
var longitude;
var altitude;
var speed;

var gpsRateEl;


function getGps(){
	tizen.humanactivitymonitor.start("GPS", gps_onchangedCB, gps_onerrorCB);
}
function gps_onchangedCB(info)
{
  var gpsInfo = info.gpsInfo;
  for (var index = 0; index < gpsInfo.length; index++)
  {
    console.log("latitude: " + gpsInfo[index].latitude);
    console.log("longitude: " + gpsInfo[index].longitude);
    gpsRateEl.innerHTML= '';
    gpsRateEl.innerHTML= "la:" + gpsInfo[index].latitude.toFixed(1)+"<br>Lo:" + gpsInfo[index].longitude.toFixed(1)+
  							"<br>Alti:"+gpsInfo[index].altitude.toFixed(1)+"<br>Speed:"+gpsInfo[index].speed.toFixed(1);
  }
}

function gps_onerrorCB(error)
{
  console.log("Error occurred, name: " + error.name + ", message: " + error.message);
}