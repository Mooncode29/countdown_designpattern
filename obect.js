"use strict"
console.log('hello.world');
console.log(this.document === document);

(function(){
	var app = {
		defaultTimer : null,
		timer : null,
		intervalID : null,
		init : function(){
			// this.timer = this.defaultTimer;
			this.listners();
			this.userInput();
		},
		listners : function(){
			$("#start").on('click', this.start.bind(this));
			$("#reset").on('click', this.reset.bind(this));
			$("#stop").on('click', this.stop.bind(this));
			$("#save").on('click', this.userInput.bind(this));
			
		},
		start : function(){
			clearInterval(this.intervalID);
			this.intervalID = setInterval(this.decrementation.bind(this), 1000);
			
		},

		decrementation : function(){
			this.updateView();
			this.progression();
			this.timer--;
			if(this.timer < 0){
				this.stop();
			}
		},

		stop: function(){
			clearInterval(this.intervalID);

		},
		userInput : function(){
			var inputHeures = parseInt($("#inputHeures").val(), 10) || 0;
			var inputMinutes = parseInt($("#inputMinutes").val(), 10) || 0;
			var inputSecondes = parseInt($("#inputSecondes").val(), 10) || 10;
			this.timer = inputHeures*3600 + inputMinutes*60 + inputSecondes
			this.defaultTimer = this.timer;

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
			var heures = parseInt(this.timer/3600, 10);
			var minutes = parseInt((this.timer % 3600)/60, 10);
			var secondes = parseInt(this.timer % 60, 10);
			
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
			this.userInput();
			this.decrementation();
		},
		progression : function(){
			console.log(this.timer);
			var width = parseInt((this.timer*100)/this.defaultTimer, 10);
			console.log(width);
			$('#progress').css('width', width + '%');
			$('#progress').html(width + '%');
		},
	};
app.init();

})();