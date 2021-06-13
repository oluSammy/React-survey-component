import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const navbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      borderBottom: '2px solid #3F51B5',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBarStyles: {
      background: 'transparent',
      boxShadow: 'none',
      color: theme.palette.primary.main,
    },
    toolbarStyles: {
      padding: '3px 3px',
      '@media (max-width: 916px)': {
        padding: '1px !important',
      },
    },
    img: {
      '@media (max-width: 916px)': {
        width: '80px',
      },
    },
    surveyTxt: {
      margin: 0,
      marginLeft: 'auto',
      marginRight: '50px',
    },
  })
);

export default navbarStyles;
