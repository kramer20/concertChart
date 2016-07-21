(function() {
    'use strict';
    angular
        .module('mapChart', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'MainController',
		        controllerAs: 'controller'
		      }
		  },
	    })
	});
})();


