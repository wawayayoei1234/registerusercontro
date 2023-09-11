import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Logo from '../../assets/img/logo-AuthWeiler.png'
import Lang from '../../assets/img/AuthWeiler-icon lang2.png'
import Link from 'next/link';
import { useRouter } from 'next/router';


function ResponsiveAppBar() {
  const router = useRouter();

  const [language, setlanguage] = React.useState("EN");

  React.useEffect(() => {
    const language = (localStorage.getItem('language'));
    if (language) {
      setlanguage(language);
    }
  }, []);

  const handleButtonClickTH = () => {
    localStorage.setItem('language', 'TH');
    router.reload();
  };
  const handleButtonClickEN = () => {
    localStorage.setItem('language', 'EN');
    router.reload();
  };
  return (
    <>
      <Container sx={{display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', my:"50px"}} maxWidth="false">
        <Box className="zoomlogo" display="flex" sx={{cursor:"pointer"}} >
            <Box sx={{mr:10}}></Box>
            <Link href="/" >
              <Image width="200"  alt="logo" src={Logo}></Image>
            </Link>
        </Box>
        <Box className="dropdown">
           <Box  display="flex" sx={{cursor:"pointer"}}>
             <Box className="lang" sx={{color:"secondary.main",fontFamily:"Segoe UI"}}>{language}</Box>
             <Box sx={{mr:0.5}}></Box>
             <Image width="20"  alt="logo" src={Lang}></Image>
             <Box sx={{mr:10}}></Box>
           </Box>
        <Box className="dropdowncontent">
          {language==="EN"&&(
            <Box sx={{cursor:"pointer"}} className="lang2" onClick={handleButtonClickTH}>TH</Box>
          )}
        {language==="TH"&&(
            <Box sx={{cursor:"pointer"}} className="lang2" onClick={handleButtonClickEN}>EN</Box>
          )}
       </Box>
     </Box>
      </Container>

      <Container sx={{display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center', my:"50px"}} maxWidth="false">
      <Box display="flex" sx={{cursor:"pointer"}}>
      <Link href="/" >
          <Image width="200"  alt="logo" src={Logo}></Image>
      </Link>
      </Box>
      
      <Box className="dropdown">
      <Box display="flex" sx={{cursor:"pointer"}}>
        <Box sx={{color:"secondary.main",fontFamily:"Prompt"}}>EN</Box>
        <Box sx={{mr:0.5}}></Box>
        <Image width="20"  alt="logo" src={Lang}></Image>
      </Box>
        <Box className="dropdowncontent">
        <Link style={{textDecoration:"none"}} href="/" >
           <Box sx={{cursor:"pointer"}} className="lang2" >TH</Box>
        </Link>
       </Box>
     </Box>
      </Container>
      </>
 
  );
}

export default ResponsiveAppBar;
