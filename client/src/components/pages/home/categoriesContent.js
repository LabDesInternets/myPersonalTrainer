import whoAmI1400 from '../../../assets/images/whoAmI_w_1400.jpg'
import servicesRaw from '../../../assets/images/servicesRaw.jpg'
import pricesRaw from '../../../assets/images/pricesRaw.jpg'

const categories = {
  about: {
    title: 'Qui suis-je ?',
    content1: `C'est avec passion et détermination que j'évolue dans le domaine sportif depuis mon plus jeune âge. Ma devise ? Toujours donner le meilleur de moi-même dans chaque discipline. J'ai donc pratiqué le football et le tennis en compétition, domaines dans lesquels j'ai également été éducateur en club. C'est dorénavant vers la musculation et le fitness que je me tourne.`,
    content2: `Diplomé d'Etat depuis presque 1 an, j'accompagne mes clients avec la plus grande rigueur et le plus grand professionnalisme, qu'ils aient un objectif de perte de poids, de prise de muscle ou tout simplement de se remettre au sport.`,
    content3: `Ma soif d'apprendre et de vous donner le meilleur me poussent à constamment développer mes compétences et me tenir au courant des dernières avancées dans le sport et la musculation en particulier.`,
    content4: `Mes différentes expériences aussi bien au niveau de l'encadrement de personnes que de la pratique du sport me permettent de vous proposer un plan d'entraînement et un suivi personnalisé adapté à vos besoins, à vos attentes mais aussi à vos contraintes et emploi du temps.`,
    linkTo: `./about`,
    img: whoAmI1400,
    bgPos: 'top'
  },
  services: {
    title: 'Prestations',
    content1: `De la perte de poids à la prise de masse, en passant par la réathlétisation, je vous propose un programme d'entraînement personnalisé qui s'adapte à vos objectifs, vos besoins, sans oublier vos contraintes.`,
    linkTo: `./services`,
    img: servicesRaw,
    switchDisplay: true
  },
  prices: {
    title: 'Tarifs et formules',
    content1: `Différentes formules adaptées à vos objectifs, séance unique, en groupe ou forfait...`,
    linkTo: `./prices`,
    img: pricesRaw
  }
}

export default categories