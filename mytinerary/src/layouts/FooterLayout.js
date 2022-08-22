import React from "react"
import Footer from '../components/Footer'


 function LayoutFooter(props) {

  return (

<div>

    {props.children}
    <Footer/>

    </div>
    
  )

}

export default LayoutFooter
