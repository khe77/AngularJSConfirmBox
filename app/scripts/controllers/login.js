'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsconfirmBoxApp')
  .controller('LoginCtrl', 
    ['$scope','$state','sessionInfo','sessionService', 
    function ($scope, $state, sessionInfo, sessionService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if (sessionInfo.isUserSignedIn()) {
      $state.go('confirm-list');
    } else {
      $state.go('login');
    }
    $scope.submitLogin = function() {
      sessionService.login($scope.login, function(res) {
        $state.go('confirm-list');
      });
    }
    $scope.isUserSignedIn = function() {
      return sessionInfo.isUserSignedIn();
    }
    $scope.getUserId = function() {
      if (sessionInfo.isUserSignedIn())
        return sessionInfo.getCurrentUser().data.name;
      else return '';
    }
    $scope.logout = function() {
      sessionInfo.reset();
      $state.go('login');
    }
  }]);