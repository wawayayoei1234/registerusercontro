import React from 'react'
import Title from '../../components/title'
import Logo from './components/logo'
import Logintemplate from './components/logintemplate' 
import { useUser } from '@auth0/nextjs-auth0/client';
import Welcome from '../welcome'
import LinearProgress from '@mui/material/LinearProgress';

function index() {
  const { user, isLoading } = useUser();
  console.log("User : "+user);
  console.log("Loading : "+isLoading);
  return (
    <> 
    {isLoading && <LinearProgress />}
    {user ? (
            <>
              <Welcome/>
            </>
          ) : (
            <>
                <Title namepage="Login" company="Authweiler"/>
                <Logo/>
                <Logintemplate/>
            </>
          )}
    </>
  )
}

export default index