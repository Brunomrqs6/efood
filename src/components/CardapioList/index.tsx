import { Food } from '../../pages/Home'
import { Cardapio } from '../../pages/Home'
import CardPerfilItem from '../ProductCardapio'
import { ContainerCardList, List } from './styles'

export type Props = {
  cardapioList: Cardapio[]
}

const CardListPerfil = ({ cardapioList }: Props) => {
  return (
    <>
      <ContainerCardList>
        <List>
          {cardapioList.map((cardapio) => (
            <CardPerfilItem
              descricao={cardapio.nome}
              foto={cardapio.foto}
              nome={cardapio.nome}
              porcao={cardapio.porcao}
              preco={cardapio.preco}
              key={cardapio.id}
            />
          ))}
        </List>
      </ContainerCardList>
    </>
  )
}

export default CardListPerfil
