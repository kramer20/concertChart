(function () {
	'use strict';
	angular
		.module('mapChart')
		 .factory('API', function($http) {

		 	// function getConcert(){
		  //       var gettingInfo = $http({
		  //         method: 'GET',
		  //         url: 'http://api.jambase.com/events?zipCode=94054&api_key=p5wvt8qjumq3dr7wqwjaauuh',
		  //         });

		  //       return gettingInfo;
   	// 		}
		 
   	// 		return {
   	// 			getConcert:getConcert,
   	// 		}

   			function getCinci(){
		        var gettingCinci = $http({
		          method: 'GET',
		          url: 'http://api.jambase.com/events?zipCode=45209&page=0&api_key=p5wvt8qjumq3dr7wqwjaauuh',
		          });

		        return gettingCinci;
   			}
		 
   			return {
   				// getConcert:getConcert,
   				getCinci:getCinci,
   			}
		 });	
})();