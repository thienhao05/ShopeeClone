import React from 'react'
import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'

//children = nội dung nằm bên trong componentf  ASDF B
interface Props {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  ) //rfc
}
