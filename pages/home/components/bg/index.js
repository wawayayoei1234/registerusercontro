import { Box } from '@mui/material'
import React from 'react'
import Bg from '../../../../assets/img/bg.png'
import Image from 'next/image'

function index() {
  return (
    <div>
        <Image className='bg' alt="bg" src={Bg}/>
    </div>
  )
}

export default index