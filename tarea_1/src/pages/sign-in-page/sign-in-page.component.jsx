import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import './sign-in-page.styles.css'

const signIn = ({changeUser}) => {
  return (
    <>
      <SignIn changeUser={changeUser}/>
    </>
  )
}

export default signIn