import styled from 'styled-components'
import { cores } from '../../styles'
import MacarraoFundo from '../../assets/images/image2.png'

export const ContainerBanner = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  background-size: cover;
`

export const ContainerText = styled.div`
  width: 1024px;
  margin: 0 auto;

  span {
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 100;
    position: absolute;
    top: 25px;
  }

  p {
    color: ${cores.branco};
    position: absolute;
    font-size: 32px;
    font-weight: 900;
    line-height: 38px;
    bottom: 25px;
  }
`
