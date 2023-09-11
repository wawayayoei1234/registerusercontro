import '../assets/css/globals.css'
import theme from '../utils/theme'
import { ThemeProvider } from '@mui/material'
import dynamic from 'next/dynamic'
import {SessionProvider} from 'next-auth/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from 'next/head';

const Chatbot = dynamic(
  import('../components/chatbot'),
  { ssr: false }
)


export default function App({ Component, pageProps,session }) {
  const { user } = pageProps;
  return (
    <div>
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
    </Head>
    <ThemeProvider theme={theme}>
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
      <Chatbot/>
    </ThemeProvider> 
    </div>
   );
 }

 