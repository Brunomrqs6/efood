import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ContainerCardList = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 56px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    grid-template-columns: 1fr;
    column-gap: 16px;
  }
`
