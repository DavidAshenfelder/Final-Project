(function() {
  'use strict';
  angular
  .module('truck', ['ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
    .config(function($routeProvider, $authProvider) {
      $routeProvider
        .when('/trucks', {
          templateUrl: 'truck/views/list.html',
          controller: 'TruckController',
        });
        $routeProvider
          .when('/trucks/:_id', {
            templateUrl: 'truck/views/detail.html',
            controller: 'TruckController',
          });
    });
}());
