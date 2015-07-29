(function() {
  'use strict';
  angular
  .module('home')
  .factory('HomeService', function($http, $routeParams) {

  var getProfile = function() {
    return $http.get('/api/me');
  };

  var getActiveTrucks = function() {
    console.log("Hello, I am getting active Trucks");
    return $http.get('/api/activeTrucks');
  };

  var getInactiveTrucks = function() {
    console.log("Hello, I am getting active Trucks");
    return $http.get('/api/inactiveTrucks');
  };

  return {
    getProfile: getProfile,
    active: getActiveTrucks,
    inactive: getInactiveTrucks
  };
});

}());
