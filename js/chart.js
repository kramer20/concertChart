// var Chart = require('src/chart.js');
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
                vm.concerts = results.events;

                
                var cityCinci = results.events(function(number){
                    return number.results.events;
                });
           })
        }       
        
        showInfo();

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Cincinnati", "Chicago", "Atlanta", "Nashville", "Los Angeles", "New York"],
        datasets: [{
            label: 'Number of Concerts',
            data: [cityCinci],
            backgroundColor: [
                'rgba(255, 80, 43, 0.2)',
                'rgba(255, 80, 43, 0.2)',
                'rgba(255, 80, 43, 0.2)',
                'rgba(255, 80, 43, 0.2)',
                'rgba(255, 80, 43, 0.2)',
                'rgba(255, 80, 43, 0.2)'
            ],
            borderColor: [
                'rgba(108,138,172,1)',
                'rgba(108,138,172,1)',
                'rgba(108,138,172,1)',
                'rgba(108,138,172,1)',
                'rgba(108,138,172,1)',
                'rgba(108,138,172,1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


    });
})();
