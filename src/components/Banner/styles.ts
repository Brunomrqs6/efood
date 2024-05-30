import styled from 'styled-components'
import { cores } from '../../styles'
import MacarraoFundo from '../../assets/images/image2.png'

export const ContainerBanner = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${MacarraoFundo});
`

export const ContainerText = styled.div`
  width: 1024px;
  margin: 0 auto;
`
export const ItalianaText = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
  position: absolute;
  top: 25px;
`
export const CategoryText = styled.p`
  color: ${cores.branco};
  position: absolute;
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  bottom: 25px;
`
