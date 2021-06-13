import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const surveyStyles = makeStyles((theme: Theme) =>
  createStyles({
    survey: {
      marginTop: '50px',

      '@media (max-width: 916px)': {
        marginBottom: '30px',
      },
    },
    progress: {
      width: '60%',
      margin: '0 auto',
      height: '8px',
      borderRadius: '20px',
      marginBottom: '70px',

      '@media (max-width: 916px)': {
        width: '80%',
      },
    },
    questionContainer: {
      width: '55vw',
      margin: '0 auto',

      '@media (max-width: 916px)': {
        width: '75vw',
      },
      '@media (max-width: 527px)': {
        width: '90vw',
      },
    },
    progressNo: {
      fontSize: '18px',
      textAlign: 'center',
      marginBottom: '8px',
    },
    backdrop: {
      color: '#000000'
    }
  })
);

export default surveyStyles;
