//this function includes all necessary js files for the application
function include(file)
{

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

/* include any js files here */
//uncomment the following line to activate light sensor 
include('js/sensorlab-master/lightSensor.js');
//uncomment the following line to activate pressure sensor 
include('js/sensorlab-master/pressureSensor.js');
//uncomment the following line to activate gyroscope sensor 
include('js/sensorlab-master/gyroscopeSensor.js');
//uncomment the following line to activate pressure sensor 
include('js/sensorlab-master/gravitySensor.js');
//uncomment the following line to activate accelerometer sensor 
include('js/sensorlab-master/accelerometerSensor.js');
//uncomment the following line to activate HRM sensor 
include('js/sensorlab-master/heartrateSensor.js');
//uncomment the following line to activate vibration 
include('js/sensorlab-master/vibrate.js');
//uncomment the following line to activate pedometer sensor 
include('js/sensorlab-master/pedometerSensor.js');
//uncomment the following line to activate Gps sensor 
include('js/sensorlab-master/gpsSensor.js');
//uncomment the following line to activate back button 
include('js/sensorlab-master/backButton.js');
//uncomment the following line to activate back button 
include('js/sensorlab-master/requestToWebapp.js');