angular.module('auth')
  .controller('SignupCtrl', function($scope, $alert, $auth) {

    $scope.showVendor = function() {
       $scope.foodVendor = true;
    };

    $scope.hideVendor = function() {
       $scope.foodVendor = false;
    };

    $scope.showClient = function() {
       $scope.hungryPerson = true;
    };

    $scope.hideClient = function() {
       $scope.hungryPerson = false;
    };

    $scope.signup = function() {
      $auth.signup({
        displayName: $scope.displayName,
        username: $scope.username,
        password: $scope.password,
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
