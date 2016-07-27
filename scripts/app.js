var app = angular.module('faronBig', ['ui.router', 'ngAnimate']);

// Make sure the browser scrolls to the top
app.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
})
