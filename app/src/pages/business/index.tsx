import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '../../components/Link'
import Copyright from '../../components/Copyright'
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
