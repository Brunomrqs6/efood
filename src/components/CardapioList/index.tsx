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
                cardapio={{
                  foto: item.foto,
                  preco: item.preco,
                  id: item.id,
                  nome: item.nome,
                  descricao: item.descricao,
                  porcao: item.porcao
                }}
              />
            </li>
          ))}
        </List>
      </ContainerCardList>
    </>
  )
}

export default CardListPerfil
