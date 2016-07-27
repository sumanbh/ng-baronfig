var app = angular.module('faronBig');

app.controller('homeCtrl', function() {

})

app.directive('imgSlide', function() {
    return {
        link: function(scope, element, attr) {
          element.slider();
        }
    };
});
