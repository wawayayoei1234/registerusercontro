import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import logo from '@/assets/img/footerlogo.png'
import styles from '../../../welcome/css/welcome.module.css'
import { footerdata } from '@/data/footerdata'
import { styledata } from '@/data/styledata'
import Link from 'next/link'

function index() {
  return (
    <Box sx={{mt:3,mb:3}} className={styles.containerfooter}>
      <Image className={styles.footerlogo} alt="logo" src={logo}></Image>
      <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <Link href="/contact" style={{ textDecoration: 'none' }}>
      <Box sx={{ mt: 3, color: '#fff',height: '30px',width:"12.5rem",border: '2px solid',borderColor: 'homepage.main',borderRadius: '15px',fontFamily: styledata[0].font,fontSize: '1rem',display: 'flex',justifyContent: 'center',alignItems: 'center',transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: 'four.main',
          },
        }}
      >
        CONTACT US
      </Box>
    </Link>
    </Box>
      <Box sx={{mt:3,color:"four.main",fontFamily:styledata[0].font,fontSize: "0.75rem"}}>{footerdata[0].copyright}</Box>
    </Box>
  )
}

export default index