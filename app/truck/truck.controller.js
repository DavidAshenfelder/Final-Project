(function() {
  'use strict';
  angular
    .module('truck')
    .controller('TruckController', function(
      TruckService,
      $scope,
      $rootScope,
      $auth,
      $alert,
      $modal,
      $location,
      uiGmapGoogleMapApi) {

      $scope.map = {
        center: {
          latitude: 32.7833,
          longitude: -79.931051
        },
        zoom: 10,
        scrollwheel: false
      };

      TruckService.getTrucks().then(function(trucks) {
        $scope.trucks = trucks.data;
      });

      $scope.showMe = function() {
         $scope.show = true;
       };
       $scope.hideMe = function() {
         $scope.show = false;
       };

       $scope.getTruck = function(id) {
          console.log('I am in the truck controller function', id);
          TruckService.getTruck(id).then(function(truck) {
            console.log('truck in controller after get', truck);
            $scope.truckDetails = truck.data;
            console.log('$scope.truckDetails', $scope.truckDetails);
          });
          $location.path('/trucks/' + id);
        };

    });
}());
