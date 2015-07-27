(function() {
  'use strict';
  angular
  .module('home')
  .factory('HomeService', function($http, $routeParams) {
    var baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    var key = 'AIzaSyBMhmW4nOpyavqUsqfZY1CbZ3QPGiQQoSQ';

  var buildUrl = function() {
    return $http.post();
  };

  var getProfile = function() {
    return $http.get('/api/me');
  };

  return {
    buildUrl: buildUrl,
  };
});

}());
