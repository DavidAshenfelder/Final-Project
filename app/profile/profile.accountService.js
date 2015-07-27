angular.module('profile')
  .factory('Account', function($http) {
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

      addTruck: function (newTruck) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({location: user.location}, function (result) {
          newTruck.coords = {
            lat: result[0].geometry.location.lat(),
            lng: result[0].geometry.location.lng()
          };
          $http.put('api/me', newTruck).success(function (data) {
            $rootScope.$broadcast('truck:added');
          });
        });
      }
    };

  });
