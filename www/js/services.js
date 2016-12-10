angular.module('starter.services', [])

.factory('Lessons', function() {
  var lessons = [{
    subject: [
      {name: "anglais", cours: [
        {id: 1, titre: "Première leçon", contenu : "Les verbes régulier terminent en -ed au prétérit", exercices: [
          {id: 1, question: "q1"}, 
          {id: 2, question: "q2"}, 
          {id: 3, question: "q3"}]}, 
        {id: 2, titre: "Deuxième leçon", contenu : "Ceci est la deuxième leçon", exercices: [
          {id: 1, question: "q1"}, 
          {id: 2, question: "q2"} , 
          {id: 3, question: "q3"}]},
        {id: 1, titre: "Troisième leçon", contenu : "Ceci est la troisième leçon", exercices: [
          {id: 1, question: "q1"}, 
          {id: 2, question: "q2"}, 
          {id: 3, question: "q3"}]}]},
      {name: "espagnol", cours: []},
      {name: "allemand", cours: []},
      {name: "portugais", cours: []}
    ]
  }];

  return {
    all: function() {
      return lessons;
    },
    get: function(selectedLanguage) {
      for (var i = 0; i < lessons[0].subject.length; i++) {
        if (lessons[0].subject[i].name == selectedLanguage) {
          //Object {name: "selectedLanguage", cours: Array[3]}
          return lessons[0].subject[i];
        }
      }
      return null;
    }
  };
});
