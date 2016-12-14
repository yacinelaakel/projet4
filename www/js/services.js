angular.module('starter.services', [])

.factory('Lessons', function() {
  var lessons = [{
    subject: [
      {name: "anglais", cours: [
        {id: 1, titre: "Présent simple et continu", contenu : "Si vous parlez d’une action que vous faîtes régulièrement, utilisez le présent d’habitude, ou présent simple (exemple : I eat…). Si vous parlez d’une action que vous êtes en train de faire, utilisez le présent continu (exemple : I am eating…). La construction du présent simple est …très simple. La construction ne change jamais, sauf pour la troisième personne du singulier, où il faut mettre un « S » à la fin du verbe. Pour construire le présent continu, on a besoin de l’auxiliaire BE. Ensuite, on ajoute ING à la fin du verbe que l’on veut utiliser.", audio: "audio1-gb.mp3", exercices: [
          {id: 1, question: "J'utilise le présent simple...", reponse: "Pour parler d'une action régulière", propositions: [
            {id: 1, proposition: "Toujours"}, 
            {id: 2, proposition: "Jamais"},
            {id: 3, proposition: "Pour parler d'une action régulière"}]}, 
          {id: 2, question: "J'utilise le présent continu", reponse: "Pour parler d'une action en cours", propositions: [
            {id: 1, proposition: "Toujours"}, 
            {id: 2, proposition: "Pour parler d'une action régulière"},
            {id: 3, proposition: "Pour parler d'une action en cours"}]}, 
          {id: 3, question: "Le présent continu se termine en ing", reponse: "Vrai", propositions: [
            {id: 1, proposition: "Vrai"}, 
            {id: 2, proposition: "Faux"}]}]}, 
        {id: 2, titre: "Le prétérit", contenu : "Nous utilisons le prétérit pour parler d’une action dans un passé révolu, c’est à dire quand l’action est clairement définie dans le passé et qu’il n’y a pas de lien avec le présent. Pour les verbes réguliers, il suffit de prendre la base verbale, et de rajouter ED à la fin du verbe. Pour les verbes irréguliers, il faut les apprendre par coeur...", audio: "audio2-gb.mp3", exercices: [
          {id: 1, question: "J'utilise le prétérit...", reponse: "Pour parler d'une action révolue", propositions: [
            {id: 1, proposition: "Pour parler d'une action en cours"}, 
            {id: 2, proposition: "Pour parler d'une action révolue"},
            {id: 3, proposition: "Ce n'est pas obligatoire"}]}, 
          {id: 2, question: "Les verbes au prétérit finissent par...", reponse: "ed", propositions: [
            {id: 1, proposition: "ed"}, 
            {id: 2, proposition: "ing"},
            {id: 3, proposition: "Ils finissent comme au présent"}]} , 
          {id: 3, question: "Conjuguer au prétérit : 'I like apples'", reponse: "liked", propositions: [
            {id: 1, proposition: "liking"}, 
            {id: 2, proposition: "liked"},
            {id: 3, proposition: "had like"}]}]},
        {id: 3, titre: "Le present perfect", contenu : "Le present perfect est un temps du passé qui est souvent utilisé en anglais. On l’utilise principalement pour parler d’une action passée liée au présent,  comme un constat, ou une action dont on voit la continuité dans le présent. Il se construit à l’aide de l’auxiliaire HAVE et du participe passé. Il se construit avec l’auxiliaire HAVE + le participe passé. Exemple : I have drunk.", audio: "audio3-gb.mp3", exercices: [
          {id: 1, question: "J'utilise le present perfect...", reponse: "Pour parler d'un événement passé lié au présent", propositions: [
            {id: 1, proposition: "Toujours"}, 
            {id: 2, proposition: "Pour parler d'un événement futur"},
            {id: 3, proposition: "Pour parler d'un événement passé lié au présent"}]}, 
          {id: 2, question: "Conjuger au present perfect : 'I try to sleep'", reponse: "I have tried to sleep", propositions: [
            {id: 1, proposition: "I tried to sleep"}, 
            {id: 2, proposition: "I have tried to sleep"},
            {id: 3, proposition: "I had try to sleep"}]}, 
          {id: 3, question: "On peut remplacer le present perfect par le présent", reponse: "Faux", propositions: [
            {id: 1, proposition: "Vrai"}, 
            {id: 3, proposition: "Faux"}]}]},
        {id: 4, titre: "Some et Any", contenu : "Some et Any indiquent une certaine quantité ou une quantité indéfinie. Les deux veulent dire la même chose. On emploie Some à la forme affirmative, et Any à la forme interrogative ou négative.", audio: "audio4-gb.mp3", exercices: [
          {id: 1, question: "Compléter : 'I don't have ... water'", reponse: "Any", propositions: [
            {id: 1, proposition: "Any"}, 
            {id: 2, proposition: "Some"},
            {id: 3, proposition: "Few"}]}, 
          {id: 2, question: "J'utilise 'some' dans une phrase...", reponse: "Affirmative", propositions: [
            {id: 1, proposition: "Affirmative"}, 
            {id: 2, proposition: "Interrogative"},
            {id: 3, proposition: "Négative"}]}, 
          {id: 3, question: "J'utilise 'any' dans une phrase...", reponse: "Les deux", propositions: [
            {id: 1, proposition: "Négative"}, 
            {id: 2, proposition: "Interrogative"},
            {id: 3, proposition: "Les deux"}]}]},
        {id: 5, titre: "La voix passive", contenu : "En anglais comme en français, il y a deux voix, qui sont la voix active et la voix passive. Elles indiquent si le sujet fait l’action ou subit l’action. Voix active : I watch TV. Voix passive : The TV is watched. La voix passive en anglais se forme avec le verbe BE + participe passé.", audio: "audio5-gb.mp3", exercices: [
          {id: 1, question: "Transformer à la voix passive : 'I wash my clothes'", reponse: "My clothes are washed", propositions: [
            {id: 1, proposition: "I washed my clothes"}, 
            {id: 2, proposition: "My clothes are washed"},
            {id: 3, proposition: "My clothes are wash"}]}, 
          {id: 2, question: "J'utilise la voix passive...", reponse: "Pour indiquer que le sujet subit l'action", propositions: [
            {id: 1, proposition: "Pour indiquer que le sujet subit l'action"}, 
            {id: 2, proposition: "Pour indiquer que le sujet fait l'action"},
            {id: 3, proposition: "Jamais"}]}, 
          {id: 3, question: "L'utilisation de BE à la voix passive est...", reponse: "Obligatoire", propositions: [
            {id: 1, proposition: "Recommandée"}, 
            {id: 2, proposition: "Facultative"},
            {id: 3, proposition: "Obligatoire"}]}]}]},
      {name: "espagnol", cours: []},
      {name: "allemand", cours: []},
      {name: "portugais", cours: []}
    ]
  }];

  return {
    get: function(selectedLanguage) {
      for (var i = 0; i < lessons[0].subject.length; i++) {
        if (lessons[0].subject[i].name == selectedLanguage) {

          var currentDay = new Date().getDate();
          var nbrCours = lessons[0].subject[i].cours.length;
          //On soustrait au jour courant le nombre de leçons tant que ce jour est supérieur au nombre de leçons
          while(currentDay > nbrCours) {
            currentDay = currentDay - nbrCours;
          }
          //Choisit une leçon selon le jour actuel, on aura bien une leçon par jour, que l'on pourra relire à volonté
          return lessons[0].subject[i].cours[currentDay-1];
        }
      }
      return null;
    }
  };
});
