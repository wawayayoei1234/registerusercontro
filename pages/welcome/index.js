// index.js
import React from 'react';
import Layout from '../../components/layout';
import { Box, LinearProgress } from '@mui/material';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section5 from './components/section5'
import { useUser } from '@auth0/nextjs-auth0/client';
import Logo from '../login/components/logo'
import Logintemplate from '../login/components/logintemplate' 
import Title from '@/components/title'
function IndexPage() {
  const { user, isLoading } = useUser();
  return (
    <>
    {isLoading && <LinearProgress />}
    {user ? (
            <>
            <Title namepage="Home" company="Authweiler"/>
            <Layout containerheight="auto" templaterow="1fr 100vh auto auto auto auto auto" templateareas="'nav' 'content1' 'content2' 'content3' 'content4' 'content5' 'footer'" bgimage="url('https://raw.githubusercontent.com/joft60302/paticles/main/AuthWeilerbg.png')" bgcolor="#000"
            mtemplaterow="1fr 100vh auto auto auto auto auto" mtemplateareas="'nav' 'content1' 'content2' 'content3' 'content4' 'content5' 'footer'"
              nav={<Navbar/>}
              Content1={<Section1/>}
              Content2={<Section2/>}
              Content3={<Section3/>}
              Content4={<Section4/>}
              Content5={<Section5/>}
              footer={<Footer/>}
            />
            </>
          ) : (
            <>
                <Logo/>
                <Logintemplate/>
            </>
          )}
    </>
  );
}

export default IndexPage;
