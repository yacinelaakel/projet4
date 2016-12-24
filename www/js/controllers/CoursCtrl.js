multilingua.controller('CoursCtrl', function($scope, Auth, Subject, $ionicPopup, $state) {

	Subject.getNamesSubject(function(items) {
		$scope.items = items;
	});

	var firebaseUser = Auth.$getAuth();
	if (!firebaseUser) {
  		$scope.data = {};
   		var myPopup = $ionicPopup.show({
	    	template: '<input type="email" ng-model="data.email" placeholder="E-mail"><br><input type="password" ng-model="data.password" placeholder="Mot de passe"><label style="color:red" ng-if="data.erreur">Veuillez remplir tous les champs conformément</label>',
	     	title: 'Veuillez vous authentifier',
	     	scope: $scope,
	     	buttons: [
	       		{
	         		text: '<b>Connexion</b>',
	         		type: 'button-balanced',
	         		onTap: function(e) {
	         			e.preventDefault();
		           		if (!$scope.data.email || !$scope.data.password) {
		             		$scope.data.erreur = true;
		           		} else {
		             		Auth.$signInWithEmailAndPassword($scope.data.email, $scope.data.password)
	        					.then(function(firebaseUser) {
	        						myPopup.close();
	        					})
	        					.catch(function(error) {
	        						$scope.data.erreur = true;
	        					});
		           		}
	         		}
	       		},
	     	]
	   	});
	}   
	$scope.colors = ["assertive", "positive", "energized", "balanced"];
});