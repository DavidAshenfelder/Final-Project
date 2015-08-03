(function() {
  'use strict';
    angular
    .module('home')
    .controller('HomeController', function(HomeService, Account, $scope, $rootScope, $location, $routeParams, $auth, uiGmapGoogleMapApi) {
      $scope.map = {
        center: {
          latitude: 32.7833,
          longitude: -79.931051
        },
        zoom: 10,
        scrollwheel: false
      };
        HomeService.getTrucks().then(function(trucks) {
          $scope.trucks = trucks.data
        });
        HomeService.active().then(function(trucks) {
          $scope.activeTrucks = trucks.data
        });
        HomeService.inactive().then(function(trucks) {
          $scope.inactiveTrucks = trucks.data
        });
    });
}());
