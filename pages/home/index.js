import React from 'react'
import Title from '../../components/title'
import Navbar from '../../components/navbar'
import Bg from './components/bg' 
import Heading from './components/heading'
import Detail1 from './components/detail1'
import Detail2 from './components/detail2'
import BtLearnMore from './components/learnmore'
import { useUser } from '@auth0/nextjs-auth0/client';
import Login from '../login/'
import LinearProgress from '@mui/material/LinearProgress';


function index() {
  const { user, isLoading } = useUser();


  return (
    <div>
         {isLoading && <LinearProgress />}
         {user ? (
            <>
              <Login/>
            </>
          ) : (
            <>
             <Title namepage="Home" company="Authweiler"/>
             <Navbar/>
             <Heading/>
             <Detail1/>
             <Detail2/>
             <BtLearnMore/>
             <Bg/>
            </>
          )}
    </div>
  )
}

export default index