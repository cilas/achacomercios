import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'

type IBusiness = {
  id: number
  name: string
  address: string
  phone: string
  image: string
}
const useStyles = makeStyles({
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
})
const BusinessCard: React.FC<{ business: IBusiness }> = ({ business }) => {
  const classes = useStyles()
  return (
    <Grid item sm={12}>
      <CardActionArea component="a" href="/business/teste-slug">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {business.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {business.address}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {business.phone}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Ver detalhes...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={business.image}
              title={business.name}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default BusinessCard
