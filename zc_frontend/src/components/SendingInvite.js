import React from 'react'
import { Helmet } from 'react-helmet'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    width: '30rem',
    height: '200px',
    margin: '20px auto',
    marginTop: '205px',
    backgroundcolor: '#FFFFFF'
  },

  title: {
    size: 100,
    textAlign: 'center'
  },
  circular: {
    color: '#343434',
    right: 43,
    bottom: 44
  },
  pos: {
    textAlign: 'center',
    fontfamily: 'Lato',
    fontstyle: 'normal',
    fontweight: 'bold',
    fontsize: 25,
    lineheight: 30
  }
}))

export default function SendingLoading() {
  const classes = useStyles()

  return (
    <div>
      <Helmet>
        <style>{'body { background-color: rgba(58, 58, 58, 0.7); }'}</style>
      </Helmet>
      <Card
        className={classes.root}
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <CardContent>
          <br />
          <br />
          <Typography className={classes.title} gutterBottom align="center">
            <CircularProgress
              className={classes.circular}
              size={65}
              thickness={4}
              circleRatio={0.8}
              align="center"
              variant="indeterminate"
              value={70}
            />
          </Typography>
          <Typography className={classes.pos} color="rgba(58, 58, 58, 0.7)">
            Sending Invities...
          </Typography>
          <br />
          <br />
        </CardContent>
      </Card>
    </div>
  )
}
