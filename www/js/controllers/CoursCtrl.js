multilingua.controller('CoursCtrl', function($scope, Auth, $ionicPopup, $state) {

	var firebaseUser = Auth.$getAuth();

	$scope.signOut = function() {
		firebaseUser = Auth.$signOut();
	}
	if (!firebaseUser) {
  		$scope.data = {};
   		var myPopup = $ionicPopup.show({
	    	template: '<input type="email" ng-model="data.email" placeholder="E-mail"><br><input type="text" ng-model="data.password" placeholder="Mot de passe"><label style="color:red" ng-if="data.erreur">Veuillez remplir tous les champs conformément</label>',
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
		             		Auth.$signInWithEmailAndPassword($scope.data.email, $scope.data.password)
	        					.then(function(firebaseUser) {})
	        					.catch(function(error) {
	        						console.log(error.code);
	        						$state.go('tab.cours', {}, {reload: true});
	        					});
		           		}
	         		}
	       		},
	     	]
	   	});
	}   
});