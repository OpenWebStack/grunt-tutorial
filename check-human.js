angular.module('app').directive('checkhuman', function(){
  return {
    restrict: 'E',
    templateUrl: 'check-human.html',
    scope: {
      valid: "=valid"
    },
    link: function postLink(scope) {
      scope.valid = false;
      scope.rand1 = Math.floor(Math.random() * 5) + 1;
      scope.rand2 = Math.floor(Math.random() * 5) + 1;
      var correct = scope.rand1 + scope.rand2;
            
      scope.check = function(){
        scope.valid = parseInt(scope.answer, 10) === correct;
      }
    }
  };
});