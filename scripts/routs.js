angular.module('faronBig')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/error');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '../views/home.html'
            })
            .state('story', {
                url: '/our-story',
                templateUrl: '../views/ourStory.html'
            });


    });
