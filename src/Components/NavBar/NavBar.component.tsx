import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import navbarStyles from './Navbar.styles';
import logo from '../../assets/Icons/logo.png';

const NavBar = () => {
  const classes = navbarStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarStyles}>
        <Toolbar className={classes.toolbarStyles}>
          <figure>
            <img src={logo} className={classes.img} alt="wazobia logo" />
          </figure>
          <h3 className={classes.surveyTxt}>Survey</h3>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
