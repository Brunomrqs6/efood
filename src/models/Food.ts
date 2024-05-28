class Food {
  title: string
  description: string
  image: string
  note: string
  infos: string[]
  id: number

  constructor(
    title: string,
    id: number,
    description: string,
    image: string,
    infos: string[],
    note: string
  ) {
    this.title = title
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.note = note
  }
}

export default Food
