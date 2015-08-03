// (function () {
//   'use strict';
//   angular
//     .module('truck')
//     .directive('truckList', function () {
//       return {
//         restrict: 'E', // E - element, A - attribute, C - class
//         templateUrl: 'directives/views/truckList.html',
//         replace: true,
//         scope: {
//           truck: '=',
//           extra: '@',
//           action: '&',
//           action2: '&'
//         },
//
//         link: function (scope, element, attributes) {
//           // element.find('header').find('a').on('mouseover', function () {
//           //   scope.url = 'http://www.placecage.com/c/400/600';
//           //   scope.$apply();
//           // });
//           //
//           // element.on('click', function (e) {
//           //   e.preventDefault();
//           //   console.log(attributes.calvin);
//           //   element.find('img').toggleClass('grow');
//           // });
//
//           element.css({
//               'background-image': 'url(' + element.truckImage +')',
//               'background-size' : 'cover'
//           });
//
//         }
//       };
//     });
// })();
