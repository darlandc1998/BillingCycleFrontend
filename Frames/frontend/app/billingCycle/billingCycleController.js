(function(){
  angular.module('primeiraApp').controller('BillingCycleCtrl',[
    '$http',
    'msgs',
    BillingCycleController
  ])

  function BillingCycleController($http, msgs){
    const vm = this;
    const url = 'http://localhost:3003/api/billingCycles';

    vm.refresh = function (){
      $http.get(url).then(function(response) {
        vm.billingCycle = {}
        vm.billingCycles = response.data;
      }).catch(function(){

      });
    }

    vm.create = function(){
      $http.post(url, vm.billingCycle).then(function(response){
        refresh();
        msgs.addSuccess('Operação realizada com sucesso!');
      }).catch(function(response){
        msgs.addError(response.data.errors);
      });
    }

    vm.refresh();
  }

})()
