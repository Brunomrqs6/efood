import MacarraoBanner from '../../assets/images/image2.png'
import { ContainerBanner, ContainerText } from './styles'

const Banner = () => {
  return (
    <>
      <ContainerBanner style={{ backgroundImage: `url(${MacarraoBanner})` }}>
        <ContainerText>
          <span>Italiana</span>
          <p>La Dolce Vita Trattoria</p>
        </ContainerText>
      </ContainerBanner>
    </>
  )
}

export default Banner
