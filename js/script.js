'use strict';

// Function that displays information and adds new line

var returnInformation = function(info){
  //var output = document.getElementById('output');
  output.innerHTML = output.innerHTML + info + '<br><br>';
};

// Function that takes Celsius temperature and give back some fun facts about weather

var funfact = function(temperatureC){
  if(temperatureC <= 0){
    returnInformation('Wear a coat, it is cold out there.');
  }
  else if (temperatureC > 0 && temperatureC <= 14)
    returnInformation('Spring is coming, look for lighter clothes.');
  else if (temperatureC > 14 && temperatureC <= 25)
    returnInformation('It is becoming hotter and hotter, wear a t-shirt');
  else if (temperatureC > 25)
    returnInformation('I am melting out here');
};

// Function Celsius to Fahrenheit

var celsiusToFahrenheit = function(temperatureC) {
  temperatureC = window.prompt('Type the temperature in Celsius');
	if(isNaN(temperatureC) || temperatureC == '' || temperatureC == null){
			returnInformation('Type a number');
	}
	else {
			var fahrenheitTemp = temperatureC * 1.8 + 32;
      returnInformation(temperatureC + '&deg' + ' C' + ' is ' + fahrenheitTemp + '&deg' + ' F');
      funfact(temperatureC);
  }
};

//Function Fahrenheit to Celsiuses

var fahrenheitToCelsius = function(temperatureF) {
    temperatureF = window.prompt('Type the temperature in Fahrenheits');
    	if(isNaN(temperatureF) || temperatureF == '' || temperatureF == null){
    			returnInformation('Type a number');
    	}
    	else {
    			var temperatureC = (temperatureF-32) / 1.8;
          returnInformation(temperatureF + '&deg' + ' F' + ' is ' + temperatureC + '&deg' + ' C');
          funfact(temperatureC);
      }
};

var buttonC = document.getElementById('Celsius-button');
buttonC.addEventListener('click', function(){
  celsiusToFahrenheit();
});

var buttonF = document.getElementById('Fahrenheit-button');
buttonF.addEventListener('click', function(){
	fahrenheitToCelsius();
});
