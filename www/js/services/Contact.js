multilingua.factory("Contact", ["$firebaseObject", function($firebaseObject, $cordovaLocalNotification) {
    var ref = firebase.database().ref();
    var responsables = $firebaseObject(ref.child('responsables'));

  	return {
  		//Récupère un cours selon la date
  		get: function(cb) {
        var items = [];
        responsables.$loaded().then(function() {
          angular.forEach(responsables, function(value, key) {
              items.push({key, value});
          });
          cb(items);
        });
  		}
  	}
  }
]);