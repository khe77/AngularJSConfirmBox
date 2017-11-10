'use strict';

/**
 * @ngdoc service
 * @name angularJsexamApp.sessionService
 * @description
 * # sessionService
 * Service in the angularJsexamApp.
 */
angular.module('angularJsconfirmBoxApp')
  .service('sessionService', 
  	[ 'Data','sessionInfo',  function (Data, sessionInfo) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.login = function(params, callback) {
    	var dataPromise = Data.setData(
    		//'http://172.16.1.248:52273/user/login',
    		'http://172.16.2.5:3000/login',
    		'&en='+params.en+"&pw="+params.pw);
    	dataPromise.then(function(result) {
            if (result.data.en == params.en) {
                result = JSON.stringify(result);
                result = JSON.parse(result);
                sessionInfo.reset();
                sessionInfo.setUserInfo(result);
                callback(result);
            } else {                
                window.alert('로그인 실패');
            }
    	}, function(reason) {}, function(update) {});
    }
  }]);