multilingua.controller('ContactCtrl', function($scope, $firebaseObject) {

  	var ref = firebase.database().ref();
  	var responsables = $firebaseObject(ref.child('responsables'));

  	var items = [];

  	responsables.$loaded().then(function() {
    	angular.forEach(responsables, function(value, key) {
      		items.push({key, value});
    	});
    	return items;
  	});

  	$scope.items = items;

})