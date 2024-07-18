import MacarraoBanner from '../../assets/images/image2.png'

import {
  CategoryText,
  ContainerBanner,
  ContainerText,
  ItalianaText
} from './styles'

export type Props = {
  restaurante: Restaurante
}

const Banner = ({ restaurante }: Props) => {
  return (
    <>
      <ContainerBanner style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <ContainerText>
          <ItalianaText>{restaurante.tipo}</ItalianaText>
          <CategoryText>{restaurante.titulo}</CategoryText>
        </ContainerText>
      </ContainerBanner>
    </>
  )
}

export default Banner
