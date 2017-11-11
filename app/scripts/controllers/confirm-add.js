'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsconfirmBoxApp')
  .controller('ConfirmAddCtrl', [
  "Data", "$scope", "$state",'sessionInfo','sessionService',
   function (Data, $scope, $state, sessionInfo, sessionService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.en = "";
    $scope.task_id = "";
    $scope.cfm_en = sessionInfo.getCurrentUser().data.en;
    $scope.cfm_title = "";
    $scope.cfm_text = "";
    $scope.saveConfirm = function() {
      var dataPromise = Data.setData(
        'http://172.16.2.5:3000/confirm',
        '&en='+$scope.en+'&task_id='+$scope.task_id+'&cfm_en='+$scope.cfm_en+'&cfm_title='+$scope.cfm_title+'&cfm_text='+$scope.cfm_text);
      dataPromise.then(function(restuls){
            $scope.en = "";
            $scope.task_id = "";
            $scope.cfm_title = "";
            $scope.cfm_text = "";
      },function(reason){},function(update){});
    };

  }]);