(function() {
    'use strict';
    
    angular
    .module('mapChart')
    .controller('MainController', function(API) {
       var vm = this;
      
       var showInfo = function(){
	       var showConcert = API.getCinci();

	       showConcert.then(function(results){
	       		// var games = results.data.__metadata.title;
	       		console.log(results);
	       		vm.concerts = results.data.events;
	       })
		}       
      	
		showInfo();

    });
})();