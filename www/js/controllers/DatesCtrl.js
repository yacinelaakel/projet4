multilingua.controller('DatesCtrl', function($scope, $http, $cordovaLocalNotification) {


  //récupérer les dates depuis firebase
  var url = 'https://projet4-23e35.firebaseio.com/dates.json';
  var currentDate = new Date();
  // //Petit problème avec l'heure : elle a une heure de retard par rapport à moi
  currentDate.setHours(currentDate.getHours()+1);

  var items = [];
  var id = 0;
  $http.get(url).success(function(data) {
    angular.forEach(data, function(value, key) {
      //Format "YYYY-MM-DDTHour"
      var uneDate = new Date(value.date + "T" + value.heure);
      //On affiche que les dates futures
      if(uneDate > currentDate) {
        //Associe un push une heure avant chaque date future
        var alarmTime = uneDate;
        alarmTime.setHours(alarmTime.getHours() -2);
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