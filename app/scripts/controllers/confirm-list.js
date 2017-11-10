'use strict';

/**
 * @ngdoc function
 * @name angularJsconfirmBoxApp.controller:ConfirmListCtrl
 * @description
 * # ConfirmListCtrl
 * Controller of the angularJsconfirmBoxApp
 */
angular.module('angularJsconfirmBoxApp')
  .controller('ConfirmListCtrl', [
    "Data", "$scope", "$state",'sessionInfo','sessionService', 
    function (Data, $scope, $state, sessionInfo, sessionService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //페이지가 로딩되었을 때 호출
    $scope.$on('$viewContentLoaded', function() {
        $scope.requestConfirmList();
    });
    $scope.confirmList = [];
    $scope.requestConfirmList = function() {        
        var dataPromise = Data.getData(
            'http://172.16.2.5:3000/confirms','&en='+sessionInfo.getCurrentUser().data.en);
        dataPromise.then(function(results) {
            $scope.confirmList = results.data;
        },function(reason){},function(update){});
    }

    $scope.deleteUserInfo = function(id) {
        var dataPromise = Data.deleteData(
            'http://172.16.2.5:3000/user/'+id, '');
        dataPromise.then(function(results) {
            $scope.requestUserList();
        },function(reason){},function(update){});
    }

    $scope.modifyUserInfo = function(id, name, age) {
        var dataPromise = Data.modifyData(
            'http://172.16.2.5:3000/user/'+id, 
            '&name='+name+'&age='+age);
        dataPromise.then(function(results) {
            $scope.requestUserList();
        },function(reason){},function(update){});
    }

    $scope.requestUserInfo = function(id) {
        var dataPromise = Data.getData(
            'http://172.16.2.5:3000/user/'+id);
        dataPromise.then(function(results) {
            $scope.user_id = results.data.id;
            $scope.user_name = results.data.name;
            $scope.user_age = results.data.age;
        },function(reason){},function(update){});
    }

    $scope.userInfo = {};
    $scope.getUserInfo = function(id) {
        var dataPromise = Data.getData(
            'http://172.16.2.5:3000/user/'+id);
        dataPromise.then(function(results) {
            $scope.userInfo = results.data;
        },function(reason){},function(update){});
    }

    $scope.goUserDetail = function(id) {
        $state.go('user-detail', {id:id});
    }

  }]);