multilingua.controller('CoursStep1Ctrl', function($scope, $stateParams, Lessons) {
  //Langue choisie
  $scope.selectedLanguage = $stateParams.selectedLanguage;

  //On récupère un cours selon le jours actuel et selon la matière choisie
  $scope.leCours = Lessons.get($stateParams.selectedLanguage);

  var audio = "audio/";
  $scope.audio = audio.concat($scope.leCours.audio);

});