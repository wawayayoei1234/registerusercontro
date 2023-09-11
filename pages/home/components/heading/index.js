import { Box, Container } from '@mui/material'
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
   <div key={`${index}`}>
        <Container sx={{ display: { xs: 'none', md: 'flex' }, my:"50px"}}  maxWidth="false">
            <Box sx={{mr:10}}></Box>
        <Box>
            <Box sx={{color:"secondary.main",fontFamily:"Segoe UI",textTransform:"uppercase",fontWeight:"600",fontSize:"65px",'@media (max-width: 600px)': {
          fontSize: '14px'}}} className="heading1">
            {language==="EN"&&(data.heading1EN)}
            {language==="TH"&&(data.heading1TH)}
          </Box>
            <Box sx={{color:"secondary.main",fontFamily:"Segoe UI",textTransform:"uppercase",fontWeight:"600",fontSize:"65px",'@media (max-width: 600px)': {
          fontSize: '14px'}}} className="heading2">
            {language==="EN"&&(data.heading2EN)}
            {language==="TH"&&(data.heading2TH)}
          </Box>
        </Box>
        </Container>

       <Container sx={{ display: { xs: 'flex', md: 'none' }, my:"50px",justifyContent:"center",alignItems:"center",flexDirection:"column"}}  maxWidth="false">
       <Box sx={{textAlign: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center',color:"secondary.main",fontFamily:"Segoe UI",textTransform:"uppercase",fontWeight:"600",fontSize:"65px",'@media (max-width: 600px)': {
       fontSize: '16px'}}} className="heading1">
        {language==="EN"&&(data.heading1EN)}
        {language==="TH"&&(data.heading1TH)}
       </Box>
       <Box sx={{textAlign: 'center',display: 'flex',justifyContent: 'center',alignItems: 'center',color:"secondary.main",fontFamily:"Segoe UI",textTransform:"uppercase",fontWeight:"600",fontSize:"65px",'@media (max-width: 600px)': {
       fontSize: '16px'}}} className="heading2">
        {language==="EN"&&(data.heading2EN)}
        {language==="TH"&&(data.heading2TH)}
       </Box>
       </Container>
       </div>
        )}
    </>
  )
}

export default index