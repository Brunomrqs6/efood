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
          {cardapioList.map((food) => (
            <CardPerfilItem
              key={food.id}
              nome={food.nome}
              descricao={food.descricao}
              foto={food.foto}
              porcao={food.porcao}
              preco={food.preco}
            />
          ))}
        </List>
      </ContainerCardList>
    </>
  )
}

export default CardListPerfil
