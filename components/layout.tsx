import { NextPage } from "next"
import Footer from "./footer"

const Layout: NextPage = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default Layout
