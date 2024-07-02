import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContainerList = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 80px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    grid-template-columns: 1fr;
    column-gap: 16px;
  }
`
