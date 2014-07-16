'use strict';

/**
 * @ngdoc function
 * @name v4App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the v4App
 */
angular.module('v4App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
