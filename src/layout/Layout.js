import React from 'react'
import { Navbar } from '../shared/Navbar/Navbar'
import Footer from '../shared/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
    <header>
      <Navbar />
    </header>
    <div>
      <main>{children}</main>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}

export default Layout