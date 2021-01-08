import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'

const cards = [
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
  },
  {
    id: 3,
    name: 'Brenda Lobato Delícias',
    address: 'Bairro não informado',
    phone: 'Zap: 98608 - 7430',
    image:
      'http://www.achacomercios.com.br/belohorizonte/modules/anuncio/fotos/tn_1596032114logo.jpg'
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
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

const BusinessList: React.FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map(card => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.image}
                title={card.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography>{card.address}</Typography>
                <Typography>{card.phone}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default BusinessList
