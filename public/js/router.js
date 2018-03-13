'use strict';

angular
    .module('piSensors.router', [])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlStateProvider) {
        $urlStateProvider.otherwise('/login')
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .state('main', {
                url: '/main',
                templateUrl: 'views/main.html'
            })

        // .state('about', {
        //     url: '/about',
        //     templateUrl: 'views/about.html'
        // })
    }])