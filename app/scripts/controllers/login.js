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
<<<<<<< HEAD
  	['$scope','$state','sessionInfo','sessionService', 
  	function ($scope, $state, sessionInfo, sessionService) {
=======
    ['$scope','$state','sessionInfo','sessionService', 
    function ($scope, $state, sessionInfo, sessionService) {
>>>>>>> 34c90006ca458e8842b1212094355b2cb68e87e5
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if (sessionInfo.isUserSignedIn()) {
<<<<<<< HEAD
    	$state.go('main');
    } else {
    	$state.go('login');
    }
    $scope.submitLogin = function() {
    	sessionService.login($scope.login, function(res) {
    		$state.go('main');
    	});
    }
    $scope.isUserSignedIn = function() {
    	return sessionInfo.isUserSignedIn();
    }
    $scope.getUserId = function() {
    	if (sessionInfo.isUserSignedIn())
    		return sessionInfo.getCurrentUser().data.user_id;
    	else return '';
    }
    $scope.logout = function() {
    	sessionInfo.reset();
    	$state.go('login');
=======
      $state.go('main');
    } else {
      $state.go('login');
    }
    $scope.submitLogin = function() {
      sessionService.login($scope.login, function(res) {
        $state.go('main');
      });
    }
    $scope.isUserSignedIn = function() {
      return sessionInfo.isUserSignedIn();
    }
    $scope.getUserId = function() {
      if (sessionInfo.isUserSignedIn())
        return sessionInfo.getCurrentUser().data.user_id;
      else return '';
    }
    $scope.logout = function() {
      sessionInfo.reset();
      $state.go('login');
>>>>>>> 34c90006ca458e8842b1212094355b2cb68e87e5
    }
  }]);