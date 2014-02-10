angular.module('inspiration', ['angular-kudos', 'firebase'])
    .value('fbURL', 'https://angular-kudos.firebaseio.com/')
    
    .factory('Quotes', function($firebase, fbURL) {
       return $firebase(new Firebase(fbURL));
    })
  
    .controller('MainCtrl', ['$scope','Quotes','$firebase', 'fbURL', 
     function($scope, Quotes, $firebase, fbUrl){
      
       $scope.quotes = Quotes;


       $scope.addCount = function(id){

          var keys = $scope.quotes.$getIndex();
          keys.forEach(function(key, i) {
          if($scope.quotes[key].id == id){
            var ref = $firebase(new Firebase(fbUrl + i + "/kudos")); 
            var oldCount = $scope.quotes[key].kudos;
            ref.$set(oldCount + 1);
          }; 
          });
                
        }
    }])

