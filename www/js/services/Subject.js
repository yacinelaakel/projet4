multilingua.factory("Subject", ["$firebaseObject", function($firebaseObject) {
  var ref = firebase.database().ref();
  var ref2 = firebase.storage();

	return {
		//Récupère un cours selon la date
		get: function(selectedLanguage, cb) {
    	var subjects = $firebaseObject(ref.child('subject').child(selectedLanguage));
			subjects.$loaded().then(function() {
			  var currentDay = new Date().getDate();
    		var nbrCours = subjects.cours.length;
		    //On soustrait au jour courant le nombre de leçons tant que ce jour est supérieur au nombre de leçons
		    while (currentDay > nbrCours) {
		      currentDay = currentDay - nbrCours;
		    }
				cb(subjects.cours[currentDay - 1]);
			});
		},
		//leCours contient le nom du fichier audio à télécharger du cours que l'on a choisi
		getAudio: function(leCours, cb) {
			var pathReference = ref2.ref(leCours);
			pathReference.getDownloadURL().then(function(url) {
			  cb(url);
			}).catch(function(error) {
			});
		},

    getNamesSubject: function(cb) {
      var subjects = $firebaseObject(ref.child('subject'));
      var items = [];
      subjects.$loaded().then(function() {
        angular.forEach(subjects, function(value, key) {
          items.push(key);
        });
        cb(items);
      });
    }
	}
}
]);