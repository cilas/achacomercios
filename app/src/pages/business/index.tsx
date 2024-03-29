import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { CssBaseline } from '@material-ui/core'
import BusinessList from '../../components/business/List'

const Business: React.FC = () => {
  return (
    <CssBaseline>
      <NavBar />
      <BusinessList />
      <Footer />
    </CssBaseline>
  )
}

export default Business
