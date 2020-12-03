import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
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

export default function Contact() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let alumnos = ["Juan Pablo La Mattina", "Avatar"];

  return (
    <Card className={classes.root}>
        <CardContent>
        
        <Typography variant="h5" component="h2">
            Contacts{bull}
        </Typography>
        
        <Typography variant="body2" component="p">
        <List className={classes.root}>
        {alumnos.map((alumno, i) => (  <p>{alumno}</p>  ))}
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Avatar" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        primary="Juan Pablo La Mattina"
        secondary={
            <React.Fragment>
            <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
            >
                https://github.com/JPLAMATTINA
            </Typography>
            
            </React.Fragment>
        }
        />
    </ListItem>
        <Divider variant="inset" component="li" />
    </List>

        </Typography>
    </CardContent>
    </Card>
 );
}