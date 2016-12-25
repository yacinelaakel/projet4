multilingua.factory("Dates", ["$firebaseObject", function($firebaseObject) {
    var ref = firebase.database().ref();
    var dates = $firebaseObject(ref.child('dates'));

  	return {
  		//Récupère un cours selon la date
  		get: function(cb) {
        var currentDate = new Date();
        var items = [];
        dates.$loaded().then(function() {
          angular.forEach(dates, function(value, key) {
            //Format "YYYY-MM-DDTHour"
            var uneDate = new Date(value.date + "T" + value.heure);
            //On affiche que les dates futures
            if(uneDate > currentDate) {
              //Associe un push une heure avant chaque date future
              items.push({date: value.date, heure: value.heure});
            }
          });
          cb(items);
        });
  		}
  	}
  }
]);