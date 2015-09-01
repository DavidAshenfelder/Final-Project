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
      $routeParams,
      uiGmapGoogleMapApi) {

        $scope.markers = [];
        $scope.detailMarkers = [];

        TruckService.getTrucks().then(function(trucks) {
          $scope.trucks = trucks.data;
        });

        TruckService.getTruck($routeParams.truckId).then(function(truck) {
          $rootScope.truckDetails = truck.data;
          var truckDetails = truck.data;
            var marker = {
              idKey: truckDetails._id,
              coords: {
                latitude: truckDetails.truckLocation.coords.latitude,
                longitude: truckDetails.truckLocation.coords.longitude
              },
              options: {
                icon:'Images/truck-pin.png',
              },
              truckName: truckDetails.truckName,
              truckImage: truckDetails.truckImage,
              truckTime: truckDetails.truckTime,
              truckId: truckDetails._id,
              truckLocation: truckDetails.truckLocation.address
            };
            $scope.detailMarkers.push(marker);
          });

        TruckService.getActiveTrucks().then(function(trucks) {
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
            };
            $scope.markers.push(marker);
          });
        });

        $scope.map = {
          center: {
            latitude: 32.7833,
            longitude: -79.931051
          },
          zoom: 10,
          scrollwheel: false
        };

        $scope.isAuthenticated = function() {
          return $auth.isAuthenticated();
        };

        $scope.showMe = function() {
           $scope.show = true;
        };

        $scope.hideMe = function() {
           $scope.show = false;
        };

        $scope.getTruck = function(id) {
          $location.path('/trucks/' + id);
        };

        $scope.addReview = function(id, reviewForm) {
          TruckService.addReview(id, reviewForm);
          $scope.hideMe();
          $scope.$broadcast('review:posted');
        };

        $scope.deleteReviews = function(id) {
          TruckService.deleteReviews(id);
        };

        $scope.addLike = function(id, truckDetails) {
          if ($auth.isAuthenticated()) {

            var likeUp = (function() {
             if (truckDetails.truckLikes) {
               return (truckDetails.truckLikes + 1);
             } else {
               return truckDetails.truckLikes = 1;
             }
           }());
           TruckService.addLike(id, {truckLikes: likeUp});
           $scope.$broadcast('likeUp:cast');
         }
        };

        var watchCallback = function() {
          TruckService.getTruck($routeParams.truckId).then(function(truck) {
            $scope.truckDetails = truck.data;
            var truckDetails = truck.data;
              var marker = {
                idKey: truckDetails._id,
                coords: {
                  latitude: truckDetails.truckLocation.coords.latitude,
                  longitude: truckDetails.truckLocation.coords.longitude
                },
                options: {
                  icon:'Images/truck-pin.png',
                }
              };
              $scope.detailMarkers.push(marker);
            });
      };
      $scope.$on('likeUp:cast', watchCallback);
      $scope.$on('review:posted', watchCallback);
    });
}());
