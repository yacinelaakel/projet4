multilingua.controller('DatesCtrl', function($scope, $stateParams, Dates, $cordovaLocalNotification) {

  //Toutes les dates des cours à venir
  Dates.get(function(items) {
    $scope.items = items;
    var id = 0;
    angular.forEach($scope.items, function(value, key) {
        //Format "YYYY-MM-DDTHour"
        var uneDate = new Date(value.date + "T" + value.heure);
        var alarmTime = uneDate;
      	alarmTime.setHours(alarmTime.getHours() - 1);
      	$cordovaLocalNotification.schedule({
        	id: id++,
        	date: alarmTime,
        	message: "Un cours a lieu dans une heure",
        	title: "Multilingua"
      	}).then(function() {});
    });
  });

});

