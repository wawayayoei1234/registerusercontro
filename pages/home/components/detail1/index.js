import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {homedata} from '../../../../data/homedata'

function index() {
  const [language, setlanguage] = useState("EN");

  useEffect(() => {
    const language = (localStorage.getItem('language'));
    if (language) {
      setlanguage(language);
    }
  }, []);
  return (
    <>
    {homedata.map((data,index)=>
    <div key={index}>
        <Container sx={{ display: { xs: 'none', md: 'flex' }, my:"-30px"}}  maxWidth="false"> 
          <Box sx={{mr:10}}></Box>
        <Box>
            <Box sx={{color:"secondary.main",fontFamily:"Segoe UI",fontWeight:"300",fontSize:"20px",'@media (max-width: 600px)': {fontSize: '10px'}}} className="detail1">
              {language==="EN"&&(data.detail1_1EN)}
              {language==="TH"&&(data.detail1_1TH)}
            </Box>
            <Box sx={{color:"secondary.main",fontFamily:"Segoe UI",fontWeight:"300",fontSize:"20px",'@media (max-width: 600px)': {fontSize: '10px'}}} className="detail2">
              {language==="EN"&&(data.detail1_2EN)}
              {language==="TH"&&(data.detail1_2TH)}
            </Box>
        </Box>
        </Container>

        <Container sx={{ display: { xs: 'flex', md: 'none' }, my:"-30px",justifyContent:"center",alignItems:"center",flexDirection:"column"}}  maxWidth="false">
          <Box sx={{textAlign: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center',color:"secondary.main",fontFamily:"Segoe UI",fontWeight:"300",fontSize:"20px",'@media (max-width: 600px)': {fontSize: '12px'}}} className="detail1">
            {language==="EN"&&(data.detail1_1EN)}
            {language==="TH"&&(data.detail1_1TH)}
          </Box>
          <Box sx={{textAlign: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center',color:"secondary.main",fontFamily:"Segoe UI",fontWeight:"300",fontSize:"20px",'@media (max-width: 600px)': {fontSize: '12px'}}} className="detail2">
            {language==="EN"&&(data.detail1_2EN)}
            {language==="TH"&&(data.detail1_2TH)}
        </Box>
        </Container>
    </div>
    )}
    </>
  )
}

export default index