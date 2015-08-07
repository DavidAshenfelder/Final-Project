angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $rootScope, $auth) {
    $rootScope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
    $scope.isCollapsed = false;
  });
