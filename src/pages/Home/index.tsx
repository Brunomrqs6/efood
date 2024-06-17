import CardList from '../../components/CardList'
import Header from '../../components/Header'
import Sushi from '../../assets/images/Sushi.png'
import Macarrao from '../../assets/images/image 1.png'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
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
  const { id } = useParams()
  const [restauntes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Header headerBig={true} />
      <CardList restaurantes={restauntes} />
      <Footer />
    </>
  )
}

export default Home
