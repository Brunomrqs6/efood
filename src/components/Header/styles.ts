import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerHeader = styled.div`
  width: 100%;
  height: 260px;
`

export const HeaderContent = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 36px;
    margin-bottom: 40px;
  }

  p {
    font-size: 36px;
    font-weight: 900;
    text-align: center;
  }
`
export const ContainerHeaderPerfil = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 180px;

  div {
    display: flex;
    padding-top: 56px;
    align-items: center;
    justify-content: space-between;
    width: 1024px;
    margin: 0 auto;
    font-size: 17px;
    font-weight: 900;
  }
`
