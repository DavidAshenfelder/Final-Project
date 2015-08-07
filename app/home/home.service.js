(function() {
  'use strict';
  angular
  .module('home')
  .factory('HomeService', function($http, $routeParams) {
  var getTrucks = function() {
    return $http.get('/api/trucks');
  };

  var getProfile = function() {
    return $http.get('/api/me');
  };

  var getActiveTrucks = function() {
    return $http.get('/api/activeTrucks');
  };

  var getInactiveTrucks = function() {
    return $http.get('/api/inactiveTrucks');
  };

  return {
    getTrucks: getTrucks,
    getProfile: getProfile,
    active: getActiveTrucks,
    inactive: getInactiveTrucks
  };
});

}());
