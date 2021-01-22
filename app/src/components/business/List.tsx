import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import BusinessCard from './BusinessCard'
import Pagination from '@material-ui/lab/Pagination'

const businessList = [
  {
    id: 3,
    name: 'Brenda Lobato Delícias',
    address: 'Bairro não informado',
    phone: 'Zap: 98608 - 7430',
    image:
      'http://www.achacomercios.com.br/belohorizonte/modules/anuncio/fotos/tn_1596032114logo.jpg'
  },
  {
    id: 1,
    name: 'Agência Bradesco',
    address: 'Av. Visconde de Ibituruna, Número 182, Barreiro, 30640080',
    phone: '(-)0800 7048383',
    image: ''
  },
  {
    id: 2,
    name: 'BANCO ABN AMRO REAL AGENCIA FLORESTA',
    address: 'AVENIDA ASSIS CHATEAUBRIAND, Número 264, Floresta',
    phone: '(31)3274-4511',
    image: ''
  }
]
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 140
  },
  cardContent: {
    flexGrow: 1
  },
  pagination: {
    marginTop: '1rem'
  }
}))

const BusinessList: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={3}>
        {businessList.map(bs => (
          <BusinessCard key={bs.id} business={bs} />
        ))}
      </Grid>
      <Grid
        className={classes.cardGrid}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Grid>
    </Container>
  )
}

export default BusinessList
