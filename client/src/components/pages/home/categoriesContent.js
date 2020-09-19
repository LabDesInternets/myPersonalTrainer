import whoAmI1400 from '../../../assets/images/whoAmI_w_1400.jpg'
import servicesRaw from '../../../assets/images/servicesRaw.jpg'
import pricesRaw from '../../../assets/images/pricesRaw.jpg'

const categories = {
  about: {
    title: 'Qui suis-je ?',
    content1: `Passionné de sport depuis l'enfance, avec notamment la pratique du football et du tennis en compétition, j'ai toujours cherché à donner le meilleur de moi même dans chaque discipline. Après avoir été éducateur en club de football et en club de tennis, je me suis tourné vers la musculation et le fitness.`,
    content2: `Diplomé d'Etat depuis presque 1 an, j'accompagne mes clients avec la plus grande rigueur et le plus grand professionnalisme, qu'ils aient un objectif de perte de poids, de prise de muscle ou tout simplement de se remettre au sport. Passionné de tennis et de football depuis mon plus jeune âge, j'ai plus tard découvert le monde du fitness et de la musculation, et j'en ai fait mon métier.`,
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