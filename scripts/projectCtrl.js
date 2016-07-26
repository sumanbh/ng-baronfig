var app = angular.module('faronBig');

app.controller('projectCtrl', function(){

})

app.directive('powerSlide', function() {
    return {
        link: function(scope, element, attr){
          element.slider();
      }
    };
});
