(function() {
  'use strict';
    angular
    .module('home')
    .controller('HomeController', function(
      HomeService,
      Account,
      $scope,
      $rootScope,
      $location,
      $routeParams,
      $auth,
      uiGmapGoogleMapApi) {

      $scope.markers = [];

      $scope.controllerName  = 'HomeController';


      $scope.map = {
        center: {
          latitude: 32.7833,
          longitude: -79.931051
        },
        zoom: 10,
        scrollwheel: false
      };
        HomeService.getTrucks().then(function(trucks) {
          $scope.trucks = trucks.data;
        });
        HomeService.active().then(function(trucks) {
          $scope.activeTrucks = trucks.data;
          var activeTrucks = trucks.data;
          activeTrucks.forEach(function(el) {
            var truck = el;
            var marker = {
              idKey: truck._id,
              coords: {
                latitude: truck.truckLocation.coords.latitude,
                longitude: truck.truckLocation.coords.longitude
              },
              options: {
                icon:'Images/truck-pin.png',
              },
              truckName: truck.truckName,
              truckImage: truck.truckImage,
              truckTime: truck.truckTime,
              truckId: truck._id,
              truckLocation: truck.truckLocation.address
            };
            $scope.markers.push(marker);
          });
        });

        $scope.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };

        HomeService.inactive().then(function(trucks) {
          $scope.inactiveTrucks = trucks.data;
        });
    });
}());
