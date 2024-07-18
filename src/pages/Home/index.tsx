import CardList from '../../components/CardList'
import Header from '../../components/Header'
import Sushi from '../../assets/images/Sushi.png'
import Macarrao from '../../assets/images/image 1.png'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantQuery()

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header headerBig={true} />
      <CardList restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
