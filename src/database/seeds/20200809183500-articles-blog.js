const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuidv4(),
    title: `Marseille-Cassis, c'est pour bientôt !`,
    description: '20km et 15 000 coureurs sous le charme de la Provence, comment résister ...',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit itaque cupiditate quis officiis quo excepturi. Possimus repellat quasi molestias suscipit laborum inventore molestiae voluptas harum, dolor rerum error, asperiores dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero fugiat beatae quos vitae placeat, tempora ut blanditiis consequatur iure rerum repellendus laudantium corrupti fuga quae. Provident reprehenderit quae vero necessitatibus?',
    picture: 'api/src/assets/blog/marseilleCassis.jpg',
    date: '02.04.2020',
    created_at: now,
    updated_at: now
  },
  {
    id: uuidv4(),
    title: 'Visite de la capitale',
    description: `Les 80km de l'Ecotrail de Paris s'annoncent sportifs et inoubliables ! Récupérez votre dossard avant le 15 mars.`,
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit itaque cupiditate quis officiis quo excepturi. Possimus repellat quasi molestias suscipit laborum inventore molestiae voluptas harum, dolor rerum error, asperiores dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero fugiat beatae quos vitae placeat, tempora ut blanditiis consequatur iure rerum repellendus laudantium corrupti fuga quae. Provident reprehenderit quae vero necessitatibus?',
    picture: 'api/src/assets/blog/ecotrailParis.jpg',
    date: '28.08.2019',
    created_at: now,
    updated_at: now
  },
  {
    id: uuidv4(),
    title: 'Course 100% girls !',
    description: 'Départ place du Capitole à Toulouse. Une course de 10km uniquement dédiée aux filles. ça vous tente ?',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit itaque cupiditate quis officiis quo excepturi. Possimus repellat quasi molestias suscipit laborum inventore molestiae voluptas harum, dolor rerum error, asperiores dolores? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero fugiat beatae quos vitae placeat, tempora ut blanditiis consequatur iure rerum repellendus laudantium corrupti fuga quae. Provident reprehenderit quae vero necessitatibus?',
    picture: 'api/src/assets/blog/laToulousaine.jpg',
    date: '12.09.2019',
    created_at: now,
    updated_at: now
  }
];
