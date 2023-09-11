import React from 'react'
import Logo from '../../../../assets/img/logo-AuthWeiler.png'
import Container from '@mui/material/Container';
import Image from 'next/image';
import { Box } from '@mui/material';
import Link from 'next/link';

function index() {
  return (
    <>
        <Container sx={{display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', mt:"200px"}} maxWidth="false">
            <Box className="zoomlogo" display="flex" sx={{cursor:"pointer"}}>
            <Box sx={{mr:10}}></Box>
            <Link href="/" >
            <Image className='logocontact' alt="logo" priority={true} src={Logo}></Image>
            </Link>
        </Box>
        </Container>

        <Container sx={{display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center', mt:"90px"}} maxWidth="false">
        <Box className="zoomlogo" display="flex" sx={{cursor:"pointer"}}>
        <Link href="/" >
        <Image className='logocontactmobile' alt="logo" priority={true} src={Logo}></Image>
        </Link>
    </Box>
    </Container>
   </>
  )
}

export default index