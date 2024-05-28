import Card from '../ProductCard'
import { ContainerList, List } from './styles'
import Food from '../../models/Food'

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
              title={food.title}
              description={food.description}
              image={food.image}
              note={food.note}
              infos={food.infos}
            />
          ))}
        </List>
      </ContainerList>
    </>
  )
}

export default CardList
