import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    maxWidth: 800,
    margin: '0 auto',
    marginTop: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          About{bull}
        </Typography>
        
        <Typography variant="body2" component="p">
          This project is a web page made with React. It shows information about weather by cities from the world
          (from a JSON file) - <span className="spanIcons"><FontAwesomeIcon icon={faUser} /></span> by <a href="https://github.com/michaelx/climate/blob/master/climate.json" target="blank">Michaelx</a> -

          
        </Typography>
      </CardContent>
    </Card>
  );
}