import { Food } from '../../pages/Home'
import Card from '../ProductCard'
import { ContainerList, List } from './styles'

export type Props = {
  foods: Food[]
}

const CardList = ({ foods }: Props) => {
  return (
    <>
      <ContainerList>
        <List>
          {foods.map((food) => (
            <Card
              key={food.id}
              titulo={food.titulo}
              descricao={food.descricao}
              capa={food.capa}
              avaliacao={food.avaliacao}
              id={food.id}
              tipo={food.tipo}
              destacado={food.destacado}
            />
          ))}
        </List>
      </ContainerList>
    </>
  )
}

export default CardList
