'use strict';

/**
 * @ngdoc function
 * @name v4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the v4App
 */
angular.module('v4App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
