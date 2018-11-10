(function(){
  angular.module('primeiraApp').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http){
    const vm = this;
     vm.getSummary = function (){
      const url = 'http://localhost:3003/api/billingSummary';
      $http.get(url).then(function(response) {
        let saldo = response.data;
        vm.credit = saldo.credit;
        vm.debt =   saldo.debt;
        vm.total =  saldo.credit - saldo.debt;
      });
     }

     vm.getSummary();
  }
})()
