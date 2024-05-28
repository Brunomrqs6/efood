import { FooterContainer, FooterContent } from './styles'
import logo from '../../assets/images/logo.png'
import redesSociais from '../../assets/images/redes sociais.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <img src={logo} alt="logo" />
        <a href="#">
          <img src={redesSociais} alt="" />
        </a>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.{' '}
        </p>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
