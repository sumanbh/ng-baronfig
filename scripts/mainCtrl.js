var app = angular.module('faronBig');

app.controller('mainCtrl', function($state, mainSrv){
  var vm = this;
  vm.product = mainSrv.dataArr;
  var getId = $state.params.id;
  function findProductById(product){
    return product.id == getId;
  }

  vm.result = vm.product.find(findProductById);

  vm.finalPrice = function(num){
    if (typeof num === 'string'){
      if (num === '5'){
        var regularPrice = vm.result.price * vm.totalCalc * 2;
        return (regularPrice - (regularPrice * num/100)).toFixed(2);
      }
      else {
        var regularPrice = vm.result.price * vm.totalCalc * 3;
        return (regularPrice - (regularPrice * num/100)).toFixed(2);
      }
    }
    return (num * vm.totalCalc).toFixed(2);
  }
})
