import CardList from '../../components/CardList'
import Header from '../../components/Header'
import Food from '../../models/Food'
import Sushi from '../../assets/images/Sushi.png'
import Macarrao from '../../assets/images/image 1.png'
import Footer from '../../components/Footer'

const foods: Food[] = [
  {
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. </br> Experimente o Japão sem sair do lar com nosso delivery!',
    id: 1,
    image: `${Sushi}`,
    infos: ['Destaque da semana', 'Japonesa'],
    note: '4.9'
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 2,
    image: `${Macarrao}`,
    infos: ['Italiana'],
    note: '4.6'
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 3,
    image: `${Macarrao}`,
    infos: ['Italiana'],
    note: '4.6'
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 4,
    image: `${Macarrao}`,
    infos: ['Italiana'],
    note: '4.6'
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 5,
    image: `${Macarrao}`,
    infos: ['Italiana'],
    note: '4.6'
  },
  {
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    id: 6,
    image: `${Macarrao}`,
    infos: ['Italiana'],
    note: '4.6'
  }
]

const Home = () => {
  return (
    <>
      <Header headerBig={true} />
      <CardList foods={foods} />
      <Footer />
    </>
  )
}

export default Home
