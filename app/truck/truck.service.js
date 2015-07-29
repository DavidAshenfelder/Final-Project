angular.module('truck')
  .factory('TruckService', function($http, $rootScope) {

    return {

      getTrucks: function() {
        return $http.get('/api/trucks')
      },


      addTruck: function (user) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: user.truckLocation.address}, function (result) {
          user.truckLocation.coords = {
            latitude: result[0].geometry.location.lat(),
            longitude: result[0].geometry.location.lng()
          };
          console.log('USERS INSIDE', user);

          return $http.put('/api/me', user).then(function (data) {
            console.log('hello, user data', data);
            $rootScope.$broadcast('truckCoords:added');
          });
        });
      }
    };

  });
