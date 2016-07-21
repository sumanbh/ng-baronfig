angular.module('faronBig')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html'
            })
            .state('story', {
                url: '/pages/our-story',
                templateUrl: '../views/ourStory.html'
            })
            .state('projects', {
                url: '/pages/projects',
                templateUrl: '../views/projects.html'
            })
            .state('shop', {
                url: '/pages/shop',
                templateUrl: '../views/shop.html'
            })
            .state('login', {
                url: '/account/login',
                templateUrl: '../views/login.html'
            });


    });
