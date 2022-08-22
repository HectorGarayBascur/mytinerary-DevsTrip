import React from "react"
import Footer from '../components/Footer'
import UnderContrstruction from "../components/UnderContrstruction"


 function LayoutFooter(props) {

  return (
<div>
    
    {props.children}
    <UnderContrstruction/>
    <Footer/>

    </div>
    
  )

}

export default LayoutFooter
