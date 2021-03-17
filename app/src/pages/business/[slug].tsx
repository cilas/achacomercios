import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { CssBaseline } from '@material-ui/core'
import BusinessDetailComponent from '../../components/business/BusinessDetail'

const BusinessDetail: React.FC = () => {
  return (
    <CssBaseline>
      <NavBar />
      <BusinessDetailComponent></BusinessDetailComponent>
      <Footer />
    </CssBaseline>
  )
}

export default BusinessDetail
