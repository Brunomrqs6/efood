import MacarraoBanner from '../../assets/images/image2.png'
import {
  CategoryText,
  ContainerBanner,
  ContainerText,
  ItalianaText
} from './styles'

const Banner = () => {
  return (
    <>
      <ContainerBanner /*style={{ backgroundImage: `url(${MacarraoBanner})` }}*/
      >
        <ContainerText>
          <ItalianaText>Italiana</ItalianaText>
          <CategoryText>La Dolce Vita Trattoria</CategoryText>
        </ContainerText>
      </ContainerBanner>
    </>
  )
}

export default Banner
