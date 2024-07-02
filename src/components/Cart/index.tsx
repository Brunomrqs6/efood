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
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <Item key={item.id}>
              <FoodImg src={item.foto} alt="" />
              <div>
                <ProductName>{item.nome}</ProductName>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <Lixeira
                onClick={() => removeItem(item.id)}
                src={lixeira}
                alt=""
              />
            </Item>
          ))}
        </ul>
        <ValorDiv>
          <p>Valor Total</p>
          <p>{formataPreco(getPrice())}</p>
        </ValorDiv>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
