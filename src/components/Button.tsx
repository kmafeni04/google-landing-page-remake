import { ReactNode } from "react"

interface Props {
  children: ReactNode
  id?: string
}

function Button({ children, id }: Props) {
  return (
    <button className="Button" id={id}>{children}</button>
  )
}

export default Button
