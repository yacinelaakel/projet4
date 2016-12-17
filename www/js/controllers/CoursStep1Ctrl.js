multilingua.controller('CoursStep1Ctrl', function($scope, $stateParams, $firebaseObject) {

  	var ref = firebase.database().ref();
  	var subjects = $firebaseObject(ref.child('subject'));
  	$scope.selectedLanguage = $stateParams.selectedLanguage;

	$scope.leCours;
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
	    return $scope.leCours;
    }).then(function(leCours) {
    	var storage = firebase.storage();
		var pathReference = storage.ref(leCours.audio);
		pathReference.getDownloadURL().then(function(url) {
			//Crée la balise audio et la balise source
			var audio = document.createElement("audio");
			audio.controls = true;
			audio.id = "audioDivAudio";

			var source = document.createElement("source");
			//On utilise l'url du fichier audio
			source.setAttribute("src", url);
			source.setAttribute("type", "audio/mpeg");

        	document.getElementById("divAudio").appendChild(audio);
    		document.getElementById("audioDivAudio").appendChild(source);
		}).catch(function(error) {
		});
    });

});