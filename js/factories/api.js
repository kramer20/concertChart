(function () {
	'use strict';
	angular
		.module('mapChart')
		 .factory('API', function($http) {

		 	function getGames(){
		        var gettingGames = $http({
		          method: 'GET',
		          url: 'http://api.jambase.com/events?zipCode=94054&api_key=p5wvt8qjumq3dr7wqwjaauuh',
		          });

		        return gettingGames;
   			}
		 
   			return {
   				getGames:getGames,
   			}

		 });	
})();