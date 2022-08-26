import React from "react"
import Footer from '../components/Footer'
import Header from '../components/Header'


function LayoutFooter(props) {

  return (

    <div>
      <Header />
      {props.children}
      <Footer />
    </div>

  )

}

export default LayoutFooter
