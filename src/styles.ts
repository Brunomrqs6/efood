import { table } from 'console'
import { createGlobalStyle, styled } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  brancoLaranjado: '#FFF8F2',
  branco: '#FFF',
  bege: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  smartphone: '660px'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.brancoLaranjado};
    color: ${cores.vermelho};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

`

export default GlobalCss
