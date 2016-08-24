var app = angular.module('faronBig');

app.controller('mainCtrl', function($state, mainSrv) {
    var vm = this;

    // Getting data to the controller
    var product = mainSrv.dataArr;

    // Getting the product ID
    var getId = $state.params.id;

    // Searching the product in the array
    function findProductById(product) {return product.id === getId;}
    vm.result = product.find(findProductById);

    //Remove the result from the product recommendation on the bottom
    vm.recommend = product
                    .filter(function(name){
                      return name.id !== getId;
                    });

    // Calculations depending the amount user wants to buy
    vm.finalPrice = function(num) {
        if (!vm.totalCalc) return parseFloat('0.00').toFixed(2);
        // "Normal" calculations
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
