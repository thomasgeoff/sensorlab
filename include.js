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
include('js/sensorlab/lightSensor.js');
//uncomment the following line to activate pressure sensor 
include('js/sensorlab/pressureSensor.js');
//uncomment the following line to activate gyroscope sensor 
include('js/sensorlab/gyroscopeSensor.js');
//uncomment the following line to activate pressure sensor 
//include('js/sensorlab/gravitySensor.js');
//uncomment the following line to activate accelerometer sensor 
include('js/sensorlab/accelerometerSensor.js');
//uncomment the following line to activate HRM sensor 
//include('js/sensorlab/heartrateSensor.js');
//uncomment the following line to activate vibration 
include('js/sensorlab/vibrate.js');
//uncomment the following line to activate light sensor 
//include('js/sensorlab/proximitySensor.js');

