import styled from 'styled-components'
import { cores } from '../../styles'

export const CardPerfil = styled.ul`
  width: 320px;
  height: 338px;
  color: ${cores.bege};
  background-color: ${cores.vermelho};
  margin-bottom: 32px;

  img {
    display: flex;
    padding: 8px;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    line-height: 18px;
    margin-left: 8px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-left: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    width: 304px;
  }
`

export const ButtonCard = styled.button`
  display: flex;
  padding: 4px 86px;
  margin: 0 auto;
  border: none;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
