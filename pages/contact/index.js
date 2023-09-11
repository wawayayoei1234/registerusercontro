import React from 'react'
import Bg from './components/bg'
import Title from '../../components/title'
import Logo from './components/logo'
import BtContact from './components/button'
import TextEmail from './components/email'

function index() {
  return (
    <div>
      <Title namepage="Contact" company="Authweiler"/>
      <Logo/>
      <BtContact/>
      <TextEmail/>
      <Bg/>
    </div>
  )
}

export default index