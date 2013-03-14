angular.module('app').filter('amazing', function(){
  return function(input){
    if (input){
      return input
        .replace(/lame|boring|dull|pointless|slow/g, 'BLOODY AMAZING')
        .replace(/sucked/g, 'was BLOODY AMAZING');
    }
  }
});