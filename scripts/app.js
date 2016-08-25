var app = angular.module('faronBig', ['ui.router', 'ngAnimate']);

// Scroll to top
app.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
})
