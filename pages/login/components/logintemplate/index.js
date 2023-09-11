import { Box } from '@mui/material';
import Image from 'next/image';
import Bg from '@/assets/img/bglogingreen.png'
import { logindata } from '@/data/logindata'
import { useEffect, useState } from 'react';
import BtLogin from '@/components/button'
import { signIn } from "next-auth/react"
import Link from 'next/link';

function Index() {
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    const language = localStorage.getItem('language');
    if (language) {
      setLanguage(language);
    }
  }, []);

  return (

    <>
    {logindata.map((data, index) =>
      <div key={`${index}`}>
    {/* //*PC */}
    <Box sx={{ display: { xs: 'none', md: 'flex' }, height: '100vh', backgroundColor: '#ffffff' }}>
      <Box sx={{ flex: '5.5', display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <Box sx={{textAlign:"center",fontFamily:"Segoe UI",fontSize:"50px",color:"primary.main",fontWeight:500}}>
          {language === "EN" && (data.titleEN)}
          {language === "TH" && (data.titleTH)}
       </Box>
       <Box sx={{mt:5}}></Box>
       <Link href="/api/auth/login" data-testid="login"><BtLogin fontsize="18px" text="Login" btwidth="150px" maincolor="primary.main" bgcolor="four.main" /></Link>
      </Box>
      <Box sx={{ flex: '4.5', display: 'flex', justifyContent: 'center',flexDirection:"column", alignItems: 'center', position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Image className='bglogon' priority={true} alt="image" src={Bg}  />
        </Box>
        <Box sx={{ textAlign:"center",fontFamily:"Segoe UI",fontSize:"50px",color:"secondary.main",fontWeight:500,zIndex: 1 }}>
          {language === "EN" && (data.detail1EN)}
          {language === "TH" && (data.detail1TH)}
        </Box>
        <Box sx={{mt:5}}></Box>
        <Box sx={{ textAlign:"center",fontFamily:"Segoe UI",fontSize:"30px",color:"secondary.main",fontWeight:200,zIndex: 1 }}>
          {language === "EN" && (data.detail2EN)}
          {language === "TH" && (data.detail2TH)}
        </Box>
        <Box sx={{ textAlign:"center",fontFamily:"Segoe UI",fontSize:"30px",color:"secondary.main",fontWeight:200,zIndex: 1 }}>
          {language === "EN" && (data.detail3EN)}
          {language === "TH" && (data.detail3TH)}
        </Box>
        <Box sx={{mt:5}}></Box>
        <Link href="/partner" >
         <BtLogin fontsize="18px" text="Register" border="1px solid white" btwidth="150px"  bgcolor="four.main" />
        </Link>
      </Box>
    </Box>

{/* //^Mobile */}
    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ flex: '1', display: 'flex',justifyContent: 'center',flexDirection: 'column',alignItems: 'center',backgroundColor: '#ffffff',width: '100%',}}>
      <Box sx={{textAlign:"center",fontFamily:"Segoe UI",fontSize:"25px",color:"primary.main",fontWeight:500}}>
          {language === "EN" && (data.titleEN)}
          {language === "TH" && (data.titleTH)}
       </Box>
       <Box sx={{mt:2}}></Box>
       <Link href="/api/auth/login" data-testid="login">
         <BtLogin  text="Login" btwidth="120px" maincolor="primary.main" bgcolor="four.main" />
       </Link>
      </Box>
      <Box sx={{ flex: '1', display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection:"column",position: 'relative',width: '100%',}}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Image alt="image" priority={true} src={Bg} className='bglogon' />
        </Box>
        <Box sx={{ textAlign:"center",fontFamily:"Segoe UI",fontSize:"25px",color:"secondary.main",fontWeight:500,zIndex: 1 }}>
          {language === "EN" && (data.detail1EN)}
          {language === "TH" && (data.detail1TH)}
        </Box>
        <Box sx={{mt:5}}></Box>
        <Box sx={{ textAlign:"center",fontFamily:"Segoe UI",fontSize:"25px",color:"secondary.main",fontWeight:200,zIndex: 1 }}>
          {language === "EN" && (data.detail2EN)}
          {language === "TH" && (data.detail2TH)}
        </Box>
        <Box sx={{ textAlign:"center",fontFamily:"Segoe UI",fontSize:"25px",color:"secondary.main",fontWeight:200,zIndex: 1 }}>
          {language === "EN" && (data.detail3EN)}
          {language === "TH" && (data.detail3TH)}
        </Box>
        <Box sx={{mt:5}}></Box>
        <Link href="/partner" >
          <BtLogin text="Register" border="1px solid white" btwidth="120px"  bgcolor="four.main" />
        </Link>
      </Box>
    </Box>
    </div>
      )}
    </>
  );
}

export default Index;
