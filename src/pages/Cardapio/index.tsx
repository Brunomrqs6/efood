import CardListPerfil from '../../components/CardapioList'
import Header from '../../components/Header'

import PizzaImage from '../../assets/images/pizza.png'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Cardapio, Food } from '../Home'

const CardapioList = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <>
      <Header headerBig={false} />
      <Banner />
      <CardListPerfil cardapioList={cardapio} />
      <Footer />
    </>
  )
}

export default CardapioList
