angular.module('auth')
  .controller('SignupCtrl', function($scope, $alert, $auth) {
    $scope.signup = function() {
      $auth.signup({
        displayName: $scope.displayName,
        username: $scope.username,
        email: $scope.email,
        phone: $scope.phone,
        truck: false,

      }).catch(function(response) {
        if (typeof response.data.message === 'object') {
          angular.forEach(response.data.message, function(message) {
            $alert({
              content: message[0],
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          });
        } else {
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        }
      });
    };

    $scope.truckSignup = function() {
      $auth.signup({
        displayName: $scope.displayName,
        username: $scope.username,
        email: $scope.email,
        phone: $scope.phone,
        truck: true,
        active: false,
        truckName: $scope.truckName,
        truckWebsite: $scope.truckWebsite,
        password: $scope.password

      }).catch(function(response) {
        if (typeof response.data.message === 'object') {
          angular.forEach(response.data.message, function(message) {
            $alert({
              content: message[0],
              animation: 'fadeZoomFadeDown',
              type: 'material',
              duration: 3
            });
          });
        } else {
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        }
      });
    };
  });
