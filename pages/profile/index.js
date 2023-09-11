import React from 'react'
import Layout from '../../components/layout'
import Navbar from './components/navbar'
import Form from './components/form'
import { useUser } from '@auth0/nextjs-auth0/client';
import Logo from '../login/components/logo'
import Logintemplate from '../login/components/logintemplate' 
import { LinearProgress } from '@mui/material';
function Index() {
  const { user, isLoading } = useUser();
  return (
    <>
    {isLoading && <LinearProgress />}
    {user ? (
            <>
             <Layout containerheight="100vh" templaterow="1fr auto 1fr" templateareas="'nav' 'content1' 'footer'" bgimage="url('https://github.com/joft60302/paticles/blob/main/Content4.png?raw=true')" 
              mtemplaterow="1fr auto 1fr" mtemplateareas="'nav' 'content1' 'footer'"
              nav={<Navbar/>}
              Content1={<Form/>}
              footer=""
            />
            </>
          ) : (
            <>
                <Logo/>
                <Logintemplate/>
            </>
          )}
    </>
   
  )
}

export default Index

