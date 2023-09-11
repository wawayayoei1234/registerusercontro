import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Logo from '@/assets/img/logo-AuthWeiler.png'
import iconuser from '@/assets/img/AuthWeiler-icon user 3.png'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../welcome/css/welcome.module.css'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function ResponsiveAppBar() {
  const { user, isLoading } = useUser();

  const router = useRouter();

  const [isSubmenuVisible, setSubmenuVisible] = React.useState(false);

  const handleMenuClick = () => {
    setSubmenuVisible(!isSubmenuVisible);
  };

  const [language, setlanguage] = React.useState("EN");

  React.useEffect(() => {
    const language = (localStorage.getItem('language'));
    if (language) {
      setlanguage(language);
    }
  }, []);
  

  return (
    <>
    {/* //&PC */}
      <Box sx={{mt:3,mb:3,display: { xs: 'none', md: 'flex' },zIndex:99, justifyContent: 'space-between', alignItems: 'center'}} >
        <Box className="zoomlogo" display="flex" sx={{cursor:"pointer"}} >
            <Box sx={{mr:10}}></Box>
            <Link href="/" >
              <Image width="200"  alt="logo" src={Logo}></Image>
            </Link>
        </Box>
        <Box className={styles.dropdown}>
           <Box onClick={handleMenuClick} className="zoomlogo" display="flex" sx={{cursor:"pointer",alignItems:"center"}}>
             <Image width="40"  alt="logo" src={iconuser}></Image>
             <Box sx={{mr:0.5}}></Box>
             <Box className={styles.lang} sx={{color:"secondary.main",fontFamily:"Segoe UI"}}>
               {user?.name}
             </Box>
             <Box sx={{mr:10}}></Box>
           </Box>
           {isSubmenuVisible && (
       <Box sx={{mt:1}}  className={styles.dropdowncontent}>
        <Link href="/profile" style={{textDecoration:"none"}}>
         <Box  sx={{cursor:"pointer"}} className={styles.lang2} >My Profile</Box>
         </Link>
         <Link style={{textDecoration:"none"}} href="/api/auth/logout" data-testid="logout">
           <Box sx={{cursor:"pointer"}} className={styles.lang3} >Logout</Box>
         </Link>
       </Box>
      )}
     </Box>
      </Box>
    {/* //&PC */}

      {/* //^Mobile */}
      <Container sx={{mt:3,display: { xs: 'flex', md: 'none' },justifyContent: 'space-between', alignItems: 'center'}} maxWidth="false">
      <Box display="flex" sx={{cursor:"pointer"}}>
      <Link href="/" >
          <Image width="150" height="auto"  alt="logo" src={Logo}></Image>
      </Link>
      </Box>
      <Box className={styles.dropdown}>
      <Box onClick={handleMenuClick} display="flex" sx={{cursor:"pointer"}}>
        <Image width="20"  alt="logo" src={iconuser}></Image>
        <Box sx={{mr:0.5}}></Box>
        <Box sx={{color:"secondary.main",fontFamily:"Prompt"}}>
          {user?.name}
        </Box>
      </Box>
      {isSubmenuVisible && (
       <Box sx={{mt:1}}  className={styles.dropdowncontent}>
         <Box sx={{cursor:"pointer",textAlign:"center"}} className={styles.lang2} >My Profile</Box>
         <Link style={{textDecoration:"none"}} href="/api/auth/logout" data-testid="logout">
           <Box sx={{cursor:"pointer",textAlign:"center"}} className={styles.lang3} >Logout</Box>
         </Link>
       </Box>
      )}
     </Box>
      </Container>
      {/* //^Mobile */}
      </>
 
  );
}

export default ResponsiveAppBar;
