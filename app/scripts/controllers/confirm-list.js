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
            'http://172.16.2.5:3000/confirms/'+sessionInfo.getCurrentUser().data.en, '');
        dataPromise.then(function(results) {
            $scope.confirmList = results.data;
        },function(reason){},function(update){});
    }

    $scope.deleteConfirm = function(en, task_id, cfm_seq, cfm_yn) {
        if(cfm_yn != null){
            window.alert('결재가 되어 삭제하실 수 없습니다.');
            return;
        }
        var dataPromise = Data.deleteData(
            'http://172.16.2.5:3000/confirm', '&en='+en+'&task_id='+task_id+'&cfm_seq='+cfm_seq);
        dataPromise.then(function(results) {
            $scope.requestConfirmList();
        },function(reason){},function(update){});
    }

    $scope.confirmDetail = {};
    $scope.getConfirm = function(en, task_id, cfm_seq) {
        var dataPromise = Data.getData(
            'http://172.16.2.5:3000/confirm/'+en+'?task_id='+task_id+'&cfm_seq='+cfm_seq);
        dataPromise.then(function(results) {
            $scope.confirmDetail = results.data;
        },function(reason){},function(update){});
    }

  }]);