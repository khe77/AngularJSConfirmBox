'use strict';

/**
 * @ngdoc function
<<<<<<< HEAD
 * @name angularJsconfirmBoxApp.controller:ConfirmListCtrl
 * @description
 * # ConfirmListCtrl
 * Controller of the angularJsconfirmBoxApp
 */
angular.module('angularJsconfirmBoxApp')
  .controller('UserListCtrl', [
  	"Data", "$scope", "$state", 
  	function (Data, $scope, $state) {
=======
 * @name angularJsexamApp.controller:UserListCtrl
 * @description
 * # UserListCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsconfirmBoxApp')
  .controller('UserListCtrl', [
    "Data", "$scope", "$state", 
    function (Data, $scope, $state) {
>>>>>>> 34c90006ca458e8842b1212094355b2cb68e87e5
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //페이지가 로딩되었을 때 호출
    $scope.$on('$viewContentLoaded', function() {
<<<<<<< HEAD
    	$scope.requestUserList();
    });
    $scope.userList = [];
    $scope.requestUserList = function() {
    	var dataPromise = Data.getData(
    		'http://172.16.2.5:52273/user');
    	dataPromise.then(function(results) {
    		$scope.userList = results.data;
    	},function(reason){},function(update){});
    }

    $scope.deleteUserInfo = function(id) {
    	var dataPromise = Data.deleteData(
    		'http://172.16.2.5:52273/user/'+id, '');
    	dataPromise.then(function(results) {
    		$scope.requestUserList();
    	},function(reason){},function(update){});
    }

    $scope.modifyUserInfo = function(id, name, age) {
    	var dataPromise = Data.modifyData(
    		'http://172.16.2.5:52273/user/'+id, 
    		'&name='+name+'&age='+age);
    	dataPromise.then(function(results) {
    		$scope.requestUserList();
    	},function(reason){},function(update){});
    }

    $scope.requestUserInfo = function(id) {
    	var dataPromise = Data.getData(
    		'http://172.16.2.5:52273/user/'+id);
    	dataPromise.then(function(results) {
    		$scope.user_id = results.data.id;
    		$scope.user_name = results.data.name;
    		$scope.user_age = results.data.age;
    	},function(reason){},function(update){});
=======
        $scope.requestUserList();
    });
    $scope.userList = [];
    $scope.requestUserList = function() {
        var dataPromise = Data.getData(
            'http://172.16.2.5:52273/user');
        dataPromise.then(function(results) {
            $scope.userList = results.data;
        },function(reason){},function(update){});
    }

    $scope.deleteUserInfo = function(id) {
        var dataPromise = Data.deleteData(
            'http://172.16.2.5:52273/user/'+id, '');
        dataPromise.then(function(results) {
            $scope.requestUserList();
        },function(reason){},function(update){});
    }

    $scope.modifyUserInfo = function(id, name, age) {
        var dataPromise = Data.modifyData(
            'http://172.16.2.5:52273/user/'+id, 
            '&name='+name+'&age='+age);
        dataPromise.then(function(results) {
            $scope.requestUserList();
        },function(reason){},function(update){});
    }

    $scope.requestUserInfo = function(id) {
        var dataPromise = Data.getData(
            'http://172.16.2.5:52273/user/'+id);
        dataPromise.then(function(results) {
            $scope.user_id = results.data.id;
            $scope.user_name = results.data.name;
            $scope.user_age = results.data.age;
        },function(reason){},function(update){});
>>>>>>> 34c90006ca458e8842b1212094355b2cb68e87e5
    }

    $scope.userInfo = {};
    $scope.getUserInfo = function(id) {
<<<<<<< HEAD
    	var dataPromise = Data.getData(
    		'http://172.16.2.5:52273/user/'+id);
    	dataPromise.then(function(results) {
    		$scope.userInfo = results.data;
    	},function(reason){},function(update){});
    }

    $scope.goUserDetail = function(id) {
        $state.go('user-detail', {id:id});
    }

  }]);
=======
        var dataPromise = Data.getData(
            'http://172.16.2.5:52273/user/'+id);
        dataPromise.then(function(results) {
            $scope.userInfo = results.data;
        },function(reason){},function(update){});
    }

  }]);
>>>>>>> 34c90006ca458e8842b1212094355b2cb68e87e5
