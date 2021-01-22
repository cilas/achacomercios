import React from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://achacomercios.com.br/">
        Acha Comércios
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
