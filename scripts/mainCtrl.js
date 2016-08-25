var app = angular.module('faronBig');

app.controller('mainCtrl', function($state, mainSrv) {
    var vm = this;

    // Getting data from service
    var product = mainSrv.dataArr;

    // product ID
    var getId = $state.params.id;

    // Search product in the array
    function findProductById(product) {return product.id === getId;}
    vm.result = product.find(findProductById);

    // Remove active selected from product recommendation
    vm.recommend = product
                    .filter(function(name){
                      return name.id !== getId;
                    });

    // Calculation
    vm.finalPrice = function(num) {
        if (!vm.totalCalc) return parseFloat('0.00').toFixed(2);
        return (num * vm.totalCalc).toFixed(2);
    }
})

app.directive('productOptions', function(){
  return {
    templateUrl: './views/shop-tmpl.html',
    link: function(scope, element, attr){

    }
  }
})
