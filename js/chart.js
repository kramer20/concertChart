// var Chart = require('src/chart.js');
(function() {
    'use strict';
    
    angular
    .module('mapChart')
    .controller('MainController', function(API) {
       var vm = this;
      
        var cityArray = [];

        var nameArray = [];

           var showConcert = API.getCity('45209');

               showConcert.then(function(results){
                    // console.log(results);
                    var data = results.data;
      
                    var city = data.Events.length;

                    cityArray.push(city);

                    nameArray.push('Cincinnati');
 

             var showConcert = API.getCity('10001');

               showConcert.then(function(results){
                    // console.log(results);
                    var data = results.data;
      
                    var city = data.Events.length;

                    cityArray.push(city);

                    nameArray.push('New York');   

            var showConcert = API.getCity('60290');

               showConcert.then(function(results){
                    console.log(results);
                    var data = results.data;
      
                    var city = data.Events.length;

                    cityArray.push(city);

                    nameArray.push('Chicago');    

            var showConcert = API.getCity('30301');

               showConcert.then(function(results){
                    // console.log(results);
                    var data = results.data;
      
                    var city = data.Events.length;

                    cityArray.push(city);

                    nameArray.push('Atlanta');   

            var showConcert = API.getCity('37115');

               showConcert.then(function(results){
                    // console.log(results);
                    var data = results.data;
      
                    var city = data.Events.length;

                    cityArray.push(city);

                    nameArray.push('Nashville');  

            var showConcert = API.getCity('90001');

               showConcert.then(function(results){
                    console.log(results);
                    var data = results.data;
      
                    var city = data.Events.length;

                    cityArray.push(city);

                    nameArray.push('Los Angeles');                                 

                    createGraph(cityArray,nameArray);
                });
                });
                });
                });
                });
                });
      

           var createGraph = function(data,name){

                var ctx = document.getElementById("myChart");
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: name,
                        datasets: [{
                            label: 'Number of Concerts',
                            data: data,
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
                });
                
           }
        
    });
})();
