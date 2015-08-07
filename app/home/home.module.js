angular.module('home', [])

.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home/views/home.html',
      controller: 'HomeController'
    });
});
