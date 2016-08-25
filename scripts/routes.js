angular.module('faronBig')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.when('/shop/', '/404');
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                controller: 'homeCtrl as vm'
            })
            .state('projects', {
                url: '/pages/projects',
                templateUrl: './views/projects.html'
            })
            .state('error', {
                url: '/404',
                templateUrl: './views/error404.html'
            })
            .state('shop', {
                url: '/shop/{id}',
                templateUrl: './views/shop.html',
                controller: 'mainCtrl as vm'
            });

    });
    
