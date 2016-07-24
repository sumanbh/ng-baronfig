var app = angular.module('faronBig');

app.controller('homeCtrl', function(){
  
})

app.directive('imgSlide', function() {
    return {
        link: function(scope, element, attr){
          element.slider().css({
            'height': '42vw',
            'min-height': '300px'
          });
           element.find(".slides").css({
             'height': '42vw',
             'min-height': '300px'
           });
      }
    };
});
