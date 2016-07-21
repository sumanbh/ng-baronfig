var app = angular.module('faronBig');

app.directive('imgSlide', function() {
    return {
        link: function(scope, element, attr){
          element.slider().css({
            'height': '45vw',
            'min-height': '300px'
          });
           element.find(".slides").css({
             'height': '45vw',
             'min-height': '300px'
           });
      }
    };
});
