const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuidv4(),
    slug: 'musculation-les-principes-de-base',
    picture: 'api/src/assets/blog/kidShowingMuscle-large.jpg',
    title: 'Musculation, les principes de base.',
    description: 'Si vous êtes débutant en musculation, cet article pourrait vous être utile ! Il est parfois difficile de bien comprendre les mécanismes qui permettent de prendre de la masse musculaire surtout lorsque l’on débute ...',
    text1: 'Cet article a pour but de vous guider dans vos premiers pas à la salle de sport.\n Notre corps est une machine complexe, bien trop complexe pour que l’on en comprenne son fonctionnement dans les moindres détails. Nos connaissances en anatomie et en physiologie d’exercice (grâce à de nombreuses études comparatives) nous ont permis d’appréhender et de mieux cerner les mécanismes qui entrent en jeu et qui doivent être pris en compte lorsque l’on souhaite développer sa masse musculaire. Nous allons aborder des points clés qui vous permettront de bien débuter en salle de sport afin de maximiser vos résultats mais aussi d’éviter de vous blesser.\n Il est primordial pour l’intégrité physique du débutant de commencer progressivement. Les muscles, les tendons et les articulations n’ont pas l’habitude de travailler de façon à soulever des charges lourdes. Pris d’un excès de motivation, beaucoup commencent trop fort, trop vite sans avoir jamais pratiqué la musculation et finissent par se blesser.\nLa première phase est une période de conditionnement qui a pour but d’habituer votre corps et vos muscles à subir ce type de « stress » physique. Il faut également ajouter durant cette période tout un apprentissage moteur sur la posture et l’exécution des mouvements. C’est ce dernier qui est responsable de votre gain de force durant les premières semaines d’entraînement.\nIl est alors important d’acquérir les bons réflexes et de s’appliquer à avoir une exécution parfaite (cela vous aidera par la suite).\n\nAprès cette phase dite de « conditionnement » vient le renforcement musculaire.\nQue vous ayez un objectif de perte de poids, de prise de muscle, de remise en forme ou même de bien être, vous allez devoir solliciter vos muscles.\n\n',
    title2: 'L’endurance musculaire',
    text2: 'L’endurance musculaire peut être définie comme la capacité d’un individu à maintenir l’intensité d’efforts musculaires (résister à la fatigue) pendant une durée maximale.\nPour gagner en endurance musculaire, vous allez devoir travailler en séries longues. Le but est de trouver une charge ou une résistance qui vous permettra de réaliser au minimum 15 répétitions pour aller jusqu’à l’échec musculaire (le moment où vous ne pouvez plus réaliser correctement le mouvement). Privilégiez la qualité à la quantité, l’échec doit être atteint avec une exécution propre.\nAussi, le temps de récupération entre 2 séries devra être relativement court (entre 45 secondes et 1’30 maximum) pour provoquer un stress métabolique et vider les réserves d’énergie présentent dans le muscle (glycogène).',
    picture2: 'api/src/assets/blog/womanTrainingMachine-alora-griffiths-unsplash.jpg',
    title3: 'La prise de masse/volume',
    text3: 'C’est une des raisons pour lesquelles une grande majorité des gens s‘inscrivent en club de sport. Il existe de nombreux protocoles, en fonction du niveau du pratiquant, qui permettent de prendre de la masse musculaire.\nL’idée est de trouver une charge à soulever qui vous permettrait de faire 6 à 15 répétitions maximum, c’est à dire qu’au delà de la dernière répétition, soit votre technique se dégrade (vous vous aidez par des mouvements de corps) soit vous n’êtes plus capable de réaliser correctement le mouvement (avec une amplitude correcte).\n\nGrossièrement, gardez à l’esprit que plus vous vous rapprochez de 6 répétions (max) plus gros sera le stress mécanique et c’est celui-ci qui fera grossir vos fibres musculaires (version simplifiée). Inversement, plus vous vous rapprocherez des 15 répétitions (max) plus vous accentuerez le stress métabolique et l’adaptation du corps à ce type d’entraînement se fera sur tous les composants qui se situent autour des fibres musculaires (substrats énergétiques, mitochondries, réseaux capillaires...)\nC’est une version volontairement caricaturée mais elle vous permettra de comprendre le principe de base de l’hypertrophie.\n\nOn s’accordera entre 1’30 et 2’30 de récupération entre chaque série (plus vous serez proche des 6 répétitions, plus vous vous rapprocherez des 2’30 de récupération et inversement). Bien évidemment cela reste des valeurs générales, qu’il faudra adapter en fonction de vos sensations.',
    picture3: 'api/src/assets/blog/manBackTraction-edgar-chaparro-unsplash.jpg',
    title4: 'La force (max)',
    text4: 'Pour augmenter sa force maximale, il va falloir soulever lourd.\nUne bonne fourchette pour gagner en force (max), il reste à travailler avec des charges qui vous permettront de réaliser entre 1 et 3 répétitions (maximum). Le temps de récupération sera volontairement long (pouvant aller jusqu’à 7 min) afin que les facteurs neuromusculaires récupèrent.\nLes adaptations du corps à ce type d’entraînement sont principalement d’origine nerveuse. Il est fort possible que vous gagniez en force sans pour autant prendre de la masse musculaire (ou très peu). S’entraîner en force max peut s’avérer être intéressant dans certaines disciplines où le poids est un facteur clé (comme en boxe par exemple).\n\n\nSi vous êtes débutant et que vous souhaitez pratiquer la musculation, vous aurez compris qu’il faut commencer progressivement. Après avoir appris comment exécuter correctement les mouvements, viendra le renforcement musculaire à proprement parlé, et différentes options s’offrent à vous (endurance musculaire, hypertrophie, force max). Pensez à adapter les charges en fonction, mais surtout à apporter une surcharge progressive au fil des semaines/mois.\n\nQue vous soyez débutant ou non, j’espère que cet article vous sera utile. Pour plus d’informations n‘hésitez pas à me contacter directement (via l’onglet contact).',
    picture4: 'api/src/assets/blog/womanBackWeights-john-arano-unsplash.jpg',
    date: moment('18/08/2020', 'DD/MM/YYYY').toDate(),
    created_at: now,
    updated_at: now
  },
  {
    id: uuidv4(),
    slug: 'les-effets-du-desentrainement',
    picture: 'api/src/assets/blog/fatBellyMan-large-ehimetalor-akhere-unuabona-unsplash.jpg',
    title: 'Les effets du désentraînement...',
    description: `Les vacances arrivent et il est possible pendant cette période que vous diminuiez votre fréquence d’entraînement ou même que vous arrêtiez de vous entraîner.\nQue se passe-t-il dans ce cas la?`,
    text1: 'Au bout de combien de temps perd-on les bénéfices de l’entraînement cardio ou musculaire ?\nComment s’y prendre pour atténuer les effets du « désentraînement » ?\n\nForce et puissance musculaire : Il est établit que la perte de force et de puissance survient généralement après 3 à 4 semaines d’inactivité chez les sujets entraînés. La perte de force et de puissance est plus lente chez les personnes non ou peu entraînées.\n\nAu niveau physique/esthétique : Vous allez perdre progressivement en « volume » à partir de la 2ème ou 3ème semaine mais sachez qu’une alimentation équilibrée et bien répartie en macronutriments permet de limiter la fonte musculaire (pensez aussi à adapter votre apport calorique : si vous dépensez moins de calories, consommez-en moins !)\n\nEndurance musculaire : l’inactivité va causer une importante diminution des stocks de glycogène musculaire. Au bout de 5 semaines d’inactivité, le niveau de glycogène musculaire revient quasiment à un niveau initial d’avant entraînement (ou comparable a celui d’une personne sédentaire non entraînée). Cela aura pour effet de réduire vos performances. Mais ne vous inquiétez pas, ceci est tout à fait réversible et revient progressivement après la reprise de l’entraînement.\n\nAu niveau Cardiorespiratoire : On observe notamment après 3 semaines une diminution de la VO2Max, et du VES (volume d’éjection systolique) dans des proportions non négligeables chez des sujets entraînés. On observe ces mêmes effets chez les personnes qui pratiquent le footing régulièrement mais dans une moindre mesure. Pour limiter ces effets, il sera nécessaire de garder un minimum d’entraînement mais à une intensité élevée.\n\nPas de panique !\nSi vous n’êtes pas un compétiteur, 3 à 4 semaines d’inactivité n’auront pas une grosse incidence sur votre physique ou vos performances. Avec une reprise de l’activité progressive et maitrisée vous retrouverez vite votre niveau d’avant vacances (et votre physique).\n\nDonc profitez et passez de bonnes vacances !',
    date: moment('25.06.2020', 'DD/MM/YYYY').toDate(),
    created_at: now,
    updated_at: now
  },
  {
    id: uuidv4(),
    slug: 'le-hiit',
    picture: 'api/src/assets/blog/hiit-large-chase-kinney-unsplash.jpg',
    title: 'Le HIIT !!',
    description: 'Le HIIT ou High Intensity Interval Training est un type d’entraînement où l’on va chercher une intensité maximale entrecoupée de récupération passive ou active de courte durée.',
    text1: 'Les études ont notamment démontré son efficacité sur :\n\nl’évolution de la composition corporelle (perte de masse graisseuse et augmentation de la masse musculaire)\nl’amélioration de la condition physique (augmentation de la VO2Max ou de la capacité lactique et puissance aérobie)\nun meilleur système cardio-vasculaire.\n\nGénéralement il se décompose comme ceci : 2 temps d’action pour 1 temps de repos (entre 5 à 10 séries à répéter 2 fois avec une récupération complète de 3 à 5 minutes entre les 2) mais bien d’autres formes sont possibles (par exemple 1 temps d’action pour 1 temps de repos).\nIl convient d’adapter son HIIT en fonction de son objectif et/ou de sa discipline.\nL’entraînement doit être réalisé à intensité maximale sachant que lorsqu’on parle d’intensité, on fait principalement référence à la vitesse d’exécution (mais il est possible de faire du HIIT avec des exercices de musculation et avec des charges adaptées).\n\nIl est bon de rappeler que ce type d’entraînement provoque un stress important pour l’organisme et nécessite un repos conséquent avant de réitérer une même séance de HIIT.\n\nPrivilégiez un repos d’au moins 48h voire 72h. Il est bien évidemment possible de pratiquer d’autres types d’entraînement entre les séances de HIIT.',
    date: moment('15.07.2020', 'DD/MM/YYYY').toDate(),
    created_at: now,
    updated_at: now
  }
];
