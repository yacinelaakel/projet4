multilingua.controller('CoursStep1Ctrl', function($scope, $stateParams, $firebaseObject) {

  	var ref = firebase.database().ref();
  	var subjects = $firebaseObject(ref.child('subject'));

	$scope.leCours;
	$scope.audio;
  	subjects.$loaded().then(function() {
    	angular.forEach(subjects, function(value, key) {
	        if (value.name == $stateParams.selectedLanguage) {
	        	var currentDay = new Date().getDate();
	          	var nbrCours = value.cours.length;
	          	//On soustrait au jour courant le nombre de leçons tant que ce jour est supérieur au nombre de leçons
	          	while(currentDay > nbrCours) {
	        		currentDay = currentDay - nbrCours;
	          	}
	          	//Choisit une leçon selon le jour actuel, on aura bien une leçon par jour, que l'on pourra relire à volonté
	          	$scope.leCours = value.cours[currentDay-1];
	        }
      	});
	  	var audio = "audio/";
	  	$scope.audio = audio.concat($scope.leCours.audio);
	  	console.log($scope.audio);
    });

});