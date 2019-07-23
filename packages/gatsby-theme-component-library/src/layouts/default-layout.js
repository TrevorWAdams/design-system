import React from 'react'
import { Main } from "theme-ui"
import Root from "../elements/root"
import Header from "../elements/header"
import Footer from "../elements/footer"

const DefaultLayout = ({ children }) => {
  return (
    <Root>
      <Header />
      <Main>{children}</Main>
      <Footer>© 2019</Footer>
    </Root>
  )
}

export default DefaultLayout
