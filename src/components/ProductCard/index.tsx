import { Link } from 'react-router-dom'
import Tag from '../Tag'
import { Button, CardContent, CardText, Description, TagDiv } from './styles'

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
      <CardText>
        <h2>{title}</h2>
        <div>
          <span>{note}</span>
        </div>
      </CardText>
      <Description>{description}</Description>
      <Link to="/perfil">
        <Button>Saiba Mais</Button>
      </Link>
    </CardContent>
  )
}

export default Card
