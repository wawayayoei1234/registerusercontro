import { Box, Button, FormControl, IconButton, OutlinedInput, Stack } from '@mui/material';
import Image from 'next/image';
import MuiTextField from '@mui/material/TextField';
import Bg from '@/assets/img/bglogingreen.png'
import { partnerdata } from '@/data/partnerdata'
import { useEffect, useState } from 'react';
import BtLogin from '../../../../components/button'
import InputAdornment from '@mui/material/InputAdornment';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import Allgroup from '@/service/getallgroup'
import Login from '@/service/login'
import Router from 'next/router';

const TextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {paddingLeft: 0,},
  '& .MuiInputAdornment-root': {backgroundColor: theme.palette.divider,borderTopLeftRadius: theme.shape.borderRadius + 'px',borderBottomLeftRadius: theme.shape.borderRadius + 'px',
  },}));

function Index() {
  const [state, setState] = useState({token: [],allgroup:[],language:"EN",email:"",matchingemail:"",});    


  
  const handleallgroup = (isFetched) => {
        setState(prevState => ({...prevState,allgroup: isFetched,}));
      };

      const handleToken = (isToken) => {
        setState(prevState => ({ ...prevState, token: isToken }));
    };

  useEffect(() => {
    setState(prevState => ({ ...prevState, email: "" }));
    const language = localStorage.getItem('language');
    if (language) {
      setState(prevState => ({ ...prevState, language: language }));
    }
  }, []);

  const submitemail = () => {
    const domain = state.email.split('@')[1];
    const matching = state.allgroup.find(group => group.name === `@${domain}`);
    const matchingemail = matching ? "ingroup" : "outgroup";
  
    setState(prevState => ({ ...prevState, matchingemail: matchingemail }));
    if (state.email.trim() === "") {
      alert("Please fill in the email.");
    } else {
      if (matchingemail === "ingroup") {
        Router.push({
          pathname: '/companyselection',
          query: { email: state.email }
        });
      } else {
        Router.push({
          pathname: '/accountregistration',
          query: { email: state.email }
        });
      }      
    }
  }


  return (

    <>
    <Login setToken={handleToken} />
    <Allgroup setallgroup={handleallgroup} />
    {partnerdata.map((data, index) =>
    <div key={`${index}`}>
    {/* //*PC */}
    <Box sx={{ display: { xs: 'none', md: 'flex' }, height: '100vh', backgroundColor: '#ffffff' }}>
         <Box sx={{ flex: '4.5', display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
         <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
             <Image alt="image" className='bglogon' src={Bg} />
           </Box>
           <Box sx={{zIndex:1000,textAlign:"center",fontFamily:"Segoe UI",fontSize:"50px",color:"secondary.main",fontWeight:500}}>
             {state.language === "EN" && (data.titleEN)}
             {state.language === "TH" && (data.titleTH)}
          </Box>
          <Box sx={{mt:2,zIndex:1000,textAlign:"center",fontFamily:"Segoe UI",fontSize:"30px",color:"secondary.main",fontWeight:100}}>
             {state.language === "EN" && (data.detail1EN)}
             {state.language === "TH" && (data.detail1TH)}
          </Box>
          <Box sx={{zIndex:1000,textAlign:"center",fontFamily:"Segoe UI",fontSize:"30px",color:"secondary.main",fontWeight:100}}>
             {state.language === "EN" && (data.detail2EN)}
             {state.language === "TH" && (data.detail2TH)}
          </Box>
          <Box sx={{mt:5}}></Box>
          <Link href="/api/auth/login" data-testid="login"><BtLogin text="Login" border="1px solid white" btwidth="150px"  bgcolor="four.main" /></Link>
         </Box>
      <Box sx={{ flex: '5.5', display: 'flex', justifyContent: 'center',flexDirection:"column", alignItems: 'center', position: 'relative',backgroundColor: '#ffffff' }}>
        <Box sx={{mr:"1.25rem", textAlign:"center",fontFamily:"Segoe UI",fontSize:"3.125rem",color:"primary.main",fontWeight:500,zIndex: 1 }}>
          {state.language === "EN" && (data.titleEN2_1)}
          {state.language === "TH" && (data.titleTH2_1)}
        </Box>
        <Box sx={{ textAlign:"center",fontFamily:"Segoe UI",fontSize:"1.875rem",color:"primary.main",fontWeight:400,zIndex: 1 }}>
          {state.language === "EN" && (data.detailEN2_2)}
          {state.language === "TH" && (data.detailTH2_2)}
        </Box>
        <Box sx={{ '@media (max-width: 1000px)':{fontSize:"23px"},mr:"23.75rem",mt:5,textAlign:"center",fontFamily:"Segoe UI",fontSize:"25px",color:"three.main",fontWeight:400,zIndex: 1 }}>
          {state.language === "EN" && (data.email)}
          {state.language === "TH" && (data.email)}
        </Box>
<Box sx={{ mt:1,display: 'flex', flexWrap: 'wrap',width: '33.75rem','@media (max-width: 1000px)': {width: '29.75rem'} }}>
      <TextField
        onChange={(e)=>{setState(prevState => ({ ...prevState, email: e.target.value }));}}
        sx={{width:"100%"}}
        placeholder="Company E-mail Address"
        InputProps={{
          startAdornment: (
            <InputAdornment sx={{padding: '28px 14px',}} position="start">@</InputAdornment>
          ),
          endAdornment:(
            <Stack direction="row" spacing={2}>
             <Button onClick={() => {
               if (state.email.trim() === "") {
                 alert("Please fill in the email.");
               }else{
                 submitemail();
               }
             }} sx={{ fontSize: "1rem", mr: "-14px", height: "3.438rem", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", textTransform: "capitalize" }} variant="contained" endIcon={<ArrowCircleRightOutlinedIcon size="25px" />}>
               Next
             </Button>
          </Stack>
          )
        }}
      />
    </Box>
      </Box>
    </Box>

{/* //^Mobile */}
    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ flex: '1', display: 'flex',justifyContent: 'center',flexDirection: 'column',alignItems: 'center',backgroundColor: '#ffffff',width: '100%',}}>
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Image alt="image" src={Bg} className='bglogon' />
        </Box>
      <Box sx={{mt:4,zIndex:0,textAlign:"center",fontFamily:"Segoe UI",fontSize:"20px",color:"secondary.main",fontWeight:500}}>
          {state.language === "EN" && (data.titleEN)}
          {state.language === "TH" && (data.titleTH)}
       </Box>
       <Box sx={{mt:3,zIndex:0,textAlign:"center",fontFamily:"Segoe UI",fontSize:"15px",color:"secondary.main",fontWeight:100}}>
          {state.language === "EN" && (data.detail1EN)}
          {state.language === "TH" && (data.detail1TH)}
       </Box>
       <Box sx={{zIndex:0,textAlign:"center",fontFamily:"Segoe UI",fontSize:"15px",color:"secondary.main",fontWeight:100}}>
          {state.language === "EN" && (data.detail2EN)}
          {state.language === "TH" && (data.detail2TH)}
       </Box>
       <Box sx={{mt:3}}></Box>
       <Link href="/api/auth/login" data-testid="login"><BtLogin text="Login" border="1px solid white" btwidth="120px"  bgcolor="four.main" /></Link>
      </Box>
      <Box sx={{ flex: '1', display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection:"column",position: 'relative',width: '100%',backgroundColor: '#ffffff'}}>
        <Box sx={{ textAlign:"center",fontFamily:"Segoe UI",fontSize:"20px",color:"primary.main",fontWeight:500,zIndex: 1 }}>
          {state.language === "EN" && (data.titleEN2_1)}
          {state.language === "TH" && (data.titleTH2_1)}
        </Box>
        <Box sx={{mt:1}}></Box>
        <Box sx={{ textAlign:"center",fontFamily:"Segoe UI",fontSize:"15px",color:"primary.main",fontWeight:200,zIndex: 1 }}>
          {state.language === "EN" && (data.detailEN2_2)}
          {state.language === "TH" && (data.detailTH2_2)}
        </Box>
        <Box sx={{'@media (max-width: 350px)': {mr:"150px"} ,mr:"230px",mt:5,textAlign:"center",fontFamily:"Segoe UI",fontSize:"15px",color:"three.main",fontWeight:200,zIndex: 1 }}>
          {state.language === "EN" && (data.email)}
          {state.language === "TH" && (data.email)}
        </Box>
        <Box sx={{ mt:1,display: 'flex', flexWrap: 'wrap',width: '20.75rem','@media (max-width: 350px)': {width: '15rem'} }}>
      <TextField sx={{width:"100%"}} 
      onChange={(e)=>{setState(prevState => ({ ...prevState, email: e.target.value }));}}
      size="small"
        placeholder="Company E-mail Address"
        InputProps={{ 
          startAdornment: ( <InputAdornment sx={{padding: '20px 14px',}} position="start">@</InputAdornment>),
          endAdornment:(
            <Stack direction="row">
              <Button onClick={() => {
               if (state.email.trim() === "") {
                 alert("Please fill in the email.");
               }else{
                 submitemail();
               }
             }} sx={{fontSize:"0.75rem",mr:"-14px",height:"2.438rem",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px",textTransform:"capitalize"}} variant="contained" endIcon={<ArrowCircleRightOutlinedIcon size="25px"/>}>
               Next
             </Button>
          </Stack>
          )
        }}
      />
    </Box>
      </Box>
    </Box>
    </div>
      )}
    </>
  );
}

export default Index;
