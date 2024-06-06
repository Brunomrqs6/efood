import CardList from '../../components/CardList'
import Header from '../../components/Header'
import Sushi from '../../assets/images/Sushi.png'
import Macarrao from '../../assets/images/image 1.png'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setFoods(res))
  }, [])

  return (
    <>
      <Header headerBig={true} />
      <CardList foods={foods} />
      <Footer />
    </>
  )
}

export default Home
