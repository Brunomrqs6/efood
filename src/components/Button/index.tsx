export type Props = {
  onClick?: () => void
  children: string
}

export const Button = ({ onClick, children }: Props) => {
  return <Button onClick={onClick}>{children}</Button>
}
