import React from 'react'
import Layout from '../../components/layout'
import Navbar from './components/navbar'
import Form from './components/form'
function Index() {
  return (
    <Layout containerheight="100vh" templaterow="1fr 100vh" templateareas="'nav' 'content1'" bgimage="url('https://github.com/joft60302/paticles/blob/main/Content4.png?raw=true')" 
      mtemplaterow="1fr 100vh" mtemplateareas="'nav' 'content1'"
      nav={<Navbar/>}
      Content1={<Form/>}
    />
  )
}

export default Index

