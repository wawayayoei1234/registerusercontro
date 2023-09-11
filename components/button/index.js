import { Button } from '@mui/material'
import React from 'react'
import { signIn } from "next-auth/react"

function index(props) {
  return (
      <Button className='btlearnmore' sx={{width: props.btwidth,height: props.btheight,backgroundColor:props.maincolor,color:"secondary.main",border: props.border,borderRadius:"30px",fontFamily:"Segoe UI",textTransform:"uppercase",fontSize:props.fontsize,fontWeight:400,
      '&:hover': {
        backgroundColor: props.bgcolor,
        color: props.textcolor
      }}}>{props.text}</Button>
  )
}

export default index