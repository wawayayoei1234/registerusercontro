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
import LinearProgress from '@mui/material/LinearProgress';



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
      <Box sx={{mt:3,mb:3,display: { xs: 'none', md: 'flex' },zIndex:99, justifyContent: 'space-between', alignItems: 'center'}} >
        <Box className="zoomlogo" display="flex" sx={{cursor:"pointer"}} >
            <Box sx={{mr:10}}></Box>
            <Link href="/" >
              <Image width="200"  alt="logo" src={Logo}></Image>
            </Link>
        </Box>
      </Box>
      
      <Container sx={{mt:3,display: { xs: 'flex', md: 'none' },justifyContent: 'space-between', alignItems: 'center'}} maxWidth="false">
      <Box display="flex" sx={{cursor:"pointer"}}>
      <Link href="/" >
          <Image width="150" height="auto"  alt="logo" src={Logo}></Image>
      </Link>
      </Box>
      </Container>
      </>
 
  );
}

export default ResponsiveAppBar;
