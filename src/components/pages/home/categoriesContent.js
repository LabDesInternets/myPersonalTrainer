import whoAmI1400 from '../../../assets/images/whoAmI_w_1400.jpg'
import servicesRaw from '../../../assets/images/servicesRaw.jpg'
import pricesRaw from '../../../assets/images/pricesRaw.jpg'

const categories = {
  about: {
    title: 'Qui suis-je ?',
    content1: `Je m'appelle Raphael, j'ai 29 ans et je suis diplomé d'un BPJEPS Activités de la forme.`,
    content2: `Passionné de tennis et de football depuis mon plus jeune âge, j'ai plus tard découvert le monde du fitness et de la musculation, et j'en ai fait mon métier.`,
    linkTo: `./about`,
    img: whoAmI1400,
    bgPos: 'top'
  },
  services: {
    title: 'Prestations',
    content1: `De la perte de poids à la prise de masse, en passant par la réathlétisation, je vous propose un programme d'entraînement personnalisé qui s'adapte à vos objectifs, vos besoins, sans oubliez vos contraintes.`,
    linkTo: `./services`,
    img: servicesRaw,
    switchDisplay: true
  },
  prices: {
    title: 'Tarifs et formules',
    content1: `De la séance unique à un objectif sur le long terme, je vous propose différentes formules pour vous satisfaire`,
    linkTo: `./prices`,
    img: pricesRaw
  }
}

export default categories