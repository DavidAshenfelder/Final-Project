(function() {
  'use strict';
  angular
  .module('MyApp')
  .controller('NavbarCtrl', function($scope, $rootScope, $auth) {
    console.log($scope);
    $scope.toggleMenu = function() {
      console.log('im in the menu function');
      // getElementsByClassName('div.well').toggleClass('none');
    };

    $scope.isAuthenticated = function() {
      console.log('hello');
      return $auth.isAuthenticated();
    };

    $scope.isCollapsed = false;
  });
}());
