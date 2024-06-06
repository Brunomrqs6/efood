import CardListPerfil from '../../components/CardapioList'
import Header from '../../components/Header'

import PizzaImage from '../../assets/images/pizza.png'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  return (
    <>
      <Header headerBig={false} />
      <Banner />
      <CardListPerfil cardapioList={} />
      <Footer />
    </>
  )
}

export default Perfil
