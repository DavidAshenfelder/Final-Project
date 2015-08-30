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
        $scope.homeLogo = function() {
          angular.element(document.querySelector('#header-logo')).toggleClass('red', 5000);
          angular.element(document.querySelector('#go-home')).toggleClass('none', 5000);
        };
        $scope.closeMenu = function() {
          console.log('im in the closeMenu function');
          angular.element(document.querySelector('#toggle')).removeClass('none');
        };

        $scope.toggleMenu = function() {
          angular.element(document.querySelector('#toggle')).toggleClass('none');

        };

        $scope.isAuthenticated = function() {
          console.log('hello');
          return $auth.isAuthenticated();
        };


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
