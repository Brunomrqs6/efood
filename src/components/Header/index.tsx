import { Link } from 'react-router-dom'
import fundoImagem from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import { ContainerHeader, ContainerHeaderPerfil, HeaderContent } from './styles'

export type Props = {
  headerBig: boolean
}

const Header = ({ headerBig }: Props) => {
  return (
    <div>
      {headerBig ? (
        <ContainerHeader style={{ backgroundImage: `url(${fundoImagem})` }}>
          <HeaderContent>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <p>
              Viva experiências gastronômicas <br /> no conforto da sua casa
            </p>
          </HeaderContent>
        </ContainerHeader>
      ) : (
        <ContainerHeaderPerfil
          style={{ backgroundImage: `url(${fundoImagem})` }}
        >
          <div>
            <p>Restaurantes</p>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <p>0 produtos(s) no carrinho</p>
          </div>
        </ContainerHeaderPerfil>
      )}
    </div>
  )
}

export default Header
