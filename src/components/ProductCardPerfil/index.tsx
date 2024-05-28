import PizzaImage from '../../assets/images/pizza.png'
import { ButtonCard, CardPerfil } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const CardPerfilItem = ({ title, description, image }: Props) => {
  return (
    <CardPerfil>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonCard>Adicionar ao carrinho</ButtonCard>
    </CardPerfil>
  )
}

export default CardPerfilItem
