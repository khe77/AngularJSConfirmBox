'use strict';

/**
 * @ngdoc function
<<<<<<< HEAD
 * @name angularJsconfirmBoxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsconfirmBoxApp
 */
angular.module('angularJsconfirmBoxApp')
  .controller('MainCtrl', function () {
=======
 * @name angularJsexamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsconfirmBoxApp')
  .factory('Data',['$http','$q', 
    function($http, $q) {
      return {
        getData : function(url) {
          var defered = $q.defer();
          $http({
            method:'GET', url:url,
            headers:{
              'Content-Type':
              'application/text;charset=utf-8'
            }
          }).then(function(response){
            defered.resolve(response);
          }, function(response) {
            window.alert(JSON.stringify(response));
          });
          return defered.promise;
        },
        setData : function(url, data) {
          var defered = $q.defer();
          $http({
            method:'POST', url:url, data:data,
            headers:{
              'Content-Type':
              'application/x-www-form-urlencoded'
            }
          }).then(function(response){
            defered.resolve(response);
          }, function(response){
            defered.resolve(response);
          });
          return defered.promise;
        },
        modifyData : function(url, data) {
          var defered = $q.defer();
          $http({
            method:'PUT', url:url, data:data,
            headers:{
              'Content-Type':
              'application/x-www-form-urlencoded'
            }
          }).then(function(response){
            defered.resolve(response);
          }, function(response){
            defered.resolve(response);
          });
          return defered.promise;
        },
        deleteData : function(url, data) {
          var defered = $q.defer();
          $http({
            method:'DELETE', url:url, data:data,
            headers:{
              'Content-Type':
              'application/x-www-form-urlencoded'
            }
          }).then(function(response){
            defered.resolve(response);
          }, function(response){
            defered.resolve(response);
          });
          return defered.promise;
        }
      }
    }])
  .controller('MainCtrl', ["$scope", "$location",
   function ($scope, $location) {
>>>>>>> 34c90006ca458e8842b1212094355b2cb68e87e5
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
<<<<<<< HEAD
  });
=======

    $scope.$on('$viewContentLoaded', function() {
      var os = $location.search().os;
      if (os != undefined) {
        window.alert(os);
      }
    });
    
  }]);
>>>>>>> 34c90006ca458e8842b1212094355b2cb68e87e5
