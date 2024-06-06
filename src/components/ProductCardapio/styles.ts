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
  justify-content: center;
  border: none;
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  max-width: 304px;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  background-color: ${cores.vermelho};
  padding: 8px 8px 32px 32px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;

    img {
      cursor: pointer;
    }
  }

  > img {
    width: 280px;
    height: 280px;
  }
`
export const ModalBody = styled.div`
  color: ${cores.branco};
  display: flex;

  div {
    max-width: 656px;
    margin-left: 24px;
    height: 280px;

    h4 {
      margin-bottom: 16px;
      font-weight: 900;
      font-size: 18px;
      line-height: 21px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
    }

    button {
      margin-top: 16px;
      background-color: ${cores.bege};
      color: ${cores.vermelho};
      border: none;
      padding: 4px 6px;
      cursor: pointer;
      margin-top: 21px;
    }
  }
`
