'use strict';

// Function Celsius to Fahrenheit

var CelToFahrenheit = function() {
  var temperatureC = window.prompt('Type the temperature in Celsius');
	if(isNaN(temperatureC) || temperatureC == '' || temperatureC == null){
			Celsiusoutput.innerHTML = 'Type a number' + '<br><br>' + Celsiusoutput.innerHTML;
	}
	else {
			var FahrenheitTemp = temperatureC * 1.8 + 32;

			if(temperatureC <= 0){
				Celsiusoutput.innerHTML = temperatureC + '&deg' + ' C is: '+ FahrenheitTemp + '&deg' + ' F' + '<br>' + 'Wear a coat, it is cold out there.' + '<br><br>' + Celsiusoutput.innerHTML;
			}
			else if (temperatureC > 0 && temperatureC <= 14)
				Celsiusoutput.innerHTML = temperatureC + '&deg' + ' C is: '+ FahrenheitTemp + '&deg' + ' F' + '<br>' + 'Spring is coming, look for lighter clothes.' + '<br><br>' + Celsiusoutput.innerHTML;

			else if (temperatureC > 14 && temperatureC <= 25)
				Celsiusoutput.innerHTML = temperatureC + '&deg' + ' C is: '+ FahrenheitTemp + '&deg' + ' F' + '<br>' + 'It is becoming hotter and hotter, wera a t-shirt' + '<br><br>' + Celsiusoutput.innerHTML;
      else if (temperatureC > 25)
        Celsiusoutput.innerHTML = temperatureC + '&deg' + ' C is: '+ FahrenheitTemp + '&deg' + ' F' + '<br>' + '<br><br>' + Celsiusoutput.innerHTML;
  }
};

//Function Fahrenheit to Celsiuses

var FahrenheitToCelsius = function() {
  var temperatureF = window.prompt('Type the temperature in Fahrenheits');
    	if(isNaN(temperatureF) || temperatureF == '' || temperatureF == null){
    			Fahrenheitoutput.innerHTML = 'Type a number' + '<br><br>' + Fahrenheitoutput.innerHTML;
    	}
    	else {
    			var CelsiusTemp = (temperatureF-32) / 1.8;
    			if(CelsiusTemp <= 0){
    				Fahrenheitoutput.innerHTML = temperatureF + '&deg' + ' F is: '+ CelsiusTemp + '&deg' + ' C' + '<br>' + 'Wear a coat, it is cold out there.' + '<br><br>' + Fahrenheitoutput.innerHTML;
    			}
    			else if (CelsiusTemp > 0 && CelsiusTemp <= 14)
    				Fahrenheitoutput.innerHTML = temperatureF + '&deg' + ' F is: '+ CelsiusTemp + '&deg' + ' C' + '<br>' + 'Spring is coming, look for lighter clothes.' + '<br><br>' + Fahrenheitoutput.innerHTML;

    			else if (CelsiusTemp > 14 && CelsiusTemp <= 25)
    				Fahrenheitoutput.innerHTML = temperatureF + '&deg' + ' F is: '+ CelsiusTemp + '&deg' + ' C' + '<br>' + 'It is becoming hotter and hotter, wera a t-shirt' + '<br><br>' + Fahrenheitoutput.innerHTML;
          else if (CelsiusTemp > 25)
          Fahrenheitoutput.innerHTML = temperatureF + '&deg' + ' F is: '+ CelsiusTemp + '&deg' + ' C' + '<br>' + '<br><br>' + Fahrenheitoutput.innerHTML;
      }
};
var Celsiusoutput = document.getElementById('Celsius-output');

Celsiusoutput.innerHTML =  '<br><br>' + Celsiusoutput.innerHTML;

var buttonC = document.getElementById('Celsius-button');

buttonC.addEventListener('click', function(){
  CelToFahrenheit();
});

var Fahrenheitoutput = document.getElementById('Fahrenheit-output');

Fahrenheitoutput.innerHTML = '<br><br>' + Fahrenheitoutput.innerHTML;

var buttonF = document.getElementById('Fahrenheit-button');

buttonF.addEventListener('click', function(){
	FahrenheitToCelsius();
});
