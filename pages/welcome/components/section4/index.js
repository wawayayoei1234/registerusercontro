import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import {section4} from '@/data/section4data'
import { styledata } from '@/data/styledata'
import Divider from '@mui/material/Divider';
import styles from '../../../welcome/css/welcome.module.css' 
import account from '@/assets/img/account-manage.png'
import OpenID from '@/assets/img/AuthWeiler-logo open ID.png'


function Index() {
  return (
      <div>
      {/* //^PC */}
      <Box sx={{ display: { xs: 'none', md: 'none', lg: 'flex' }, flexDirection: "column" }}>
        {/* //!Section1 */}
          {/* <Box sx={{width:"100%",color:"#fff",display:"flex",justifyContent:"center"}}>
            <Box width="10%"></Box>
            <Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
                <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "45px",fontWeight:700}}>{section4[0].heading1}</Box>
                <Box sx={{mt:3}}>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_1}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_2}</Box> 
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_3}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_4}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_5}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_6}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_7}</Box>
                </Box>
                <Divider width="90%" sx={{backgroundColor:"homepage.main",mt:4}}/>
           </Box>
            <Box sx={{flexGrow:1}}></Box>
              <Image className={styles.image2} alt='loginreview' src={account} priority={true}></Image>
            <Box width="10%"></Box>
          </Box> */}

           <Box sx={{width:"100%",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",mt:3}}>
              <Box width="10%"></Box>
              <Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
              <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "45px",fontWeight:700}}>{section4[0].heading1}</Box>
              <Box sx={{mt:3}}>
                    <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_1}</Box>
                    <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_2}</Box> 
                    <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_3}</Box>
                    <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_4}</Box>
                    <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_5}</Box>
                    <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_6}</Box>
                    <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail1_7}</Box> 
              </Box>
                  <Divider width="100%" sx={{backgroundColor:"homepage.main",mt:4,mb:3}}/>
              </Box>
              <Box sx={{width:"5%"}}></Box>
              <Image className={styles.imageopenid} alt='loginreview' src={account} priority={true}></Image> 
           </Box>

          {/* //*Section2 */}
          <Box sx={{width:"100%",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",mt:3}}>
            <Box width="10%"></Box>
            <Image className={styles.imageopenid} alt='loginreview' src={OpenID} priority={true}></Image> 
            <Box sx={{width:"5%"}}></Box>
            <Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
            <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "45px",fontWeight:700}}>{section4[0].heading2}</Box>
            <Box sx={{mt:3}}>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail2_1}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section4[0].detail2_2}</Box> 
            </Box>
                <Divider width="100%" sx={{backgroundColor:"homepage.main",mt:4,mb:3}}/>
            </Box>
          </Box>

        </Box>
        <Box sx={{mt:10}}></Box>
        {/* //^PC */}

        {/* //&Mobile */}
      <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' }, flexDirection: "column",mt:3,mb:3 }}>
        {/* //!Section1 */}
          <Box sx={{width:"100%",color:"#fff",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            <Box width="10%"></Box>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" textAlign="center">
                <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "25px",fontWeight:700}}>{section4[0].heading1}</Box>
                <Box sx={{mt:3}}>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section4[0].detail1_1}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section4[0].detail1_2}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section4[0].detail1_3}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section4[0].detail1_4}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section4[0].detail1_5}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section4[0].detail1_6}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section4[0].detail1_7}</Box> 
                </Box>
                <Divider width="100%" sx={{backgroundColor:"homepage.main",mt:4}}/>
           </Box>
            <Box sx={{mt:3}}></Box>
              <Image className={styles.image2mobile} alt='loginreview' src={account} priority={true}></Image>
            <Box width="10%"></Box>
          </Box>

          {/* //*Section2 */}
          <Box sx={{width:"100%",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",mt:3}}>
            <Box width="10%"></Box>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" textAlign="center">
            <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "20px",fontWeight:700}}>{section4[0].heading2}</Box>
            <Box sx={{mt:3}}>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section4[0].detail2_1}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section4[0].detail2_2}</Box>
            </Box>
                <Divider width="100%" sx={{backgroundColor:"homepage.main",mt:4}}/>
            </Box>
            <Box width="10%"></Box>
            <Image className={styles.imageopenidmobile} alt='loginreview' src={OpenID} priority={true}></Image> 
          </Box>
        </Box>
        {/* //&Mobile */}


      </div>
  );
}

export default Index;
