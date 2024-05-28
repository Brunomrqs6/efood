import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 220px;
  background-color: ${cores.bege};
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  img {
    margin-top: 32px;
  }

  p {
    margin-top: 32px;
    font-size: 10px;
  }
`
