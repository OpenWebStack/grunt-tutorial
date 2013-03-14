angular.module('app').controller('Feedback', function($scope, $http, $log){
  var keystrokes;

  $scope.workshop = {
    score : 10
  };

  $scope.save = function(workshop){
    $log.info('Thanks for the ' + workshop.score + '!');

    $http.post('http://openwebstack.aws.af.cm/feedback', workshop).success(function(res){
      console.log('res', res);
    });
  };
});