console.log('hello.world');
(function(){
	var app = {
		defaultTimer :5,
		timer : null,
		intervalID : null,
		init : function(){
			app.timer = app.defaultTimer;
			app.listners();
		},
		listners : function(){
			$("#start").on('click', app.start);
			$("#reset").on('click', app.reset);
			$("#stop").on('click', app.stop);

		},
		start : function(){
			clearInterval(app.intervalID);
			app.intervalID = setInterval(app.decrementation, 1000);
		},

		decrementation : function(){
			app.updateView();
			app.timer--;
			if(app.timer <= 0){
				app.timer = 0;
			}
		},

		stop: function(){
			clearInterval(app.intervalID);

		},

		updateView : function(){
			var minutes = parseInt(app.timer/60, 10);
			var secondes = parseInt(app.timer % 60, 10);
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
			app.timer = app.defaultTimer;
			app.updateView();
		},
	};
	app.init();

})();