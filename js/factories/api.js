(function () {
	'use strict';
	angular
		.module('mapChart')
		 .factory('API', function($http) {


   			function getCity(zipCode){
		        var gettingCity = $http({
		          method: 'GET',
		          url: 'http://api.jambase.com/events?zipCode='+zipCode+'&radius=30&page=0&api_key=p5wvt8qjumq3dr7wqwjaauuh',
		          });

		        return gettingCity;
   			}
		 
   			return {
   				getCity,
   			}
		 });	
})();