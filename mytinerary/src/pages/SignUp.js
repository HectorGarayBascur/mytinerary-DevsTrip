import React from 'react'
import "../styles/SignUp.css"
import SignUpForm from '../components/SignUpForm'

export default function SignUp(props) {
  return (

    <div className='form-signUp'>
      <SignUpForm showRole={props.showAdminForm} />
    </div>
  )
}
