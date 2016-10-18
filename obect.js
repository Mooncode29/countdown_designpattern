"use strict"
console.log('hello.world');
console.log(this.document === document);

(function(){
	var app = {
		defaultTimer :5,
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
			
			var minutes = parseInt(this.timer/60, 10);
			var secondes = parseInt(this.timer % 60, 10);
			if(minutes < 10){
				minutes = '0'+ minutes; 
			}
			if(secondes < 10){
				secondes = '0' + secondes;
			}
			$('#minutes').html(minutes);
			$('#secondes').html(secondes);
		},

		reset : function(){
			this.timer = this.defaultTimer;
			this.updateView();
		},
	};
	app.init();

})();