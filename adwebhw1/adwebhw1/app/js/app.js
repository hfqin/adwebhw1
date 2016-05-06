'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute','headerModule','footerModule','mainModule','listModule','formModule','networkModule'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/app/main',{
                templateUrl:"template/main.tpl.html",
                controller:"MainCtrl"
            })
            .when('/app/list',{
                templateUrl:"template/list.tpl.html",
                controller:"ListCtrl"
            })
            .when('/app/form',{
                templateUrl:"template/form.tpl.html",
                controller:"FormCtrl"
            })
            .when('/app/network',{
                templateUrl:"template/network.tpl.html",
                controller:"NetworkCtrl"
            })

            .otherwise({redirectTo: '/app/main'});
    }]);
