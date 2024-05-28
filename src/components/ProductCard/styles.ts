import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContent = styled.div`
  width: 472px;
  position: relative;
  font-size: 18px;
  border: 1px solid ${cores.vermelho};
  border-radius: 2px;
  margin-bottom: 80px;

  img {
    width: 100%;
    border-radius: 2px;
  }
`
export const CardText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin: 8px;

  div {
    line-height: 21px;

    span {
      margin-right: 8px;
    }
  }
`
export const Description = styled.p`
  font-size: 14px;
  margin: 16px 8px;
`
export const Button = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  border: none;
  padding: 4px 6px;
  margin-left: 8px;
  margin-bottom: 12px;
  cursor: pointer;
`
export const TagDiv = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
