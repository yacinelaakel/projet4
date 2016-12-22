multilingua.factory("Dates", ["$firebaseObject", function($firebaseObject, $cordovaLocalNotification) {
    var ref = firebase.database().ref();
    var dates = $firebaseObject(ref.child('dates'));

  	return {
  		//Récupère un cours selon la date
  		get: function(cb) {
        var currentDate = new Date();
        var items = [];
        var id = 0;
        dates.$loaded().then(function() {
          angular.forEach(dates, function(value, key) {
            console.log(value.date + " " + value.heure);
            //Format "YYYY-MM-DDTHour"
            var uneDate = new Date(value.date + "T" + value.heure);
            //On affiche que les dates futures
            if(uneDate > currentDate) {
              //Associe un push une heure avant chaque date future
              var alarmTime = uneDate;
              alarmTime.setHours(alarmTime.getHours() -1);
              $cordovaLocalNotification.schedule({
                id: id++,
                date: alarmTime,
                message: "Un cours a lieu dans une heure",
                title: "Multilingua"
              }).then(function() {});

              items.push({date: value.date, heure: value.heure});
            }
          });
          cb(items);
        });
  		}
  	}
  }
]);