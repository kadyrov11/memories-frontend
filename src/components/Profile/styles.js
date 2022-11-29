import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  profile: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px' ,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  avatar: {
    width: '100px',
    height: '100px',
    marginBottom: theme.spacing(5),
    fontSize: '40px',
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  userInfo:{
    marginBottom: theme.spacing(5),
  },
  goBack: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    padding: theme.spacing(1),
    color: '#151515',
    cursor: 'pointer'
  }
  })
);