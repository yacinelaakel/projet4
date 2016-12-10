angular.module('starter.services', [])

.factory('Lessons', function() {
  var lessons = [{
    subject: [
      {name: "anglais", cours: [
        {id: 1, titre: "Première leçon", contenu : "Les verbes régulier terminent en -ed au prétérit", audio: "audio1-gb.mp3", exercices: [
          {id: 1, question: "q1", reponse: "r1", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}, 
          {id: 2, question: "q2", reponse: "r2", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}, 
          {id: 3, question: "q3", reponse: "r3", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}]}, 
        {id: 2, titre: "Deuxième leçon", contenu : "Ceci est la deuxième leçon", audio: "audio2-gb.mp3", exercices: [
          {id: 1, question: "q1", reponse: "r1", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}, 
          {id: 2, question: "q2", reponse: "r2", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]} , 
          {id: 3, question: "q3", reponse: "r3", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}]},
        {id: 3, titre: "Troisième leçon", contenu : "Ceci est la troisième leçon", audio: "audio3-gb.mp3", exercices: [
          {id: 1, question: "q1", reponse: "r1", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}, 
          {id: 2, question: "q2", reponse: "r2", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}, 
          {id: 3, question: "q3", reponse: "r3", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}]},
        {id: 4, titre: "Quatrième leçon", contenu : "Ceci est la quatrième leçon", audio: "audio4-gb.mp3", exercices: [
          {id: 1, question: "q1", reponse: "r1", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}, 
          {id: 2, question: "q2", reponse: "r2", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}, 
          {id: 3, question: "q3", reponse: "r3", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}]},
        {id: 5, titre: "Cinquième leçon", contenu : "Ceci est la cinquième leçon", audio: "audio5-gb.mp3", exercices: [
          {id: 1, question: "q1", reponse: "r1", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}, 
          {id: 2, question: "q2", reponse: "r2", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}, 
          {id: 3, question: "q3", reponse: "r3", propositions: [
            {id: 1, proposition: "p1"}, 
            {id: 2, proposition: "p2"},
            {id: 3, proposition: "p3"}]}]}]},
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
