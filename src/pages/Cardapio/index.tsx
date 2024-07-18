import CardListPerfil from '../../components/CardapioList'
import Header from '../../components/Header'

import PizzaImage from '../../assets/images/pizza.png'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useGetCardapioQuery } from '../../services/api'

const CardapioList = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCardapioQuery(id!)

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header headerBig={false} />
      <Banner restaurante={cardapio} />
      <CardListPerfil items={cardapio.cardapio} />
      <Footer />
    </>
  )
}

export default CardapioList
