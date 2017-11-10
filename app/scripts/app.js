'use strict';

/**
 * @ngdoc overview
 * @name angularJsexamApp
 * @description
 * # angularJsexamApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsconfirmBoxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $routeProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('main', {
        url:'/',
        templateUrl:'views/main.html',
        controller:'MainCtrl'
      })
      .state('login', {
        url:'/login',
        templateUrl:'views/login.html',
        controller:'LoginCtrl'
      })
      .state('confirm-list',{
        url:'/user/list',
<<<<<<< HEAD
        templateUrl:'views/confirm-list.html',
        controller:'ConfirmListCtrl'
=======
        templateUrl:'views/user-list.html',
        controller:'UserListCtrl'
>>>>>>> 34c90006ca458e8842b1212094355b2cb68e87e5
      })
  });