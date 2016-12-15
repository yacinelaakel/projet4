multilingua.controller('CoursCtrl', function($scope, $firebaseAuth, $ionicPopup) {

    var auth = $firebaseAuth();
	var firebaseUser = auth.$getAuth();

	if (!firebaseUser) {
  		$scope.data = {};
   		var myPopup = $ionicPopup.show({
	    	template: '<input type="email" ng-model="data.email" placeholder="E-mail"><input type="text" ng-model="data.password" placeholder="Mot de passe"><label style="color:red" ng-if="data.erreur">Veuillez remplir tous les champs</label>',
	     	title: 'Veuillez vous authentifier',
	     	scope: $scope,
	     	buttons: [
	       		{
	         		text: '<b>Connexion</b>',
	         		type: 'button-balanced',
	         		onTap: function(e) {
		           		if (!$scope.data.email || !$scope.data.password) {
		             		$scope.data.erreur = true;
		             		e.preventDefault();
		           		} else {
		             		$scope.signUser($scope.data.email, $scope.data.password);
		           		}
	         		}
	       		},
	     	]
	   	});

	    $scope.signUser = function(email, password) {
	     	$scope.message = null;
	      	$scope.error = null;

	      	auth.$signInWithEmailAndPassword(email, password)
	        	.then(function(firebaseUser) {
	          		$scope.message = "Firebase user uid : " + firebaseUser.uid;
	        	}).catch(function(error) {
	          	$scope.error = error;
	        });
	    };
	}   
});