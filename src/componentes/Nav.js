import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const menu = [
    {"texto":"Home", "link":"/"},
    {"texto":"About", "link":"/about"},
    {"texto":"Contact", "link":"/contact"}
];


// const Nav = () => menu.map((nav, i) => <NavLink key={i} to={nav.link}>{nav.texto}</NavLink>)
const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  }));

function Nav(){
    const classes = useStyles();
    return(
        <>
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                WeatherApp
            </Typography>
            <nav>
            
                { menu.map((nav, i) => <Link variant="button" color="textPrimary" href={nav.link} className={classes.link} key={i} >{nav.texto}</Link>) }
            
            {/* <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Support
            </Link> */}
            </nav>
           
        </Toolbar>
    </AppBar>
        </>
    )

}
export default Nav;