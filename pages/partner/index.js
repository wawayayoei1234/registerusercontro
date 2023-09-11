import React from 'react'
import Title from '../../components/title'
import Logo from './components/logo'
import Logintemplate from './components/partnertemplate'
import { useUser } from '@auth0/nextjs-auth0/client';
import Welcome from '../welcome'
import LinearProgress from '@mui/material/LinearProgress';

function index() {
  const { user, isLoading } = useUser();
  return (
    <> 
    {/* {isLoading && <LinearProgress />}
    {user ? (
            <>
              <Welcome/>
            </>
          ) : (
            <> */}
                <Title namepage="Partner" company="Authweiler"/>
                <Logo/>
                <Logintemplate/>
            {/* </>
          )} */}
    </>
  )
}

export default index