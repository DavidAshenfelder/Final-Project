angular.module('auth')
  .controller('LoginCtrl', function($scope, $rootScope, $alert, $auth, $location) {
    $scope.login = function() {
      $auth.login({
          email: $scope.email,
          password: $scope.password,

        })
        .then(function(res) {
          $location.path('/home')
          $alert({
            content: 'You have successfully logged in',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .catch(function(response) {
          $alert({
            content: response.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };
    $rootScope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(res) {
          $location.path('/home')
          $alert({
            content: 'You have successfully logged in',
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        })
        .catch(function(response) {
          $alert({
            content: response.data ? response.data.message : response,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 3
          });
        });
    };
  });
