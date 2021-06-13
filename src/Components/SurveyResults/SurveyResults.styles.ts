import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const surveyResultsStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      body: {
        margin: 0,
        padding: 0,
        color: '#666666',
      },
      h6: {
        margin: 0,
        padding: 0,
      },
    },
    surveyResults: {
      marginBottom: 40,
    },
    title: {
      textAlign: 'center',
      color: theme.palette.primary.dark,
    },
    question: {
      display: 'flex',
      alignItems: 'flex-start',
      backgroundColor: '#F8F8F8',
      padding: '20px',
      borderRadius: 10,
      '@media (max-width: 768px)': {
        padding: '5px',
      },
    },
    questionIcon: {
      marginRight: 20,
      color: theme.palette.primary.light,
      fontSize: 15,
      marginTop: '4px',

      '@media (max-width: 400px)': {
        marginRight: 14,
        fontSize: 12,
      },
    },
    surveyContainer: {
      width: '60vw',
      margin: '0 auto',

      '@media (max-width: 768px)': {
        width: '90vw',
      },
    },
    questionTxt: {
      fontSize: '18px',
      margin: 0,

      '@media (max-width: 400px)': {
        fontSize: 14,
      },
    },
    answer: {
      marginTop: 2,
      padding: 20,
      display: 'flex',
      alignItems: 'flex-start',

      '@media (max-width: 400px)': {
        padding: 10,
      },
    },
    qAndA: {
      border: `1px solid ${theme.palette.grey[100]}`,
      padding: 20,
      borderRadius: 20,
      boxShadow: '-1px 5px 15px -2px rgba(201,197,186,0.44)',
      marginBottom: 10,

      '@media (max-width: 400px)': {
        padding: 15,
      },
    },
  })
);

export default surveyResultsStyles;
