multilingua.controller('DatesCtrl', function($scope, $firebaseObject, $cordovaLocalNotification) {

  var ref = firebase.database().ref();
  $scope.dates = $firebaseObject(ref.child('dates'));

  var currentDate = new Date();

  var items = [];
  var id = 0;
  $scope.dates.$loaded().then(function() {
    angular.forEach($scope.dates, function(value, key) {
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
  });

  $scope.items = items;

});