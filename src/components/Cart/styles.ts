import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;
`
export const Item = styled.div`
  position: relative;
  display: flex;
  background-color: ${cores.bege};
  padding: 8px;
  border-radius: 2px;
  margin-bottom: 8px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }

  div {
    margin-left: 8px;
  }
`

export const ProductName = styled.span`
  font-weight: 900;
  font-size: 16px;
`

export const FoodImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const Lixeira = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 0;
  bottom: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`

export const ValorDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.bege};
  margin-top: 40px;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 16px;
`

export const Form = styled.form`
  color: ${cores.branco};
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;

  label {
    display: block;
    margin-bottom: 4px;
    margin-top: 4px;
  }

  input {
    display: block;
    width: 100%;
    padding: 8px;
    background-color: ${cores.bege};
    border: none;
  }

  div {
    margin-top: 24px;

    button {
      margin-bottom: 8px;
    }
  }
`
