import { Link } from 'react-router-dom'
import Tag from '../Tag'
import {
  Button,
  CardContent,
  CardText,
  CardTextContent,
  Description,
  NoteDiv,
  TagDiv
} from './styles'
import estrelaImagem from '../../assets/images/estrela.png'

type Props = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  tipo: string
  destacado: boolean
}

const Card = ({
  id,
  titulo,
  avaliacao,
  descricao,
  capa,
  tipo,
  destacado = false
}: Props) => {
  return (
    <CardContent>
      <img src={capa} alt={titulo} />
      <TagDiv>
        <Tag key={tipo}>{tipo}</Tag>
      </TagDiv>
      <CardTextContent>
        <CardText>
          <p>{titulo}</p>
          <NoteDiv>
            <p>{avaliacao}</p>
            {destacado && <img src={estrelaImagem} alt="Estrela logo" />}
          </NoteDiv>
        </CardText>
        <Description>{descricao}</Description>
        <Link to="/cardapio">
          <Button>Saiba Mais</Button>
        </Link>
      </CardTextContent>
    </CardContent>
  )
}

export default Card
