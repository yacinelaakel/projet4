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
      {name: "espagnol", contenu : "cours d'espagnol", titre: "Première leçon"},
      {name: "allemand", contenu : "cours d'allemand", titre: "Première leçon"},
      {name: "portugais", contenu : "cours de portugais", titre: "Première leçon"}
    ]
  }];

  return {
    all: function() {
      return lessons;
    },
    get: function(subject) {
      for (var i = 0; i < lessons.length; i++) {
        if (lessons.subject[i].keys() == subject) {
          return lessons[i];
        }
      }
      return null;
    }
  };
});
