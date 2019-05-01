(function(){
  angular.module('primeiraApp').component('field', {
    bindings: {
      id: '@',
      label: '@',
      grid: '@',
      placeholder: '@',
      type:'@',
    },
    controller: [
      'gridSystem',
      function(gridSystem){
        this.gridClasses = gridSystem.toCssClasses(this.grid);
      }
    ],
    template:`
    <div class="{{$ctrl.gridClasses}}">
      <div class="form-group">
        <label for="{{$ctrl.id}}">{{$ctrl.label}}</label>
        <input id="{{$ctrl.id}}" type="{{$ctrl.type}}" class="form-control" placeholder="{{$ctrl.placeholder}}"/>
      </div>
    </div>
    `
  })
})()
