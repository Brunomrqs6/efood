import CardListPerfil from '../../components/CardListPerfil'
import Header from '../../components/Header'
import FoodPerfil from '../../models/FoodPerfil'
import PizzaImage from '../../assets/images/pizza.png'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'

const foodPerfil: FoodPerfil[] = [
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: `${PizzaImage}`,
    id: 1
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: `${PizzaImage}`,
    id: 2
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: `${PizzaImage}`,
    id: 3
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: `${PizzaImage}`,
    id: 4
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: `${PizzaImage}`,
    id: 5
  },
  {
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: `${PizzaImage}`,
    id: 6
  }
]

const Perfil = () => {
  return (
    <>
      <Header headerBig={false} />
      <Banner />
      <CardListPerfil foodsPerfil={foodPerfil} />
      <Footer />
    </>
  )
}

export default Perfil
