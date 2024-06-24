import { Link } from 'react-router-dom'
import fundoImagem from '../../assets/images/Vector.png'
import logo from '../../assets/images/logo.png'
import {
  ContainerHeader,
  ContainerHeaderPerfil,
  HeaderContent,
  LinkItem
} from './styles'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export type Props = {
  headerBig: boolean
}

const Header = ({ headerBig }: Props) => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

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
            <LinkItem to="/">Restaurantes</LinkItem>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <p onClick={openCart}>0 produtos(s) no carrinho</p>
          </div>
        </ContainerHeaderPerfil>
      )}
    </div>
  )
}

export default Header
