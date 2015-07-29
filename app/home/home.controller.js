(function() {
  'use strict';
    angular
    .module('home')
    .controller('HomeController', function(HomeService, Account, $scope, $rootScope, $location, $routeParams, $auth) {
        $scope.map = {
          center: {
            latitude: 32.7833,
            longitude: -79.931051
          },
          zoom: 10,
          scrollwheel: false
        };

        HomeService.active().then(function(trucks) {
          console.log("I am getting trucks too");
          console.log(trucks.data);
          $scope.trucks = trucks.data
        })
        HomeService.inactive().then(function(trucks) {
          console.log("I am getting inactive trucks");
          console.log(trucks.data);
          $scope.inactiveTrucks = trucks.data
        })
    });
}());
