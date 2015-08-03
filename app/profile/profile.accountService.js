angular.module('profile')
  .factory('Account', function($http, $rootScope) {

    return {
      getProfile: function() {
        return $http.get('/api/me');
      },
      updateProfile: function(profileData) {
        return $http.put('/api/me', profileData);
      },

      deleteProfile: function(profileData) {
        return $http.delete('/api/me');
      },

      activateTruck: function(active) {
        return $http.put('api/me', active);
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
