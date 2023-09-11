import { AppBar, Box, Toolbar } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import imageLogo from "@/assets/img/logo-AuthWeiler.png"
import Link from 'next/link'

function index() {
  return (
    <div >
      <Box sx={{display:{xs:"none",md:"flex"},flexDirection:"column", justifyContent: 'center', }}>
      <AppBar position='relative' sx={{backgroundImage:"linear-gradient(to top, #184f30,#257a4a)"}}>      
      <Toolbar variant='dense'>
      <Link href='/'>
    <Box sx={{cursor:"pointer", transition:"transform 0.2s","&:hover":{transform:"scale(1.3)"}}}>
      <Image src={imageLogo} alt="logo"
        style={{
        width:'140px' , 
        height:'auto',
        marginRight:'auto',
        }} 
        /> 
    </Box> 
    </Link>        
    </Toolbar>
  </AppBar>
  </Box>
  
  <Box sx={{display:{xs:"flex",md:"none"},flexDirection:"column", justifyContent: 'center', }}>
    <AppBar position='relative' sx={{backgroundImage:"linear-gradient(to top, #184f30,#257a4a)"}}>      
    <Toolbar variant='dense'>
   

      <Link href="/" style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexGrow: 1, }}>
        <Image src={imageLogo}alt="logo"style={{width: '150px',height: 'auto',}}
        />
        </Link>
            
       
    </Toolbar>
  </AppBar>


    
  </Box>
  
  </div>
  )
}

export default index