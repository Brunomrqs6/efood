import {
  Button,
  CartContainer,
  FoodImg,
  Item,
  Lixeira,
  Overlay,
  ProductName,
  SideBar,
  ValorDiv
} from './styles'
import pizzaImg from '../../assets/images/pizza.png'
import lixeira from '../../assets/images/lixeira.png'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          <Item>
            <FoodImg src={pizzaImg} alt="" />
            <div>
              <ProductName>Pizza Marguerita</ProductName>
              <p>R$ 60,90</p>
            </div>
            <Lixeira src={lixeira} alt="" />
          </Item>
        </ul>
        <ValorDiv>
          <p>Valor Total</p>
          <p>R$ 182,70</p>
        </ValorDiv>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
