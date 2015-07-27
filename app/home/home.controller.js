(function() {
  'use strict';
    angular
    .module('home')
    .controller('HomeController', function(HomeService, $scope, $rootScope, $location, $routeParams, $auth) {
        $scope.map = {center:{latitude: 32.7833, longitude: -79.931051}, zoom: 10};
    });
}());
