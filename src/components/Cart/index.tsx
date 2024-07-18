import {
  Button,
  CartContainer,
  FoodImg,
  Form,
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
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

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

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      monthExpires: '',
      yearExpires: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string().required('O campo é obrigatório'),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      monthExpires: Yup.string().required('O campo é obrigatório'),
      yearExpires: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.name,
          address: {
            city: values.city,
            complement: values.complement,
            description: values.address,
            number: Number(values.number),
            zipCode: values.cep
          }
        },
        payment: {
          card: {
            code: Number(values.cardCode),
            expires: {
              month: Number(values.monthExpires),
              year: Number(values.yearExpires)
            },
            name: values.cardName,
            number: values.cardNumber
          }
        }
      })
    }
  })

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <div>
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
        </div>
        <div>
          <h3>Entrega</h3>
          <Form onSubmit={form.handleSubmit}>
            <label htmlFor="name">Quem irá receber</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.values.name}
              onBlur={form.handleBlur}
              onChange={form.handleChange}
            />

            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.values.address}
              onBlur={form.handleBlur}
              onChange={form.handleChange}
            />

            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onBlur={form.handleBlur}
              onChange={form.handleChange}
            />

            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={form.values.cep}
              onBlur={form.handleBlur}
              onChange={form.handleChange}
            />

            <label htmlFor="number">Número</label>
            <input
              type="text"
              id="number"
              name="number"
              value={form.values.number}
              onBlur={form.handleBlur}
              onChange={form.handleChange}
            />

            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              value={form.values.complement}
              onBlur={form.handleBlur}
              onChange={form.handleChange}
            />
            <div>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
              />

              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={form.values.cardNumber}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
              />

              <label htmlFor="cardCode">CVV</label>
              <input
                type="text"
                id="cardCode"
                name="cardCode"
                value={form.values.cardCode}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
              />

              <label htmlFor="monthExpires">Mês de vencimento</label>
              <input
                type="text"
                id="monthExpires"
                name="monthExpires"
                value={form.values.monthExpires}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
              />

              <label htmlFor="yearExpires">Ano de vencimento</label>
              <input
                type="text"
                id="yearExpires"
                name="yearExpires"
                value={form.values.yearExpires}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
              />

              <div>
                <Button onSubmit={form.handleSubmit}>
                  Finalizar pagamento
                </Button>
                <Button>Voltar para a edição de endereço</Button>
              </div>
            </div>
          </Form>
        </div>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
