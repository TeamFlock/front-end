'use strict';

/**
 * @ngdoc overview
 * @name flockApp
 * @description
 * # flockApp
 *
 * Main module of the application.
 */
angular
  .module('flockApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/personal', {
        templateUrl: 'views/personal.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/bank', {
        templateUrl: 'views/bank.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
