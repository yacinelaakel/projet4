multilingua.controller('ContactCtrl', function($scope, $firebaseObject) {

  	var ref = firebase.database().ref();
  	$scope.responsables = $firebaseObject(ref.child('responsables'));

  	var items = [];

  	$scope.responsables.$loaded().then(function() {
    	angular.forEach($scope.responsables, function(value, key) {
      		items.push({key, value});
    	});
    	return items;
  	});

  	$scope.items = items;

})