import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '../components/Link'
import Copyright from '../components/Copyright'
import NavBar from '../components/NavBar'
import { CssBaseline } from '@material-ui/core'
const Home: React.FC = () => {
  return (
    <CssBaseline>
      <NavBar />

      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <Copyright />
        </Box>
      </Container>
    </CssBaseline>
  )
}

export default Home
