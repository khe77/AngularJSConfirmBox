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
      .state('login', {
        url:'/login',
        templateUrl:'views/login.html',
        controller:'LoginCtrl'
      })
      .state('confirm-list',{
        url:'/confirm/list',
        templateUrl:'views/confirm-list.html',
        controller:'ConfirmListCtrl'
      })
      .state('confirm-add',{
        url:'/confirm/add',
        templateUrl:'views/confirm-add.html',
        controller:'ConfirmAddCtrl'
      })
  });