import PizzaImage from '../../assets/images/pizza.png'
import { Modal, ModalBody, ModalContent } from './styles'
import { ButtonCard, CardPerfil } from './styles'
import pizzaImg from '../../assets/images/pizza2.png'
import fechar from '../../assets/images/close 1.png'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  image: string
}

const CardPerfilItem = ({ title, description, image }: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  return (
    <>
      <section>
        <CardPerfil>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
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
            <img src={pizzaImg} />
            <div>
              <h4>Pizza Marguerita</h4>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião. <br /> <br /> <br /> Serve: de 2 a
                3 pessoas
              </p>
              <button>Adicionar ao carrinho - R$ 60,90</button>
            </div>
          </ModalBody>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsVisible(false)}></div>
      </Modal>
    </>
  )
}

export default CardPerfilItem
