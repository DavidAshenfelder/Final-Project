angular.module('MyApp', [
  'ngMessages',
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'auth',
  'home',
  'profile',
  'posts',
  'truck',
  'ui.bootstrap',
  'uiGmapgoogle-maps',
])

.config(function($routeProvider) {
  $routeProvider
    .when('/404', {
      template: '<h1>Sorry, page not found</h1>'
    })
    .otherwise({
      redirectTo: '/404'
    });
});
