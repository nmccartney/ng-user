'use strict';

angular
  .module('ngUserApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UserCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
