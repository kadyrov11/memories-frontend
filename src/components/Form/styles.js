import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    textAlign: 'center'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  file:{
    visibility: 'hidden',
    
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  [theme.breakpoints.up("md")]:{
    formContainer: {
      position: 'sticky',
      top: '20px',
    }
  },
}));