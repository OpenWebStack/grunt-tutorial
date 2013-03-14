angular.module('app').filter('amazing', function(){
  return function(input){
    if (input){
      return input
        .replace(/lame|boring|dull|pointless|slow/g, 'AMAZING')
        .replace(/sucked/g, 'was AMAZING');
    }
  }
});