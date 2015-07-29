(function() {
  'use strict';
  angular
    .module('truck')
    .controller('TruckController', function(TruckService, $scope, $rootScope, $auth, $alert, $modal) {
      TruckService.getTrucks().then(function(trucks) {
        console.log("trucks in truck controller:", trucks);
        $scope.trucks = trucks.data
      });
    });
}());
