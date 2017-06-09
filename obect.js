
console.log('hello.world');
console.log(this.document === document);

(function(){
	"use strict";
	var app = {
		defaultTimerSeconds : null,
		timerSeconds : null,
		intervalID : null,
		inputH:null,
		inputMin:null,
		inputSec: null,
		init : function(){
			// this.timer = this.defaultTimer;
			this.listners();
			// this.userInput();
		},

		listners : function(){
			$("#start").on('click', this.start.bind(this));
			$("#reset").on('click', this.reset.bind(this));
			$("#stop").on('click', this.stop.bind(this));
			$("#save").on('click', this.getUserInput.bind(this));
		},

		start : function(){
			clearInterval(this.intervalID);
			this.intervalID = setInterval(this.decrementation.bind(this), 1000);
		},

		decrementation : function(){
			this.updateView();
			this.progression();
			this.timerSeconds--;
			if(this.timerSeconds < 0){
				this.stop();
				this.timerSeconds = 0;
			}
		},

		stop: function(){
			clearInterval(this.intervalID);
		},

		getUserInput : function(){
			
			if(isNaN(app.inputH)){
				app.inputH = parseInt($("#inputHeures").val(), 10);
			}else{
				app.inputH = parseInt($("#inputHeures").val(), 10);
			}
			console.log(app.inputH);

			if(isNaN(app.inputMin)){
				app.inputMin = parseInt($("#inputMinutes").val(), 10);
			}else{
				app.inputMin = parseInt($("#inputMinutes").val(), 10);
			}
			console.log(app.inputMin);
			
			if(isNaN(app.inputSec)){
				app.inputSec = parseInt($("#inputSecondes").val(), 10);
			}else{
				app.inputSec = parseInt($("#inputSecondes").val(), 10);
			console.log(app.inputSec);
			}
						
			this.timerSeconds = parseInt(app.inputH*3600 + app.inputMin*60 + app.inputSec, 10);
			this.defaultTimerSeconds = this.timerSeconds;

			console.log(this.timerSeconds);

			
				if(inputHeures < 10){
					inputHeures = '0' + inputHeures;
				}
				if(inputMinutes < 10){
					inputMinutes = '0' + inputMinutes;
				}
				else if(inputSecondes < 10){
					inputSecondes = '0' + inputSecondes;
				}
		},

		updateView : function(){
			
			var heures = parseInt(this.timerSeconds/3600, 10);
			console.log(heures);
			var minutes = parseInt((this.timerSeconds % 3600)/60, 10);
			console.log(minutes);
			var secondes = parseInt(this.timerSeconds % 60, 10);
			console.log(secondes);
			
			if(minutes < 10){
				minutes = '0'+ minutes; 
			}
			if(secondes < 10){
				secondes = '0' + secondes;
			}
			if(heures < 10){
				heures = '0' + heures;
			}
			$('#minutes').html(minutes + ':');
			$('#secondes').html(secondes);
			$('#heures').html(heures + ':');
		},
		
		reset : function(){
			this.getUserInput();
			this.decrementation();
		},

		progression : function(){
			var width = parseInt((this.timerSeconds*100)/this.defaultTimerSeconds, 10);
			// console.log(width);
			$('#progress').css('width', width + '%');
			$('#progress').html(width + '%');
		},
	};
app.init();

})();