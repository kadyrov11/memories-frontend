import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formContainer: {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  goBack:{
    position: 'absolute',
    backgroundColor: 'white',
    top: theme.spacing(2),
    left: theme.spacing(2),
    cursor: 'pointer'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
    }
  },
  submit: {
    marginBottom: theme.spacing(4),
    padding: `${theme.spacing(1)}px 0`
  },

  btnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  }
  }));