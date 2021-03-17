import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListServices from './ListService'

const businessDetail = {
  id: 3,
  name: 'Brenda Lobato Delícias',
  address: 'Bairro não informado',
  phone: 'Zap: 98608 - 7430',
  image:
    'http://www.achacomercios.com.br/belohorizonte/modules/anuncio/fotos/tn_1596032114logo.jpg'
}
const tileData = [
  {
    img:
      'http://www.achacomercios.com.br/belohorizonte/modules/anuncio/fotos/tn_1596032114logo.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 2,
    featured: true
  },
  {
    img:
      'http://www.achacomercios.com.br/belohorizonte/modules/anuncio/fotos/tn_1596032114logo.jpg',
    title: 'Tasty burger',
    author: 'director90'
  },
  {
    img:
      'http://www.achacomercios.com.br/belohorizonte/modules/anuncio/fotos/tn_1596032114logo.jpg',
    title: 'Camera',
    author: 'Danson67'
  },
  {
    img:
      'http://www.achacomercios.com.br/belohorizonte/modules/anuncio/fotos/tn_1596032114logo.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true
  },
  {
    img:
      'http://www.achacomercios.com.br/belohorizonte/modules/anuncio/fotos/tn_1596032114logo.jpg',
    title: 'Hats',
    author: 'Hans'
  }
]
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}))

const BusinessDetailComponent: React.FC = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h1" component="h2" align="center">
          {businessDetail.name}
        </Typography>
      </Grid>

      <Grid item xs={6} sm={12}>
        <ListServices></ListServices>
      </Grid>
      <Grid item xs={6} sm={12}>
        <GridList cellHeight={160} cols={3} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  )
}

export default BusinessDetailComponent
