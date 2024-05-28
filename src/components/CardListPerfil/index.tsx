import FoodPerfil from '../../models/FoodPerfil'
import CardPerfilItem from '../ProductCardPerfil'
import { ContainerCardList, List } from './styles'

type Props = {
  foodsPerfil: FoodPerfil[]
}

const CardListPerfil = ({ foodsPerfil }: Props) => {
  return (
    <>
      <ContainerCardList>
        <List>
          {foodsPerfil.map((foodsPerfil) => (
            <CardPerfilItem
              key={foodsPerfil.id}
              title={foodsPerfil.title}
              description={foodsPerfil.description}
              image={foodsPerfil.image}
            />
          ))}
        </List>
      </ContainerCardList>
    </>
  )
}

export default CardListPerfil
