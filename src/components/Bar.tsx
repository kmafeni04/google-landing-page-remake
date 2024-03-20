import { ReactNode } from "react"

interface Props {
  children: ReactNode
  id?: string
}

function Bar({ children, id }: Props) {
  return (
    <>
      <div className="Bar" id={id}>{children}</div>
    </>
  )
}

export default Bar
