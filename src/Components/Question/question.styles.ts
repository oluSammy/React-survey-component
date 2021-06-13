import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const questionStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      body: {
        margin: 0,
        padding: 0,
        color: '#666666',
      },
      h2: {
        margin: 0,
        padding: 0,
      },
    },
    question: {
      backgroundColor: '#F8F8F8',
      boxShadow: '-1px 5px 15px -2px rgba(201,197,186,0.44)',
      padding: '50px 30px',
      borderRadius: '10px',
      marginBottom: '30px',

      '@media (max-width: 916px)': {
        padding: '20px',
      },
    },
    questionBox: {
      display: 'flex',
      alignItems: 'center',
    },
    questionTitle: {
      color: '#333333',
      fontSize: 20,

      '@media (max-width: 916px)': {
        fontSize: 16,
      },
    },
    questionIcon: {
      color: theme.palette.primary.light,
      marginRight: '20px',
    },
    questionDetail: {
      fontSize: 16,
      fontWeight: 600,
    },
    navigation: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '70px',
    },
    navBtn: {
      fontWeight: 700,
    },
    radio: {
      '&$checked': {
        color: '#4B8DF8',
      },
    },
    numberTxt: {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none !important',
        '-moz-appearance': 'none !important',
        margin: 0,
      },
      '&[type=number]': {
        '-webkit-appearance': 'textfield !important',
        '-moz-appearance': 'textfield !important',
      },
    },
    errMsg: {
      marginTop: '20px',
      color: 'red',
    },
    phoneInput: {
      color: theme.palette.primary.main,

      '& input': {
        height: '40px',
      },
    },
    phoneHelperText: {
      fontSize: '12px',
    },
    specify: {
      marginTop: '30px',
    }
  })
);

export default questionStyles;
