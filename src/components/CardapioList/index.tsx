import { Cardapio, Restaurante } from '../../pages/Home'
import CardPerfilItem from '../ProductCardapio'
import { ContainerCardList, List } from './styles'

export type Props = {
  items: Cardapio[]
}

const CardListPerfil = ({ items }: Props) => {
  return (
    <>
      <ContainerCardList>
        <List>
          {items.map((item) => (
            <li key={item.id}>
              <CardPerfilItem
                descricao={item.descricao}
                foto={item.foto}
                nome={item.nome}
                porcao={item.porcao}
                preco={item.preco}
              />
            </li>
          ))}
        </List>
      </ContainerCardList>
    </>
  )
}

export default CardListPerfil
