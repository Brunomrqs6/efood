import PizzaImage from '../../assets/images/pizza.png'
import { Modal, ModalBody, ModalContent } from './styles'
import { ButtonCard, CardPerfil } from './styles'
import pizzaImg from '../../assets/images/pizza2.png'
import fechar from '../../assets/images/close 1.png'
import { useState } from 'react'

type Props = {
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

const CardPerfilItem = ({ foto, nome, descricao, porcao, preco }: Props) => {
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

  return (
    <>
      <section>
        <CardPerfil>
          <div>
            <img src={foto} alt={nome} />
          </div>
          <h3>{nome}</h3>
          <p>{getDescricao(descricao)}</p>
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
            <img src={foto} />
            <div>
              <h4>{nome}</h4>
              <p>
                {descricao} <br /> <br />{' '}
              </p>
              <p>Serve: de {porcao}</p>
              <button>
                Adicionar ao carrinho - <span>{formataPreco(preco)}</span>
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
