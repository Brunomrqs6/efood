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
          {cardapioList.map((c) => (
            <li key={c.id}>
              <CardPerfilItem
                descricao={c.descricao}
                foto={c.foto}
                nome={c.nome}
                porcao={c.porcao}
                preco={c.preco}
              />
            </li>
          ))}
        </List>
      </ContainerCardList>
    </>
  )
}

export default CardListPerfil
