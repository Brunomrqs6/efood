import { Restaurante } from '../../pages/Home'
import Card from '../ProductCard'
import { ContainerList, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const CardList = ({ restaurantes }: Props) => {
  return (
    <>
      <ContainerList>
        <List>
          {restaurantes.map((item) => (
            <Card
              key={item.id}
              titulo={item.titulo}
              descricao={item.descricao}
              capa={item.capa}
              avaliacao={item.avaliacao}
              id={item.id}
              tipo={item.tipo}
              destacado={item.destacado}
            />
          ))}
        </List>
      </ContainerList>
    </>
  )
}

export default CardList
