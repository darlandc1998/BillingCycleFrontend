(function(){
  angular.module('primeiraApp').controller('BillingCycleCtrl',[
    '$http',
    'msgs',
    'tabs',
    BillingCycleController
  ])

  function BillingCycleController($http, msgs, tabs){
    const vm = this;
    const url = 'http://localhost:3003/api/billingCycles';

    vm.refresh = function (){
      $http.get(url).then(function(response) {
        vm.billingCycle = {}
        vm.billingCycles = response.data;
        tabs.show(vm, {tabList:true, tabCreate:true});
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

    vm.showTabUpdate = function(billingCycle){
      vm.billingCycle = billingCycle;
      tabs.show(vm, {tabUpdate: true});
    }

    vm.update = function(){
      const updateUrl = `${url}/${vm.billingCycle._id}`;
      $http.put(updateUrl, vm.billingCycle).then((response) => {
        vm.refresh();
        msgs.addSuccess('Operação realizada com sucesso!');
      }).catch((response) => {
        msgs.addError('Erro ao atualizar :(');
      });
    }

    vm.showTabDelete = function(billingCycle){
      vm.billingCycle = billingCycle;
      tabs.show(vm, {tabDelete: true});
    }

    vm.delete = function(){
      const deleteUrl = `${url}/${vm.billingCycle._id}`;
      $http.delete(deleteUrl, vm.billingCycle).then((response) => {
        vm.refresh();
        msgs.addSuccess('Operação realizada com sucesso!');
      }).catch((response) => {
        msgs.addError('Erro ao deletar!');
      });


    }

    vm.refresh();
  }

})()
