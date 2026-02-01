import React from 'react'

//children = nội dung nằm bên trong componentf  ASDF B
interface Props {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      RegisterLayout
      {children}
    </div>
  ) //rfc
}
