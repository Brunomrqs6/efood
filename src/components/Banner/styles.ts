import styled from 'styled-components'
import { cores } from '../../styles'
import MacarraoFundo from '../../assets/images/image2.png'
import { Restaurante } from '../../pages/Home'

export const ContainerBanner = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  background-size: cover;

  &::after {
    position: absolute;
    width: 100%;
    height: 280px;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }
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
  z-index: 1;
  text-transform: capitalize;
`
export const CategoryText = styled.p`
  color: ${cores.branco};
  position: absolute;
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  bottom: 25px;
  z-index: 1;
`
