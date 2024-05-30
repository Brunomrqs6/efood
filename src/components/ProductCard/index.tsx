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
  title: string
  note: string
  description: string
  image: string
  infos: string[]
}

const Card = ({ title, note, description, image, infos }: Props) => {
  return (
    <CardContent>
      <img src={image} alt={title} />
      <TagDiv>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </TagDiv>
      <CardTextContent>
        <CardText>
          <p>{title}</p>
          <NoteDiv>
            <p>{note}</p>
            <img src={estrelaImagem} alt="Estrela logo" />
          </NoteDiv>
        </CardText>
        <Description>{description}</Description>
        <Link to="/perfil">
          <Button>Saiba Mais</Button>
        </Link>
      </CardTextContent>
    </CardContent>
  )
}

export default Card
