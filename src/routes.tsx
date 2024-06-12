import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Perfil from './pages/Cardapio'
import CardapioList from './pages/Cardapio'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio/:id" element={<CardapioList />} />
  </Routes>
)

export default Rotas
