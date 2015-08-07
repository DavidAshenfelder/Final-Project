angular.module('truck')
  .factory('TruckService', function($http, $rootScope) {

    return {

      getTrucks: function() {
        return $http.get('/api/trucks');
      },

      getTruck: function(id) {
        return $http.get('/api/trucks/' + id);
      },

      addReview: function (id, truckReviews) {
        return $http.put('/api/trucks/' + id, truckReviews);
      },

      addLike: function (id, truckLikes) {
        console.log('in service', truckLikes);
        return $http.put('/api/trucks/' + id, truckLikes);
      },

      deleteReviews: function (id) {
        return $http.delete('/api/trucks/' + id);
      },

      getActiveTrucks: function() {
        return $http.get('/api/activeTrucks');
      },

      getInactiveTrucks: function() {
        return $http.get('/api/inactiveTrucks');
      },


      addTruck: function (user) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: user.truckLocation.address}, function (result) {
          user.truckLocation.coords = {
            latitude: result[0].geometry.location.lat(),
            longitude: result[0].geometry.location.lng()
          };

          return $http.put('/api/me', user).then(function (data) {
            $rootScope.$broadcast('truckCoords:added');
          });
        });
      }
    };

  });
