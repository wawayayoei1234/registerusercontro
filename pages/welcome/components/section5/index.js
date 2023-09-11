import { Box, Button, Container,useMediaQuery  } from '@mui/material';
import React from 'react';
import { section5 } from '@/data/section5data';
import { section5service } from '@/data/section5service';
import { styledata } from '@/data/styledata'
import Grid from '@mui/material/Grid';
import Image from 'next/image';

function index() {

  const boxLeftStyle = {
    alignSelf: 'flex-start', 
  };
  return (
    <Container sx={{mt:3,mb:3}} maxWidth="xl">
      <Box sx={{display: { xs: 'none', md: 'flex' },flexDirection:"column"}} style={boxLeftStyle}>
        <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "45px",fontWeight:700}} style={boxLeftStyle}>{section5[0].heading1}</Box>
        <Box style={boxLeftStyle} sx={{mt:3}}>
           <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section5[0].detail1_1}</Box>
           <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section5[0].detail1_2}</Box>
        </Box>
      </Box>

      <Box sx={{display: { xs: 'flex', md: 'none' },flexDirection:"column"}} style={boxLeftStyle}>
        <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "20px",fontWeight:700}} style={boxLeftStyle}>{section5[0].heading1}</Box>
        <Box style={boxLeftStyle} sx={{mt:1}}>
           <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section5[0].detail1_1}</Box>
           <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section5[0].detail1_2}</Box>
        </Box>
      </Box>
      

      <Box sx={{width:"100%",border:"2px solid",color:"primary.main",borderRadius:"5px",boxShadow:"2px 1px 8px 1px #888888",mt:2,display: { xs: 'none', md: 'flex' },justifyContent:"center"}} >
      <Grid gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gridTemplateRows="auto" display="grid" justifyItems="center" alignItems="center"  container spacing={{ xs: 12, md: 0 }}  >
         {section5service[0].heading1.map((item, index) => (
            <Box key={`${index}`} width="100%" sx={{textAlign:"left",flexDirection:"column",justifyContent:"center",display:"flex",alignItems:"center",p:5}}>
             <Box sx={{display:"flex"}}>
               <Image alt="pic" src={item.pic} width={20} height={20} ></Image>
               <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "15px",fontWeight:700,mx:1}}>{item.name}</Box>
             </Box>
            <Box sx={{mt:1}}>
               <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "15px"}}>{item.detail1}</Box>
               <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "15px"}}>{item.detail2}</Box>
            </Box>
            </Box>
        ))}
        </Grid>
     </Box>

     <Box sx={{width:"100%",border:"2px solid",color:"primary.main",borderRadius:"5px",boxShadow:"2px 1px 8px 1px #888888",mt:2,display: { xs: 'flex', md: 'none' },justifyContent:"center"}} >
      <Grid gridTemplateColumns="repeat(2, minmax(100px, 2fr))" gridTemplateRows="auto" display="grid" justifyItems="center" alignItems="center"  container spacing={{ xs: 0, md: 0 }}  >
         {section5service[0].heading1.map((item, index) => (
            <Box key={`${index}`} width="100%" sx={{textAlign:"left",flexDirection:"column",justifyContent:"center",display:"flex",alignItems:"center",p:2,mr:-3}}>
             <Box sx={{display:"flex"}}>
               <Image alt="pic" src={item.pic} width={20} height={20} ></Image>
               <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "0.75rem",fontWeight:600,mx:1}}>{item.name}</Box>
             </Box>
            <Box sx={{mt:1}}>
               <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "0.625rem"}}>{item.detail1}</Box>
               <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "0.625rem"}}>{item.detail2}</Box>
            </Box>
            </Box>
        ))}
        </Grid>
     </Box>

     
    </Container>
  );
}

export default index;
