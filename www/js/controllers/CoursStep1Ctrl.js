multilingua.controller('CoursStep1Ctrl', function($scope, $stateParams, Subject) {

    $scope.selectedLanguage = $stateParams.selectedLanguage;
  	Subject.get($scope.selectedLanguage, function(cours) {
      	//Choisit une leçon selon le jour actuel, on aura bien une leçon par jour, que l'on pourra relire à volonté
      	$scope.leCours = cours;
      	//Récupère son fichier audio 
      	Subject.getAudio($scope.leCours.audio, function(url) {
      		$scope.audio = url;
      		$scope.afficher = true;
      		$scope.$apply();
      	});
  	});
});

