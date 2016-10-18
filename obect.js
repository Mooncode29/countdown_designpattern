"use strict"
console.log('hello.world');
console.log(this.document === document);

(function(){
	var app = {
		defaultTimer : 3800,
		timer : null,
		intervalID : null,
		init : function(){
			this.timer = this.defaultTimer;
			this.listners();
		},
		listners : function(){
			$("#start").on('click', this.start.bind(this));
			$("#reset").on('click', this.reset.bind(this));
			$("#stop").on('click', this.stop.bind(this));

		},
		start : function(){
			clearInterval(this.intervalID);
			this.intervalID = setInterval(this.decrementation.bind(this), 1000);
		},

		decrementation : function(){
			this.updateView();
			this.timer--;
			if(this.timer <= 0){
				this.timer = 0;
			}
		},

		stop: function(){
			clearInterval(this.intervalID);

		},

		updateView : function(){
			var heures = parseInt(this.timer/3600, 10);
			var minutes = parseInt((this.timer % 3600)/60, 10);
			console.log(minutes);
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
			this.timer = this.defaultTimer;
			this.updateView();
		},
	};
	app.init();

})();