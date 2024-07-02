import PizzaImage from '../../assets/images/pizza.png'
import { Modal, ModalBody, ModalContent } from './styles'
import { ButtonCard, CardPerfil } from './styles'
import pizzaImg from '../../assets/images/pizza2.png'
import fechar from '../../assets/images/close 1.png'
import { useState } from 'react'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import { Cardapio } from '../../pages/Home'

type Props = {
  cardapio: Cardapio
}

const CardPerfilItem = ({ cardapio }: Props) => {
  const dispatch = useDispatch()

  const [modalIsVisible, setModalIsVisible] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 150) {
      return descricao.slice(0, 147) + '...'
    }
    return descricao
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const addToCart = () => {
    dispatch(add(cardapio))
    dispatch(open())
    setModalIsVisible(false)
  }

  return (
    <>
      <section>
        <CardPerfil>
          <div>
            <img src={cardapio.foto} alt={cardapio.nome} />
          </div>
          <h3>{cardapio.nome}</h3>
          <p>{getDescricao(cardapio.descricao)}</p>
          <ButtonCard
            onClick={() => {
              setModalIsVisible(true)
            }}
          >
            Mais detalhes
          </ButtonCard>
        </CardPerfil>
      </section>
      <Modal className={modalIsVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <p> </p>
            <img onClick={() => setModalIsVisible(false)} src={fechar} alt="" />
          </header>
          <ModalBody>
            <img src={cardapio.foto} />
            <div>
              <h4>{cardapio.nome}</h4>
              <p>
                {cardapio.descricao} <br /> <br />{' '}
              </p>
              <p>Serve: de {cardapio.porcao}</p>
              <button onClick={addToCart}>
                Adicionar ao carrinho -{' '}
                <span>{formataPreco(cardapio.preco)}</span>
              </button>
            </div>
          </ModalBody>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default CardPerfilItem
