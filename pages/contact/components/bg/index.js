import { Box } from '@mui/material'
import React from 'react'
import BgContact from '../../../../assets/img/bgcontact.png'
import Image from 'next/image'

function index() {
  return (
    <div>
        <Image priority={true} className='BgContact' alt="BgContact" src={BgContact}/>
    </div>
  )
}

export default index