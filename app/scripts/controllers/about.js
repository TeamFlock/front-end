'use strict';

/**
 * @ngdoc function
 * @name flockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flockApp
 */
angular.module('flockApp')
  .controller('AboutCtrl', function () {

	var ctx = document.getElementById("myChart");
	var data = {
	  labels: [
	      "Red",
	      "Green",
	      "Yellow"
	  ],
	  datasets: [
	      {
	          data: [300, 50, 100],
	          backgroundColor: [
	              "#FF6384",
	              "#36A2EB",
	              "#FFCE56"
	          ],
	          hoverBackgroundColor: [
	              "#FF6384",
	              "#36A2EB",
	              "#FFCE56"
	          ]
	      }]
	};
	var myDoughnutChart = new Chart(ctx, {
	type: 'doughnut',
	data: data
	});
	  
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
